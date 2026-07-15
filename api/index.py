import os
import json
import re
import urllib.request
import time
from flask import Flask, request, jsonify

app = Flask(__name__)

def load_config():
    # Mengambil kunci API dari Environment Variable Vercel (Prioritas 1)
    env_keys = os.environ.get("GEMINI_API_KEY", "")
    if env_keys:
        try:
            # Jika disimpan sebagai string JSON array
            if env_keys.startswith("["):
                return {"GEMINI_API_KEY": json.loads(env_keys)}
            # Jika berupa string tunggal atau koma terpisah
            elif "," in env_keys:
                return {"GEMINI_API_KEY": [k.strip() for k in env_keys.split(",")]}
            else:
                return {"GEMINI_API_KEY": [env_keys.strip()]}
        except Exception:
            pass

    # Fallback ke config.json lokal jika diupload (Prioritas 2)
    config_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'config.json')
    if os.path.exists(config_path):
        try:
            with open(config_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            pass
    return {}

def get_api_keys(config):
    keys = []
    val = config.get("GEMINI_API_KEY", "")
    if isinstance(val, list):
        keys.extend(val)
    elif val:
        keys.append(val)
        
    val2 = config.get("api_key", "")
    if isinstance(val2, list):
        keys.extend(val2)
    elif val2:
        if val2 not in keys:
            keys.append(val2)
            
    val3 = config.get("api_keys", [])
    for k in val3:
        if k not in keys:
            keys.append(k)
            
    if not keys:
        keys = [""]
    return keys

def parse_data_url(data_url):
    if not data_url or not isinstance(data_url, str):
        return None, None
    m = re.match(r'^data:([^;]+);base64,(.+)$', data_url)
    if m:
        return m.group(1), m.group(2)
    return None, None

def call_gemini_api(api_keys, message, image_data_url=None, local_prediction=None):
    if not api_keys or not api_keys[0]:
        return {"reply": "Maaf, API Key Gemini belum dikonfigurasi di Environment Variable Vercel."}
    
    # Membaca data Buku Tumbuhan Obat Tradisional Papua (SP3T 2016)
    book_context = ""
    try:
        book_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'app', 'buku_kearifan_lokal.json')
        if os.path.exists(book_path):
            with open(book_path, 'r', encoding='utf-8') as bf:
                book_data = json.load(bf)
                book_context = (
                    "\n\n[RUJUKAN RESMI BUKU: Tumbuhan Obat Tradisional Papua; Berdasarkan Kearifan Lokal Masyarakat Papua (SP3T 2016)]\n"
                    "Gunakan data dari buku rujukan resmi berikut untuk menjawab pertanyaan pengguna dengan akurasi sangat tinggi. "
                    "Integrasikan data ini (deskripsi fisik, khasiat lokal, nama daerah/suku, cara pemanfaatan, kandungan kimia) dengan pengetahuan umum yang Anda miliki:\n"
                )
                for plant_key, plant_info in book_data.items():
                    book_context += (
                        f"- Nama Lokal: {plant_info.get('nama_lokal')}\n"
                        f"  Nama Ilmiah: {plant_info.get('nama_ilmiah')} (Famili: {plant_info.get('famili')})\n"
                        f"  Nama Lain: {plant_info.get('nama_lain')}\n"
                        f"  Deskripsi Buku: {plant_info.get('deskripsi')}\n"
                        f"  Penggunaan Tradisional Papua: {plant_info.get('penggunaan_tradisional') or plant_info.get('cara_pemanfaatan')}\n"
                        f"  Kandungan Kimia Buku: {plant_info.get('kandungan_kimia')}\n"
                    )
    except Exception as e:
        print("Gagal membaca buku_kearifan_lokal.json:", e)

    local_guidance = ""
    use_image = True
    
    if image_data_url:
        print("--- DEBUG CHATBOT: Mengklasifikasikan gambar secara backend ---")
        api_prediction = call_gemini_classify(api_keys, image_data_url)
        print(f"--- DEBUG CHATBOT: api_prediction = {api_prediction} ---")
        
        if api_prediction and api_prediction.get("class") not in ["unknown", "error"]:
            local_prediction = api_prediction
        else:
            if local_prediction and isinstance(local_prediction, dict) and local_prediction.get("class") != "unknown":
                print(f"--- DEBUG CHATBOT: Fallback menggunakan local_prediction: {local_prediction} ---")
            else:
                local_prediction = api_prediction
                
    if local_prediction and isinstance(local_prediction, dict):
        local_class = local_prediction.get("class", "")
        local_conf = local_prediction.get("confidence", 0.0)
        
        plant_names = {
            "buah-merah": ("Daun Buah Merah", "Pandanus conoideus Lam"),
            "daun-gatal": ("Daun Gatal", "Laportea decumana"),
            "daun-gedi": ("Daun Gedi", "Abelmoschus manihot L."),
            "sarang-semut": ("Sarang Semut", "Myrmecodia spp")
        }
        
        if local_class in plant_names:
            nama_lokal, nama_latin = plant_names[local_class]
            local_guidance = (
                f"Tanaman telah diklasifikasikan oleh model CNN sebagai:\n"
                f"Nama Lokal : {nama_lokal}\n"
                f"Nama Latin : {nama_latin}\n\n"
                f"Tugas Anda:\n"
                f"- Jelaskan manfaatnya.\n"
                f"- Jelaskan cara pengolahan.\n"
                f"- Jelaskan kandungan.\n"
                f"- Berikan peringatan penggunaan.\n\n"
                f"Jangan mengubah nama tanaman. Jangan mengidentifikasi ulang gambar."
            )
            use_image = False
        elif local_class == "tanaman-herbal":
            local_guidance = (
                f"Tanaman telah diklasifikasikan oleh model CNN sebagai: Tanaman Herbal secara umum (Akurasi: {local_conf}%).\n\n"
                f"Tugas Anda:\n"
                f"- Analisis gambar tersebut secara visual untuk mengidentifikasi nama spesifik tanaman herbal tersebut (misal: Daun Sirih, Daun Kelor, Sambiloto, dll.).\n"
                f"- Sapa pengguna secara ramah dan sebutkan nama tanaman yang Anda identifikasi tersebut secara spesifik.\n"
                f"- Jelaskan manfaat dan cara pengolahannya secara tradisional.\n"
                f"- Ingatkan mereka untuk tetap berhati-hati dalam pemanfaatan herbal secara aman."
            )
            use_image = True
        elif local_class == "unknown":
            local_guidance = (
                f"Model CNN mendeteksi gambar sebagai: Gambar Tidak Dikenal (Akurasi: 0.0%).\n\n"
                f"Tugas Anda:\n"
                f"- Sampaikan secara ramah kepada pengguna bahwa gambar tersebut terdeteksi sebagai objek non-tanaman herbal.\n"
                f"- Minta mereka untuk mengambil foto ulang dengan lebih jelas, fokus, dan dekat pada helai daun tanaman obat."
            )
            use_image = False
            
    parts = []
    if image_data_url and use_image:
        mime_type, base64_data = parse_data_url(image_data_url)
        if mime_type and base64_data:
            parts.append({
                "inlineData": {
                    "mimeType": mime_type,
                    "data": base64_data
                }
            })
            botany_instruction = (
                "[INSTRUKSI SISTEM ANALISIS CITRA: Lakukan klasifikasi tanaman herbal dengan tingkat akurasi yang sangat tinggi. "
                "Secara khusus, periksa karakteristik visual daun untuk mengidentifikasi 4 target utama:\n"
                "1. Daun Buah Merah (Pandanus conoideus Lam)\n"
                "2. Daun Gatal (Laportea decumana)\n"
                "3. Daun Gedi (Abelmoschus manihot L.)\n"
                "4. Sarang Semut (Myrmecodia spp)\n"
                "Jelaskan khasiat dan pengolahannya dalam format yang rapi dan bersahabat.]\n\n"
            )
            message = botany_instruction + message
            
    if local_guidance:
        message = local_guidance

    parts.append({"text": message})
    
    system_instruction_text = (
        "Kamu adalah PapuaBot, asisten AI pintar tanaman herbal khas Papua Barat Daya yang sangat ramah, santai, dan bersahabat. "
        "Bicaralah dengan gaya bahasa santai yang akrab seperti sedang mengobrol dengan teman dekat (gunakan kata sapaan hangat seperti 'Sobat', 'kamu', 'kita'). "
        "Jangan gunakan bahasa yang kaku, formal, atau terlalu akademis. Penjelasan harus sangat praktis dan membumi agar warga tidak bingung. "
        "ATURAN MENGENAI TANAMAN DI LUAR DATABASE UTAMA:\n"
        "- Jika pengguna bertanya tentang tanaman obat/herbal, atau mengunggah gambar tanaman, selain dari 4 tanaman fokus utama riset kita (yaitu: Daun Gedi, Daun Buah Merah, Daun Gatal, dan Sarang Semut), atau bertanya di luar database utama kita:\n"
        "  Kamu WAJIB menyisipkan kalimat pemberitahuan khusus di bagian paling awal jawabanmu yang berbunyi seperti: "
        "'Sobat, perlu diketahui bahwa tanaman/informasi ini tidak ada dalam database utama HerbaPua. Database utama penelitian kami hanya berfokus pada 4 tanaman obat khas Papua Barat Daya, yaitu: Daun Gedi, Daun Buah Merah, Daun Gatal, dan Sarang Semut. Namun, karena Sobat ingin mengetahui informasinya, berikut akan saya berikan penjelasan lengkap tentang yang ditanyakan:'\n\n"
        "ATURAN FORMAT JAWABAN:\n"
        "- Gunakan banyak baris baru (jarak/spasi antar paragraf) agar penjelasan tidak menumpuk padat dan enak dibaca.\n"
        "- Gunakan poin-poin singkat yang jelas untuk khasiat dan cara pengolahan tradisional.\n"
        "- Gunakan emoji tanaman (🍃, 🌱, 🌶️, 🪵) secara menyenangkan agar terkesan hidup dan santai.\n"
        "- Jika menganalisis foto daun, ingatkan secara santai bahwa analisis AI ini bukan rujukan dokter resmi.\n"
        "- Di akhir obrolan, selalu ingatkan secara santai dan bersahabat agar mereka tetap berkonsultasi dengan puskesmas, dokter, atau tokoh adat terdekat sebelum mengonsumsi ramuan herbal demi menjaga keselamatan kesehatan."
    )
    if book_context:
        system_instruction_text += book_context

    req_body = {
        "contents": [{"parts": parts}],
        "systemInstruction": {"parts": [{"text": system_instruction_text}]}
    }
    
    max_retries = len(api_keys) * 2
    for attempt in range(max_retries):
        current_key = api_keys[attempt % len(api_keys)]
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={current_key}"
        req_data = json.dumps(req_body).encode('utf-8')
        req = urllib.request.Request(url, data=req_data, headers={'Content-Type': 'application/json'})
        
        try:
            with urllib.request.urlopen(req, timeout=20) as response:
                res_body = response.read().decode('utf-8')
                res_json = json.loads(res_body)
                candidates = res_json.get("candidates", [])
                if candidates:
                    content = candidates[0].get("content", {})
                    parts = content.get("parts", [])
                    if parts:
                        reply_text = parts[0].get("text", "").strip()
                        
                        if local_prediction and isinstance(local_prediction, dict):
                            local_class = local_prediction.get("class", "")
                            local_conf = local_prediction.get("confidence", 0.0)
                            
                            plant_display_names = {
                                "buah-merah": "Daun Buah Merah",
                                "daun-gatal": "Daun Gatal",
                                "daun-gedi": "Daun Gedi",
                                "sarang-semut": "Sarang Semut",
                                "tanaman-herbal": "Tanaman Herbal"
                            }
                            
                            if local_class in plant_display_names:
                                disp_name = plant_display_names[local_class]
                                reply_text = f"**Hasil Klasifikasi CNN:** {disp_name} ({local_conf}%)\n\n" + reply_text
                            elif local_class == "unknown":
                                reply_text = f"**Hasil Klasifikasi CNN:** Gambar Tidak Dikenal\n\n" + reply_text
                                
                        return {"reply": reply_text}
                return {"reply": "Maaf, tidak ada respon dari AI."}
        except Exception as e:
            print(f"Chat API Error (Attempt {attempt+1}/{max_retries}): {e}")
            if "429" in str(e) and len(api_keys) > 1:
                continue
            elif "429" in str(e):
                time.sleep(2)
                continue
            return {"reply": f"Gagal menghubungi Gemini API: {str(e)}"}

def call_gemini_classify(api_keys, image_data_url):
    if not api_keys or not api_keys[0]:
        return {"class": "unknown", "confidence": 0}
    
    mime_type, base64_data = parse_data_url(image_data_url)
    if not mime_type or not base64_data:
        return {"class": "unknown", "confidence": 0}
        
    req_body = {
        "contents": [
            {
                "parts": [
                    {"inlineData": {"mimeType": mime_type, "data": base64_data}},
                    {
                        "text": (
                            "Kamu adalah ahli botani dan taksonomi tanaman obat yang sangat presisi. "
                            "Tugasmu adalah menganalisis gambar dan mengklasifikasikannya ke salah satu dari kategori berikut:\n\n"
                            "ATURAN KLASIFIKASI KETAT:\n"
                            "1. 'buah-merah': Hanya jika gambar SECARA JELAS memperlihatkan helaian daun Pandanus conoideus (Daun Buah Merah) yang sangat khas berbentuk pita/pedang panjang, sejajar, linier, ramping, dan sempit (tipe daun pandan). Jika daun berbentuk bulat, oval, atau menjari, JANGAN PERNAH pilih kelas ini!\n"
                            "2. 'daun-gatal': Hanya jika gambar memperlihatkan daun Laportea decumana (Daun Gatal) berbentuk bulat telur/lonjong dengan gerigi tajam yang sangat menonjol di sepanjang tepi daun serta bulu-bulu halus pencetus gatal di permukaan daun.\n"
                            "3. 'daun-gedi': Hanya jika gambar memperlihatkan daun Abelmoschus manihot (Daun Gedi) yang berbentuk menjari (palmate) dengan lekukan jari-jari daun yang sangat dalam dan khas (seperti daun singkong/pepaya).\n"
                            "4. 'sarang-semut': Hanya jika gambar memperlihatkan umbi batang Myrmecodia (Sarang Semut) berupa bonggol kayu berongga/berduri besar menempel di pohon, atau daun oval tebal khas sarang semut.\n"
                            "5. 'tanaman-herbal': Jika gambar tersebut adalah daun/tanaman obat/herbal lainnya yang berkhasiat medis (seperti daun sirih, sambiloto, jahe, kunyit, kumis kucing, kelor, lidah buaya, dll.) tetapi tidak memiliki ciri visual spesifik dari 4 target utama di atas.\n"
                            "6. 'unknown': Jika gambar sama sekali bukan tanaman herbal, bukan daun, atau berupa objek acak (wajah orang, ruangan, benda mati, hewan, pemandangan luar, dll.).\n\n"
                            "Format keluaran harus berupa objek JSON valid dengan key 'class' (string) dan 'confidence' (angka persentase keyakinan antara 0.0 s.d 100.0).\n"
                            "Contoh: {\"class\": \"tanaman-herbal\", \"confidence\": 95.0}"
                        )
                    }
                ]
            }
        ],
        "generationConfig": {"responseMimeType": "application/json"}
    }
    
    max_retries = len(api_keys) * 2
    for attempt in range(max_retries):
        current_key = api_keys[attempt % len(api_keys)]
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={current_key}"
        req_data = json.dumps(req_body).encode('utf-8')
        req = urllib.request.Request(url, data=req_data, headers={'Content-Type': 'application/json'})
        
        try:
            with urllib.request.urlopen(req, timeout=20) as response:
                res_body = response.read().decode('utf-8')
                res_json = json.loads(res_body)
                candidates = res_json.get("candidates", [])
                if candidates:
                    content = candidates[0].get("content", {})
                    parts = content.get("parts", [])
                    if parts:
                        text_resp = parts[0].get("text", "").strip()
                        return json.loads(text_resp)
                return {"class": "unknown", "confidence": 0}
        except Exception as e:
            print(f"Classify API Error (Attempt {attempt+1}/{max_retries}): {e}")
            if "429" in str(e) and len(api_keys) > 1:
                continue
            elif "429" in str(e):
                time.sleep(2)
                continue
            return {"class": "unknown", "confidence": 0}

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        req_body = request.get_json(silent=True) or {}
        config = load_config()
        api_keys = get_api_keys(config)
        
        response_data = call_gemini_api(
            api_keys, 
            req_body.get('message', ''), 
            req_body.get('image'),
            req_body.get('local_prediction')
        )
        return jsonify(response_data)
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"reply": f"Gagal memproses obrolan (Backend Error): {str(e)}"}), 500

@app.route('/api/classify', methods=['POST'])
def classify():
    try:
        req_body = request.get_json(silent=True) or {}
        config = load_config()
        api_keys = get_api_keys(config)
        
        response_data = call_gemini_classify(
            api_keys, 
            req_body.get('image')
        )
        return jsonify(response_data)
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"class": "unknown", "confidence": 0, "error": str(e)}), 500

# Kebutuhan untuk Vercel Serverless Function
if __name__ == '__main__':
    app.run(port=8080)
