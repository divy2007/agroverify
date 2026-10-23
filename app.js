/**
 * AGROVERIFY — Agricultural Integrity Platform
 * SATHI Database Integration & Multilingual Offline Verification Engine
 * Team Agri_Developers | Silver Oak University
 */

// ==========================================================================
// 1. MULTILINGUAL TRANSLATION DICTIONARY
// ==========================================================================
const TRANSLATIONS = {
  en: {
    nav_how: "How It Works",
    nav_checker: "Batch Checker",
    nav_dealers: "For Dealers",
    nav_impact: "Impact (SDG 2)",
    nav_officer: "Officer Portal",
    nav_verify_btn: "Verify Batch Now",
    top_gov_tag: "Official Initiative Aligned with Govt SATHI Registry & Digital Agriculture Mission",
    offline_pill_online: "● Online (SATHI v2.4 Live Sync)",
    offline_pill_offline: "○ Offline Mode (Cached DB Active)",
    hero_headline: "Verify Before You Sow. Zero Counterfeit Inputs.",
    hero_subheadline: "Instantly authenticate seeds, fertilizers, and pesticides against official SATHI government registry data in under 2 seconds. Protect your yield before investing a single rupee.",
    badge_caching: "Works Offline via Caching",
    badge_ivr: "Free Toll-Free IVR (1800-843-AGRO)",
    badge_sync: "SATHI Registry v2.4",
    tab_enter_code: "Enter Batch Code",
    tab_scan_qr: "Upload / Scan QR",
    batch_placeholder: "Enter Batch Code (e.g. SB-2026-9941X)",
    btn_check: "Check Authenticity",
    label_quick_try: "Try Sample Batches:",
    preset_genuine_seed: "🌱 Genuine Cotton Seed",
    preset_fake_pest: "⚠️ Fake Pesticide Alert",
    preset_exp_fert: "⏳ Expired Fertilizer",
    preset_cloned_qr: "🚨 Cloned QR Fraud",
    stat_1_val: "₹8,000 - ₹12,000",
    stat_1_title: "Per-Acre Financial Loss",
    stat_1_desc: "Average net loss borne by a smallholder farmer due to low germination and toxic adulterants.",
    stat_2_val: "1-in-8 Batches",
    stat_2_title: "Substandard Seed Rate",
    stat_2_desc: "Government field random sampling found over 12.5% of retail seed lots fail germination standards.",
    stat_3_val: "32,525+ Samples",
    stat_3_title: "Illegal Chemicals Seized",
    stat_3_desc: "Spurious chemical and banned pesticide formulations intercepted by enforcement squads yearly.",
    calc_title: "Calculate Your Sowing Season Risk Exposure",
    calc_subtitle: "See how much investment and yield you safeguard by authenticating every bag before purchase.",
    label_farm_size: "Your Farm Size:",
    label_crop_type: "Select Crop:",
    label_potential_loss: "Potential Crop Loss Prevented",
    step_1_title: "1. Scan or Dial",
    step_1_desc: "Scan packet QR code via mobile web or dial our toll-free IVR number 1800-843-AGRO from any keypad phone.",
    step_2_title: "2. SATHI Cross-Reference",
    step_2_desc: "Batch signature is instantly checked against government seed and fertilizer registries with offline cache fallback.",
    step_3_title: "3. Clear Verdict",
    step_3_desc: "Green for authentic batch with purity specs; Red warning for counterfeit with 1-tap district officer reporting.",
    ivr_headline: "Dual Access: Smartphone Web & Feature Phone IVR",
    ivr_sub: "Every Indian farmer is covered. No internet or smartphone required.",
    report_btn: "Report to District Agri Officer",
    download_cert: "Download Govt Certificate",
    footer_built_by: "Built by Team Agri_Developers | Silver Oak University"
  },
  gu: {
    nav_how: "કેવી રીતે કામ કરે છે",
    nav_checker: "બૅચ ચકાસણી",
    nav_dealers: "ડીલર ડિરેક્ટરી",
    nav_impact: "અસર (SDG 2)",
    nav_officer: "કૃષિ અધિકારી પોર્ટલ",
    nav_verify_btn: "હમણાં જ તપાસો",
    top_gov_tag: "ભારત સરકારના સાથી (SATHI) રજિસ્ટ્રી સાથે સંકલિત પહેલ",
    offline_pill_online: "● ઓનલાઇન (સાથી ડેટા સિંક)",
    offline_pill_offline: "○ ઑફલાઇન મોડ (કેશ્ડ ડેટાબૅઝ)",
    hero_headline: "વાવણી પહેલાં કરો ચકાસણી. શૂન્ય નકલી ઇનપુટ્સ.",
    hero_subheadline: "સરકારી સાથી (SATHI) ડેટાબેઝ દ્વારા બિયારણ, ખાતર અને જંતુનાશકોની અધિકૃતતા માત્ર ૨ સેકન્ડમાં તપાસો. એક પણ રૂપિયો ખર્ચતા પહેલાં તમારો પાક સુરક્ષિત કરો.",
    badge_caching: "ઇન્ટરનેટ વગર પણ કામ કરે છે",
    badge_ivr: "ટોલ-ફ્રી ફોન સેવા (1800-843-AGRO)",
    badge_sync: "SATHI રજિસ્ટ્રી v2.4",
    tab_enter_code: "બૅચ કોડ દાખલ કરો",
    tab_scan_qr: "QR કોડ સ્કેન કરો",
    batch_placeholder: "બૅચ નંબર લખો (દા.ત. SB-2026-9941X)",
    btn_check: "અધિકૃતતા તપાસો",
    label_quick_try: "સેમ્પલ બૅચ તપાસો:",
    preset_genuine_seed: "🌱 અસલી કપાસ બિયારણ",
    preset_fake_pest: "⚠️ નકલી જંતુનાશક ચેતવણી",
    preset_exp_fert: "⏳ મુદત વીતેલું ખાતર",
    preset_cloned_qr: "🚨 નકલી ક્યુઆર કોડ",
    stat_1_val: "₹8,000 - ₹12,000",
    stat_1_title: "પ્રતિ એકર આર્થિક નુકસાન",
    stat_1_desc: "નકલી બિયારણ કે ભેળસેળિયા ખાતરના કારણે ખેડૂતને થતું સરેરાશ નુકસાન.",
    stat_2_val: "૮ માંથી ૧ બૅચ",
    stat_2_title: "નકલી કે નબળું બિયારણ",
    stat_2_desc: "બજારમાં ઉપલબ્ધ બિયારણોમાંથી ૧૨.૫% થી વધુ બિયારણ સરકારી ટેસ્ટિંગમાં નિષ્ફળ જાય છે.",
    stat_3_val: "૩૨,૫૨૫+ નમૂના",
    stat_3_title: "જપ્ત કરેલ નકલી દવાઓ",
    stat_3_desc: "કૃષિ વિભાગ દ્વારા દર વર્ષે જપ્ત કરવામાં આવતી બિનઅધિકૃત જંતુનાશકોની સંખ્યા.",
    calc_title: "તમારા ખેતરના જોખમની ગણતરી કરો",
    calc_subtitle: "ખરીદી પહેલાં ચકાસણી કરીને તમે કેટલી રકમ અને પાક સુરક્ષિત કરી શકો છો તે જુઓ.",
    label_farm_size: "તમારી જમીન (એકરમાં):",
    label_crop_type: "પાક પસંદ કરો:",
    label_potential_loss: "અટકેલું સંભવિત નુકસાન",
    step_1_title: "૧. સ્કેન અથવા ફોન કરો",
    step_1_desc: "મોબાઇલથી પેકેટ પરનો ક્યૂઆર કોડ સ્કેન કરો અથવા સાદા કીપેડ ફોન પરથી ૧૮૦૦-૮૪૩-AGRO ડાયલ કરો.",
    step_2_title: "૨. સરકારી સાથી સાથે મેળવણી",
    step_2_desc: "તમારો બૅચ નંબર સીધો સરકારી સેન્ટ્રલ સર્વર પર ચકાસાય છે (ઓફલાઇન કેશિંગ સપોર્ટ સાથે).",
    step_3_title: "૩. સ્પષ્ટ પરિણામ",
    step_3_desc: "સાચું હોય તો લીલું પ્રમાણપત્ર અને નકલી હોય તો લાલ ચેતવણી સાથે કૃષિ અધિકારીને ૧-ક્લિક ફરિયાદ.",
    ivr_headline: "બંને સુવિધા: સ્માર્ટફોન એપ અને સાદો કીપેડ ફોન (IVR)",
    ivr_sub: "દરેક ખેડૂત માટે સુલભ. ઇન્ટરનેટ કે સ્માર્ટફોન વિના પણ પૂર્ણ રક્ષણ.",
    report_btn: "જિલ્લા કૃષિ અધિકારીને ફરિયાદ કરો",
    download_cert: "સરકારી પ્રમાણપત્ર ડાઉનલોડ કરો",
    footer_built_by: "ટીમ Agri_Developers દ્વારા નિર્મિત | સિલ્વર ઓક યુનિવર્સિટી"
  },
  hi: {
    nav_how: "यह कैसे काम करता है",
    nav_checker: "बैच चेकर",
    nav_dealers: "डीलर डायरेक्टरी",
    nav_impact: "प्रभाव (SDG 2)",
    nav_officer: "अधिकारी पोर्टल",
    nav_verify_btn: "अभी जांच करें",
    top_gov_tag: "भारत सरकार के साथी (SATHI) डेटाबेस से प्रमाणित पहल",
    offline_pill_online: "● ऑनलाइन (साथी v2.4 सिंक)",
    offline_pill_offline: "○ ऑफलाइन मोड (कैश सक्रिय)",
    hero_headline: "बोने से पहले करें जांच. नकली इनपुट से मुक्ति.",
    hero_subheadline: "सरकारी साथी (SATHI) डेटाबेस से बीज, उर्वरक और कीटनाशकों की प्रामाणिकता मात्र 2 सेकंड में जांचें। एक भी रुपया खर्च करने से पहले अपनी फसल सुरक्षित करें।",
    badge_caching: "बिना इंटरनेट ऑफलाइन कार्यशील",
    badge_ivr: "टोल-फ्री फोन सेवा (1800-843-AGRO)",
    badge_sync: "SATHI रजिस्ट्री v2.4",
    tab_enter_code: "बैच कोड दर्ज करें",
    tab_scan_qr: "QR कोड स्कैन करें",
    batch_placeholder: "बैच कोड डालें (उदा. SB-2026-9941X)",
    btn_check: "प्रामाणिकता जांचें",
    label_quick_try: "नमूना बैच जांचें:",
    preset_genuine_seed: "🌱 प्रामाणिक कपास बीज",
    preset_fake_pest: "⚠️ नकली कीटनाशक चेतावनी",
    preset_exp_fert: "⏳ एक्सपायर्ड उर्वरक",
    preset_cloned_qr: "🚨 फर्जी क्यूआर कोड",
    stat_1_val: "₹8,000 - ₹12,000",
    stat_1_title: "प्रति एकड़ वित्तीय नुकसान",
    stat_1_desc: "नकली बीज अथवा मिलावटी खाद के कारण छोटे किसानों को होने वाला औसत नुकसान।",
    stat_2_val: "8 में से 1 बैच",
    stat_2_title: "अमानक बीज दर",
    stat_2_desc: "बाजार में औचक जांच में 12.5% से अधिक बीज लॉट सरकारी मानकों पर विफल पाए गए।",
    stat_3_val: "32,525+ नमूने",
    stat_3_title: "जब्त नकली रसायन",
    stat_3_desc: "कृषि प्रवर्तन दस्तों द्वारा हर वर्ष जब्त किए जाने वाले नकली व प्रतिबंधित रसायन।",
    calc_title: "अपनी फसल के वित्तीय जोखिम का आकलन करें",
    calc_subtitle: "खरीद से पहले प्रमाणन करके देखें कि आप कितना निवेश और फसल सुरक्षित कर सकते हैं।",
    label_farm_size: "आपका खेत (एकड़ में):",
    label_crop_type: "फसल चुनें:",
    label_potential_loss: "बचाया गया संभावित नुकसान",
    step_1_title: "1. स्कैन या डायल करें",
    step_1_desc: "मोबाइल से पैकेट का क्यूआर स्कैन करें या किसी भी कीपैड फोन से टोल-फ्री 1800-843-AGRO डायल करें।",
    step_2_title: "2. सरकारी साथी से मिलान",
    step_2_desc: "बैच नंबर तुरंत राष्ट्रीय डेटाबेस से सत्यापित होता है (ऑफलाइन बैकअप के साथ)।",
    step_3_title: "3. स्पष्ट निर्णय",
    step_3_desc: "असली होने पर हरा प्रमाण पत्र, और नकली होने पर लाल चेतावनी व 1-टैप में अधिकारी को शिकायत।",
    ivr_headline: "दोहरी सुविधा: स्मार्टफोन वेब और कीपैड फोन IVR",
    ivr_sub: "प्रत्येक भारतीय किसान के लिए सुलभ। बिना स्मार्टफोन या इंटरनेट भी पूर्ण समाधान।",
    report_btn: "जिला कृषि अधिकारी को रिपोर्ट करें",
    download_cert: "सरकारी प्रमाण पत्र डाउनलोड करें",
    footer_built_by: "टीम Agri_Developers द्वारा निर्मित | सिल्वर ओक यूनिवर्सिटी"
  },
  mr: {
    nav_how: "हे कसे कार्य करते",
    nav_checker: "बॅच तपासणी",
    nav_dealers: "अधिकृत विक्रेते",
    nav_impact: "प्रभाव (SDG 2)",
    nav_officer: "कृषी अधिकारी पोर्टल",
    nav_verify_btn: "आताच तपासा",
    top_gov_tag: "शासनाच्या साथी (SATHI) प्रणालीशी जोडलेला उपक्रम",
    offline_pill_online: "● ऑनलाइन (साथी v2.4 सिंक)",
    offline_pill_offline: "○ ऑफलाइन मोड (कॅश सक्रिय)",
    hero_headline: "पेरणीपूर्वी करा तपासणी. बोगस बियाण्यांना आळा.",
    hero_subheadline: "सरकारी साथी (SATHI) डेटाबेसवरून बियाणे, खते आणि कीटकनाशकांची सत्यता २ सेकंदात तपासा. पेरणीपूर्वी तुमचे पीक व भांडवल सुरक्षित करा.",
    badge_caching: "इंटरनेटशिवाय ऑफलाइन कार्यरत",
    badge_ivr: "टोल-फ्री फोन सेवा (1800-843-AGRO)",
    badge_sync: "SATHI नोंदणी v2.4",
    tab_enter_code: "बॅच कोड टाका",
    tab_scan_qr: "QR कोड स्कॅन करा",
    batch_placeholder: "बॅच कोड टाका (उदा. SB-2026-9941X)",
    btn_check: "सत्यता तपासा",
    label_quick_try: "नमुना बॅच तपासा:",
    preset_genuine_seed: "🌱 अस्सल कपाशी बियाणे",
    preset_fake_pest: "⚠️ बोगस कीटकनाशक इशारा",
    preset_exp_fert: "⏳ मुदत संपलेले खत",
    preset_cloned_qr: "🚨 बनावट क्यूआर कोड",
    stat_1_val: "₹8,000 - ₹12,000",
    stat_1_title: "प्रति एकर आर्थिक फटका",
    stat_1_desc: "बोगस किंवा निकृष्ट बियाण्यांमुळे शेतकऱ्याला होणारे सरासरी नुकसान.",
    stat_2_val: "८ पैकी १ बॅच",
    stat_2_title: "निकृष्ट बियाणे प्रमाण",
    stat_2_desc: "तपासणीत १२.५% हून अधिक बियाणे नमुने सरकारी निकषांवर नापास झाले आहेत.",
    stat_3_val: "३२,५२५+ नमुने",
    stat_3_title: "जप्त बनावट कीटकनाशके",
    stat_3_desc: "कृषी विभागाच्या भरारी पथकांनी वर्षभरात जप्त केलेले बनावट साठे.",
    calc_title: "तुमच्या शेतीतील आर्थिक जोखमीचे गणित",
    calc_subtitle: "खरेदीपूर्वी खात्री करून तुम्ही किती नुकसान टाळू शकता ते तपासा.",
    label_farm_size: "तुमचे शेत (एकर):",
    label_crop_type: "पीक निवडा:",
    label_potential_loss: "टाळलेले संभाव्य नुकसान",
    step_1_title: "१. स्कॅन करा किंवा डायल करा",
    step_1_desc: "मोबाईलने क्यूआर स्कॅन करा किंवा साध्या फोनवरून १८००-८४३-AGRO वर कॉल करा.",
    step_2_title: "२. साथी डेटाबेस पडताळणी",
    step_2_desc: "बॅच कोड राष्ट्रीय डेटाबेसवर पडताळला जातो (ऑफलाइन कॅश सपोर्टसह).",
    step_3_title: "३. स्पष्ट निकाल",
    step_3_desc: "अस्सल असल्यास हिरवे प्रमाणपत्र; बनावट असल्यास लाल इशारा व १-क्लिक तक्रार दाखल.",
    ivr_headline: "दुहेरी सुविधा: स्मार्टफोन वेब आणि साधा फोन (IVR)",
    ivr_sub: "प्रत्येक शेतकऱ्यासाठी उपयुक्त. इंटरनेट किंवा स्मार्टफोनची गरज नाही.",
    report_btn: "जिल्हा कृषी अधिकाऱ्याकडे तक्रार करा",
    download_cert: "सरकारी प्रमाणपत्र डाउनलोड करा",
    footer_built_by: "टीम Agri_Developers द्वारे निर्मित | सिल्व्हर ओक युनिव्हर्सिटी"
  }
};

let currentLang = 'en';

// ==========================================================================
// 2. MOCK GOVERNMENT SATHI BATCH DATABASE
// ==========================================================================
const SATHI_DATABASE = {
  "SB-2026-9941X": {
    code: "SB-2026-9941X",
    status: "GENUINE",
    category: "Seeds",
    productName: "Certified Hybrid Bt Cotton Seeds (G-Cot.Hy-12 BG-II)",
    variety: "G-Cot.Hy-12 BG-II with Bollgard II Tech",
    manufacturer: "Gujarat State Seeds Corporation Ltd. (Gurjari Seeds)",
    plantLocation: "Anand Processing Plant, Unit-3, Gujarat",
    lotSize: "12,500 Packets (450g + 120g Non-Bt Refugium)",
    germination: "88% (Govt Standard: 65% min)",
    purity: "99.4% Genetic Purity",
    inertMatter: "0.6% max",
    mfgDate: "January 2026",
    expiryDate: "December 2027",
    sathiCertNo: "SATHI/GUJ/SD/2026/09941X",
    hmacHash: "9e4a77b81c...verified-sha256",
    allocatedDealer: "Kisan Suvidha Kendra, Gondal Road, Rajkot (Lic: RJK-SEED-884)",
    testingLab: "State Seed Testing Laboratory, Gandhinagar",
    notes: "Batch passed physical, genetic and DNA electrophoresis purity tests."
  },
  "WH-2026-4412B": {
    code: "WH-2026-4412B",
    status: "GENUINE",
    category: "Seeds",
    productName: "Certified High Yield Wheat (HD-2967 Pusa Yashasvi)",
    variety: "HD-2967 Rust Resistant Double Dwarf",
    manufacturer: "National Seeds Corporation Ltd. (Govt of India)",
    plantLocation: "Central Seed Farm, Suratgarh / Karnal",
    lotSize: "40,000 kg (40 kg sealed bags)",
    germination: "91% (Govt Standard: 85% min)",
    purity: "99.6% Genetic Purity",
    inertMatter: "0.4%",
    mfgDate: "October 2025",
    expiryDate: "October 2027",
    sathiCertNo: "SATHI/GOI/WH/2025/4412B",
    hmacHash: "7b1c33f2a8...verified-sha256",
    allocatedDealer: "APMC Cooperative Agro Center, Mansa",
    testingLab: "ICAR-IARI Seed Quality Central Lab, Pusa New Delhi",
    notes: "Certified Class-1 Breeder Seed derivative. High tillering capacity."
  },
  "MS-2026-7833K": {
    code: "MS-2026-7833K",
    status: "GENUINE",
    category: "Seeds",
    productName: "Hybrid Mustard Kesari 5111",
    variety: "Brassica Juncea Early Maturing",
    manufacturer: "Rajasthan State Seeds Corporation",
    plantLocation: "Jaipur Central Processing Facility",
    lotSize: "8,000 Pouches (1 kg pack)",
    germination: "89% (Govt Standard: 70% min)",
    purity: "99.1% Genetic Purity",
    inertMatter: "0.9%",
    mfgDate: "August 2025",
    expiryDate: "November 2027",
    sathiCertNo: "SATHI/RAJ/SD/2025/7833K",
    hmacHash: "4f55cc8910...verified-sha256",
    allocatedDealer: "Marwar Krishi Seva Kendra, Alwar",
    testingLab: "Durgapura Seed Testing Center",
    notes: "High oil content 42.1%. Certified authentic lot."
  },
  "FT-2026-3109U": {
    code: "FT-2026-3109U",
    status: "GENUINE",
    category: "Fertilizers",
    productName: "Neem Coated Urea (46% Nitrogen Prilled)",
    variety: "Govt Subsidized Urea FCO 1985 Grade A+",
    manufacturer: "IFFCO (Indian Farmers Fertiliser Cooperative Ltd.)",
    plantLocation: "Kalol Unit, Gandhinagar, Gujarat",
    lotSize: "1,200 Metric Tonnes (45 kg bags)",
    germination: "N/A (Chemical Purity: 46.2% N)",
    purity: "Biuret 0.72% (Max limit 1.5%)",
    inertMatter: "Moisture 0.38%",
    mfgDate: "February 2026",
    expiryDate: "January 2028",
    sathiCertNo: "SATHI/IFFCO/UREA/2026/3109U",
    hmacHash: "0a8b92dc54...verified-sha256",
    allocatedDealer: "All Authorized PACS & IFFCO e-Bazar Outlets",
    testingLab: "Regional Fertilizer Control Laboratory, Mumbai",
    notes: "DBT subsidy tagged with Point of Sale Aadhaar integration."
  },
  "FT-2026-5540D": {
    code: "FT-2026-5540D",
    status: "GENUINE",
    category: "Fertilizers",
    productName: "Sardar DAP 18-46-0 (Di-Ammonium Phosphate)",
    variety: "Granular Phosphorus Fertilizer FCO Standard",
    manufacturer: "Gujarat State Fertilizers & Chemicals Ltd. (GSFC)",
    plantLocation: "Fertilizernagar, Vadodara, Gujarat",
    lotSize: "800 Metric Tonnes (50 kg bags)",
    germination: "N/A (Nutrients: 18.1% N, 46.2% P2O5)",
    purity: "Water Soluble P2O5: 41.3%",
    inertMatter: "Moisture 1.1%",
    mfgDate: "December 2025",
    expiryDate: "March 2028",
    sathiCertNo: "SATHI/GSFC/DAP/2025/5540D",
    hmacHash: "51cbe9042a...verified-sha256",
    allocatedDealer: "GSFC Farm Information Centre, Junagadh",
    testingLab: "Central Fertilizer Quality Control & Training Institute, Faridabad",
    notes: "Authentic lot with tamper-evident RFID barcode."
  },
  "CT-2025-0144F": {
    code: "CT-2025-0144F",
    status: "COUNTERFEIT",
    category: "Pesticides",
    productName: "COUNTERFEIT ALERT: Chlorpyrifos 20% EC Imitation",
    variety: "Spurious/Fake Organophosphate Insecticide",
    manufacturer: "Claimed: 'AgroKare Chemicals' — UNREGISTERED ILLEGAL ENTITY",
    plantLocation: "Fictitious Address (Plot 42, GIDC Odhav — Raided & Sealed)",
    lotSize: "Unknown / Illicit Repackaged Barrels",
    germination: "N/A (Toxicity: Heavy Adulteration Detected)",
    purity: "0.2% Active Chlorpyrifos (Claimed 20%)",
    inertMatter: "Filled with industrial solvent waste and diesel residue",
    mfgDate: "Fraudulent label: March 2025",
    expiryDate: "Fraudulent label: Feb 2027",
    sathiCertNo: "INVALID / NOT IN SATHI REGISTRY",
    hmacHash: "MISMATCH_HASH_SIGNATURE_INVALID",
    allocatedDealer: "Black-market unlicensed vendors in Saurashtra",
    testingLab: "State Pesticide Testing Laboratory, Junagadh (Raid Sample #892)",
    redFlags: [
      "Duplicate Barcode: This exact batch QR code has been scanned 48 times across 14 shops in Rajkot and Morbi within 72 hours.",
      "Unregistered Entity: 'AgroKare Chemicals' does not hold a valid Central Insecticides Board (CIB&RC) license.",
      "Dangerous Adulteration: Laboratory analysis found 99% inactive kerosene residue and toxic heavy metal contaminants.",
      "Immediate Action: Do not apply to crops. Report retailer immediately under Insecticides Act 1968 Section 29."
    ]
  },
  "EX-2023-8821Z": {
    code: "EX-2023-8821Z",
    status: "EXPIRED",
    category: "Bio-Fertilizers",
    productName: "EXPIRED / DEGRADED BATCH: Bio-NPK Liquid Consortium",
    variety: "Liquid Azotobacter + PSB Culture",
    manufacturer: "GreenBio Nutrients Pvt Ltd.",
    plantLocation: "Nashik MIDC, Maharashtra",
    lotSize: "2,000 Litres (1 L bottles)",
    germination: "N/A",
    purity: "Degraded Microbial Count (< 10^3 CFU/ml)",
    inertMatter: "Bacterial culture dead; foul odor and gas buildup",
    mfgDate: "May 2023",
    expiryDate: "November 2024 (EXPIRED 17 MONTHS AGO)",
    sathiCertNo: "SATHI/MAH/BIO/2023/8821Z (STATUS: REVOKED)",
    hmacHash: "EXPIRED_HASH_ARCHIVED",
    allocatedDealer: "Stock should have been recalled and destroyed",
    testingLab: "Quality Control Lab, Pune",
    redFlags: [
      "Expired Input: Product is past shelf-life by over 17 months.",
      "Dead Microbial Inoculant: Viable bacterial spore count has dropped below statutory limits of FCO Schedule III.",
      "Crop Impact: Zero nitrogen fixation benefit. Selling expired bio-fertilizers is an offense under FCO 1985."
    ]
  },
  "SP-2026-1029C": {
    code: "SP-2026-1029C",
    status: "COUNTERFEIT",
    category: "Seeds",
    productName: "CLONED QR FRAUD: Spurious Soybean Seeds (JS-335)",
    variety: "Falsified JS-335 Commercial Packaging",
    manufacturer: "Suspected Repackaging Syndicate (Maharashtra-MP Border)",
    plantLocation: "Unknown Underground Shed",
    lotSize: "Duplicate copies circulating in multiple districts",
    germination: "34% (Failed germination test)",
    purity: "Grain mandi discard seed mixed with dye",
    inertMatter: "14.2% weed seeds & stone grit",
    mfgDate: "Forged: Dec 2025",
    expiryDate: "Forged: Nov 2027",
    sathiCertNo: "FORGED_CLONED_KEY",
    hmacHash: "SIGNATURE_REUSE_DETECTED",
    allocatedDealer: "Unlicensed itinerant traders selling at weekly village haats",
    testingLab: "Akola Seed Testing Laboratory",
    redFlags: [
      "Cloned Identity: The digital cryptographic hash on this packet belongs to an NSC lot previously delivered to Amravati in 2024.",
      "Physical Inspection: Grains treated with unauthorized pink industrial dye instead of thiram/carbendazim fungicide.",
      "Total Crop Failure Risk: Germination rate of 34% will cause 60-70% seedling death in field conditions."
    ]
  }
};

// ==========================================================================
// 3. AUDIO SYNTHESIS & DTMF GENERATOR (Web Audio API)
// ==========================================================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// DTMF standard frequencies
const DTMF_FREQS = {
  '1': [697, 1209],
  '2': [697, 1336],
  '3': [697, 1477],
  '4': [770, 1209],
  '5': [770, 1336],
  '6': [770, 1477],
  '7': [852, 1209],
  '8': [852, 1336],
  '9': [852, 1477],
  '*': [941, 1209],
  '0': [941, 1336],
  '#': [941, 1477]
};

function playDTMFTone(key) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const freqs = DTMF_FREQS[key] || [800, 1200];
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.frequency.value = freqs[0];
    osc2.frequency.value = freqs[1];

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 0.18);
    osc2.stop(ctx.currentTime + 0.18);
  } catch (e) {
    console.warn("AudioContext not allowed or not ready:", e);
  }
}

function playResultChime(isGenuine) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (isGenuine) {
      // Pleasant rising arpeggio
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    } else {
      // Harsh warning tone
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(196, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.45);
    }
  } catch (e) {
    console.warn("Chime error:", e);
  }
}

// Speak voice announcement using SpeechSynthesis API
function speakVoice(text, langCode) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  
  if (langCode === 'gu') {
    utterance.lang = 'gu-IN';
  } else if (langCode === 'hi') {
    utterance.lang = 'hi-IN';
  } else if (langCode === 'mr') {
    utterance.lang = 'mr-IN';
  } else {
    utterance.lang = 'en-IN';
  }

  // Animate audio waveform in IVR screen
  const waveBars = document.querySelectorAll('.ivr-wave-bar');
  waveBars.forEach(bar => bar.classList.add('speaking'));

  utterance.onend = () => {
    waveBars.forEach(bar => bar.classList.remove('speaking'));
  };

  utterance.onerror = () => {
    waveBars.forEach(bar => bar.classList.remove('speaking'));
  };

  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// 4. CORE VERIFICATION LOGIC & RESULTS RENDERING
// ==========================================================================
let lastVerifiedBatch = null;

function performBatchVerification(rawCode) {
  const code = (rawCode || "").trim().toUpperCase();
  if (!code) {
    showToast("Please enter a valid batch code or scan a QR code.", "danger");
    const input = document.getElementById('batchCodeInput');
    if (input) input.focus();
    return;
  }

  const progressBar = document.getElementById('verificationProgress');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  const resultWrapper = document.getElementById('verificationResult');
  const checkBtn = document.getElementById('btnCheckBatch');

  // Show progress animation
  if (resultWrapper) resultWrapper.classList.remove('active');
  if (progressBar) progressBar.classList.add('active');
  if (checkBtn) {
    checkBtn.disabled = true;
    checkBtn.innerHTML = `<span class="pulse-dot"></span> Checking SATHI Registry...`;
  }

  const steps = [
    { text: "Connecting to SATHI National Registry Gateway...", pct: "30%" },
    { text: "Verifying Cryptographic Seed Lot Certificate...", pct: "65%" },
    { text: "Checking Dealer Allocation & Lab Inspection Status...", pct: "95%" }
  ];

  let stepIdx = 0;
  const interval = setInterval(() => {
    if (stepIdx < steps.length) {
      if (progressText) progressText.textContent = steps[stepIdx].text;
      if (progressFill) progressFill.style.width = steps[stepIdx].pct;
      stepIdx++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        if (progressBar) progressBar.classList.remove('active');
        if (checkBtn) {
          checkBtn.disabled = false;
          checkBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Check Authenticity`;
        }

        // Lookup database or generate realistic mock record
        const record = SATHI_DATABASE[code] || generateDynamicBatchRecord(code);
        lastVerifiedBatch = record;
        renderVerificationResult(record);

        // Play auditory feedback
        const isGenuine = record.status === "GENUINE";
        playResultChime(isGenuine);

        // Scroll result into view smoothly
        if (resultWrapper) {
          resultWrapper.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 350);
    }
  }, 450);
}

// Generate dynamic realistic record for any custom code entered by user
function generateDynamicBatchRecord(code) {
  const isSuspicious = code.startsWith("CT") || code.startsWith("FAKE") || code.startsWith("BAD") || code.includes("9999") || code.length < 8;
  
  if (isSuspicious) {
    return {
      code: code,
      status: "COUNTERFEIT",
      category: "Agricultural Input",
      productName: `SUSPECT BATCH: Unregistered Agro Input (${code})`,
      variety: "Unverified formulation without central registration",
      manufacturer: "UNKNOWN VENDOR / UNREGISTERED PACKAGING",
      plantLocation: "No registered manufacturing unit found in SATHI database",
      lotSize: "Unrecorded lot",
      germination: "Failed / Untested",
      purity: "Unknown chemical purity",
      inertMatter: "Exceeds permissible limits",
      mfgDate: "Unverified",
      expiryDate: "Expired or Missing",
      sathiCertNo: "NOT_FOUND_IN_CENTRAL_REGISTRY",
      hmacHash: "HASH_VERIFICATION_FAILED",
      allocatedDealer: "Unregistered retail outlet",
      testingLab: "Flagged for immediate district officer seizure",
      redFlags: [
        `Batch Code ${code} does not exist in the official Ministry of Agriculture SATHI registry.`,
        "No digital manufacturer signature or lot allocation record found.",
        "High risk of adulteration, failed germination, or crop burning.",
        "Refuse purchase and report the dealer immediately."
      ]
    };
  } else {
    return {
      code: code,
      status: "GENUINE",
      category: "Certified Inputs",
      productName: `Govt Certified Agricultural Input (${code})`,
      variety: "High Yield Certified Field Crop Input",
      manufacturer: "State Certified Seed & Input Producers Federation",
      plantLocation: "Regional Central Certified Agro Hub",
      lotSize: "10,000 units lot",
      germination: "89.5% (Exceeds statutory threshold)",
      purity: "99.2% Certified Genetic Purity",
      inertMatter: "0.8% max",
      mfgDate: "January 2026",
      expiryDate: "December 2027",
      sathiCertNo: `SATHI/GOI/AGRI/2026/${code.replace(/[^A-Z0-9]/g, '')}`,
      hmacHash: "3f88a91c7...verified-hmac-sha256",
      allocatedDealer: "Authorized Regional PACS / District Krishi Seva Kendra",
      testingLab: "Government Central Quality Testing Institute",
      notes: "Officially registered batch in full compliance with Seeds Act 1966 & Fertilizer Control Order."
    };
  }
}

// Render result card into the DOM
function renderVerificationResult(data) {
  const wrapper = document.getElementById('verificationResult');
  if (!wrapper) return;

  const isGenuine = data.status === "GENUINE";
  const isExpired = data.status === "EXPIRED";

  let statusBadgeClass = isGenuine ? "genuine" : "counterfeit";
  let statusIcon = isGenuine 
    ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`
    : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;

  let verdictTitle = isGenuine 
    ? "GENUINE GOVT CERTIFIED" 
    : (isExpired ? "EXPIRED BATCH — DO NOT SOW" : "COUNTERFEIT WARNING — FRAUD DETECTED");

  let verdictSubtitle = isGenuine
    ? "Authenticated against National SATHI Database • 100% Verified Origin"
    : (isExpired ? "Quality degraded past official shelf life" : "Unauthorized batch signature. High risk of total crop loss.");

  let redFlagsHtml = "";
  if (!isGenuine && data.redFlags && data.redFlags.length > 0) {
    redFlagsHtml = `
      <div class="red-flags-box">
        <div class="red-flags-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          CRITICAL RED FLAGS DETECTED
        </div>
        <ul class="red-flags-list">
          ${data.redFlags.map(rf => `<li>${rf}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  let actionButtonsHtml = isGenuine ? `
    <button class="btn-cert-download" onclick="openCertificateModal()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
      Download Govt Certificate
    </button>
    <button class="btn-secondary-action" onclick="simulateSMSReceipt('${data.code}')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      Send SMS Proof
    </button>
  ` : `
    <button class="btn-report-alert" onclick="openReportModal('${data.code}')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      Report to District Agri Officer (1-Tap Alert)
    </button>
    <button class="btn-secondary-action" onclick="simulateDealerBlacklistNotice('${data.code}')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
      View Legal Penalties
    </button>
  `;

  wrapper.innerHTML = `
    <div class="result-card ${statusBadgeClass}">
      <div class="result-header">
        <div class="result-verdict">
          <div class="verdict-icon-box">
            ${statusIcon}
          </div>
          <div class="verdict-texts">
            <h4>${verdictTitle}</h4>
            <p>${verdictSubtitle}</p>
          </div>
        </div>
        <div class="result-timestamp">
          Verified at ${new Date().toLocaleTimeString()}
        </div>
      </div>

      <div class="result-specs-grid">
        <div class="spec-item">
          <span class="spec-label">Product Name</span>
          <span class="spec-value">${data.productName}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Batch Code</span>
          <span class="spec-value">${data.code}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Producer / Manufacturer</span>
          <span class="spec-value">${data.manufacturer}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">SATHI Registry No</span>
          <span class="spec-value">${data.sathiCertNo}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Germination Rate</span>
          <span class="spec-value ${isGenuine ? 'highlight-good' : 'highlight-bad'}">${data.germination}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Purity / Active Content</span>
          <span class="spec-value ${isGenuine ? 'highlight-good' : 'highlight-bad'}">${data.purity}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Expiry Date</span>
          <span class="spec-value ${isExpired ? 'highlight-bad' : ''}">${data.expiryDate}</span>
        </div>
        <div class="spec-item">
          <span class="spec-label">Allocated Retailer</span>
          <span class="spec-value">${data.allocatedDealer}</span>
        </div>
      </div>

      ${redFlagsHtml}

      <div class="result-actions-row">
        ${actionButtonsHtml}
      </div>
    </div>
  `;

  wrapper.classList.add('active');
}

// ==========================================================================
// 5. TOAST NOTIFICATIONS & SIMULATION UTILITIES
// ==========================================================================
function showToast(message, type = "success") {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.className = `toast-notice show ${type === 'danger' ? 'toast-danger' : 'toast-success'}`;
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      ${type === 'danger' 
        ? '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>' 
        : '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'}
    </svg>
    <span>${message}</span>
  `;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function simulateSMSReceipt(batchCode) {
  showToast(`📱 SMS verification receipt dispatched to registered farmer mobile!`, "success");
}

function simulateDealerBlacklistNotice(batchCode) {
  alert(
    `LEGAL ENFORCEMENT PROTOCOL:\n\n` +
    `Selling unregistered/counterfeit inputs violates:\n` +
    `• Seeds Act 1966 Section 7 (Cognizable offense)\n` +
    `• Fertilizer Control Order 1985 (Essential Commodities Act)\n` +
    `• Penalties: Cancellation of dealer license, confiscation of stocks, and up to 3 years imprisonment.\n\n` +
    `Click "Report to District Agri Officer" to dispatch a mobile inspection squad.`
  );
}

// ==========================================================================
// 6. QR SCANNER & CAMERA MODULE
// ==========================================================================
let cameraStream = null;

function setupQRScanner() {
  const qrDropZone = document.getElementById('qrDropZone');
  const qrFileInput = document.getElementById('qrFileInput');
  const btnStartCamera = document.getElementById('btnStartCamera');
  const cameraView = document.getElementById('cameraScannerView');
  const btnCloseCamera = document.getElementById('btnCloseCamera');
  const videoElement = document.getElementById('cameraVideo');

  if (qrDropZone && qrFileInput) {
    qrDropZone.addEventListener('click', (e) => {
      if (e.target !== btnStartCamera && !e.target.closest('#btnStartCamera')) {
        qrFileInput.click();
      }
    });

    qrFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        showToast("Processing uploaded QR image...", "success");
        setTimeout(() => {
          performBatchVerification("SB-2026-9941X");
        }, 800);
      }
    });

    // Drag and drop
    qrDropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      qrDropZone.style.borderColor = 'var(--accent-ochre)';
    });

    qrDropZone.addEventListener('dragleave', () => {
      qrDropZone.style.borderColor = 'var(--border-strong)';
    });

    qrDropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      qrDropZone.style.borderColor = 'var(--border-strong)';
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        showToast("QR code detected from dropped image file!", "success");
        setTimeout(() => {
          performBatchVerification("SB-2026-9941X");
        }, 700);
      }
    });
  }

  // Camera start / stop
  if (btnStartCamera && cameraView) {
    btnStartCamera.addEventListener('click', async (e) => {
      e.stopPropagation();
      cameraView.classList.add('active');

      try {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
          if (videoElement) {
            videoElement.srcObject = cameraStream;
            videoElement.play();
          }
        }
      } catch (err) {
        console.warn("Camera hardware access unavailable, running simulation scanner overlay:", err);
      }

      // Simulate QR auto-lock in 2.2 seconds
      setTimeout(() => {
        stopCamera();
        showToast("QR Code Locked: SB-2026-9941X", "success");
        performBatchVerification("SB-2026-9941X");
      }, 2400);
    });
  }

  if (btnCloseCamera) {
    btnCloseCamera.addEventListener('click', (e) => {
      e.stopPropagation();
      stopCamera();
    });
  }
}

function stopCamera() {
  const cameraView = document.getElementById('cameraScannerView');
  const videoElement = document.getElementById('cameraVideo');
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }
  if (videoElement) {
    videoElement.srcObject = null;
  }
  if (cameraView) {
    cameraView.classList.remove('active');
  }
}

// Preset QR simulation helper
function testPresetQR(presetCode) {
  showToast(`Simulating QR scan for batch ${presetCode}...`, "success");
  const tabBtn = document.querySelector('[data-tab="tab-code"]');
  if (tabBtn) tabBtn.click();
  const input = document.getElementById('batchCodeInput');
  if (input) input.value = presetCode;
  performBatchVerification(presetCode);
}

// ==========================================================================
// 7. INTERACTIVE IVR PHONE KEYPAD SIMULATOR
// ==========================================================================
const IVR_STATE = {
  active: false,
  step: 'IDLE', // IDLE, LANG_SELECT, ENTER_BATCH, RESULT
  lang: 'gu', // default Gujarati for high farmer resonance
  enteredBatch: '',
  timer: null
};

function setupIVRSimulator() {
  const keypadBtns = document.querySelectorAll('.keypad-btn');
  const callBtn = document.getElementById('ivrCallBtn');
  const endBtn = document.getElementById('ivrEndBtn');
  const screenText = document.getElementById('ivrScreenText');
  const statusLine = document.getElementById('ivrStatusLine');

  if (!screenText || !statusLine) return;

  function updateIVRScreen(status, text) {
    statusLine.textContent = status;
    screenText.textContent = text;
  }

  // Keypad button press
  keypadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-key');
      playDTMFTone(key);

      // Button visual press animation
      btn.classList.add('pressed');
      setTimeout(() => btn.classList.remove('pressed'), 150);

      handleIVRKeyInput(key);
    });
  });

  // Call Button
  if (callBtn) {
    callBtn.addEventListener('click', () => {
      playDTMFTone('1');
      startIVRCall();
    });
  }

  // End Button
  if (endBtn) {
    endBtn.addEventListener('click', () => {
      endIVRCall();
    });
  }

  function startIVRCall() {
    IVR_STATE.active = true;
    IVR_STATE.step = 'LANG_SELECT';
    IVR_STATE.enteredBatch = '';

    updateIVRScreen("CONNECTED: 1800-843-AGRO", 
      "નમસ્તે ખેડૂત મિત્ર! \nગુજરાતી માટે 1 દબાવો \nहिंदी के लिए 2 दबाएँ \nमराठीसाठी 3 दाबा \nFor English press 4"
    );

    speakVoice("Welcome to AgroVerify Toll Free service. Press 1 for Gujarati, 2 for Hindi, 3 for Marathi, 4 for English", 'en');
  }

  function handleIVRKeyInput(key) {
    if (!IVR_STATE.active) {
      if (key === '1') {
        startIVRCall();
      } else {
        updateIVRScreen("READY: 1800-843-AGRO", "Press DIAL (Green) or '1' to call toll-free verification line.");
      }
      return;
    }

    if (IVR_STATE.step === 'LANG_SELECT') {
      if (key === '1') {
        IVR_STATE.lang = 'gu';
        IVR_STATE.step = 'ENTER_BATCH';
        updateIVRScreen("ભાષા: ગુજરાતી", "કૃપા કરીને પેકેટ પરનો ૧૨ અંકનો બૅચ કોડ દાખલ કરો અને છેલ્લે # દબાવો.");
        speakVoice("કૃપા કરીને પેકેટ પરનો બાર અંકનો બૅચ કોડ દાખલ કરો અને છેલ્લે હેશ દબાવો", 'gu');
      } else if (key === '2') {
        IVR_STATE.lang = 'hi';
        IVR_STATE.step = 'ENTER_BATCH';
        updateIVRScreen("भाषा: हिंदी", "कृपया पैकेट पर लिखा 12 अंकों का बैच कोड दर्ज करें और अंत में # दबाएँ।");
        speakVoice("कृपया पैकेट पर लिखा बारह अंकों का बैच कोड दर्ज करें और अंत में हैश दबाएँ", 'hi');
      } else if (key === '3') {
        IVR_STATE.lang = 'mr';
        IVR_STATE.step = 'ENTER_BATCH';
        updateIVRScreen("भाषा: मराठी", "कृपया पाकिटावरील १२ अंकी बॅच कोड टाका आणि शेवटी # दाबा.");
        speakVoice("कृपया पाकिटावरील बारा अंकी बॅच कोड टाका आणि शेवटी हॅश दाबा", 'mr');
      } else {
        IVR_STATE.lang = 'en';
        IVR_STATE.step = 'ENTER_BATCH';
        updateIVRScreen("LANG: ENGLISH", "Please enter the 12-digit batch code followed by # hash key.");
        speakVoice("Please enter the 12 digit batch code followed by hash key", 'en');
      }
      return;
    }

    if (IVR_STATE.step === 'ENTER_BATCH') {
      if (key === '#') {
        // Trigger verification
        IVR_STATE.step = 'VERIFYING';
        updateIVRScreen("ચકાસણી ચાલુ છે...", "સાથી (SATHI) સર્વર સાથે સંપર્ક થઈ રહ્યો છે. કૃપા કરીને થોભો...");
        
        setTimeout(() => {
          // If empty, use sample batch SB-2026-9941X
          const codeToVerify = IVR_STATE.enteredBatch.length > 3 ? IVR_STATE.enteredBatch : "SB-2026-9941X";
          announceIVRResult(codeToVerify);
        }, 1200);
      } else if (key === '*') {
        IVR_STATE.enteredBatch = '';
        updateIVRScreen("બૅચ સાફ કર્યો", "ફરીથી બૅચ કોડ દાખલ કરો અને # દબાવો.");
      } else {
        IVR_STATE.enteredBatch += key;
        const masked = IVR_STATE.enteredBatch;
        updateIVRScreen("બૅચ કોડ દાખલ થયો:", `${masked}\n\nપૂર્ણ થાય એટલે # દબાવો.`);
      }
    }
  }

  function announceIVRResult(code) {
    const record = SATHI_DATABASE[code] || SATHI_DATABASE["SB-2026-9941X"];
    const isGenuine = record.status === "GENUINE";

    playResultChime(isGenuine);

    if (isGenuine) {
      updateIVRScreen("✅ અસલી બિયારણ (GENUINE)", 
        `બૅચ નંબર ${record.code} પ્રમાણિત છે! \nઉત્પાદક: ગુજરાત સ્ટેટ સીડ્સ કોર્પોરેશન \nઉગાવાની ક્ષમતા: 88% \nમુદત: ડિસેમ્બર 2027`
      );

      if (IVR_STATE.lang === 'gu') {
        speakVoice("ખેડૂત મિત્ર, તમારો બૅચ નંબર અસલી અને સરકારી સાથી ડેટાબેઝમાં પ્રમાણિત છે. ઉગાવાની ક્ષમતા અઠ્યાસી ટકા છે. તમે ખરીદી કરી શકો છો.", 'gu');
      } else if (IVR_STATE.lang === 'hi') {
        speakVoice("किसान साथी, आपका बैच कोड प्रामाणिक और सरकारी साथी डेटाबेस से प्रमाणित है। अंकुरण क्षमता अठासी प्रतिशत है। आप निश्चिंत होकर खरीद सकते हैं।", 'hi');
      } else {
        speakVoice("Your batch code is authenticated and genuine as per government SATHI registry. Germination rate is 88 percent.", 'en');
      }
    } else {
      updateIVRScreen("❌ ચેતવણી: નકલી બૅચ!", 
        `બૅચ નંબર ${record.code} અપ્રમાણિત છે! \nઆ બિયારણ કે દવા ખરીદશો નહીં! \nકૃષિ અધિકારીને જાણ કરવા 9 દબાવો.`
      );

      if (IVR_STATE.lang === 'gu') {
        speakVoice("સાવધાન! આ બૅચ નકલી અથવા અપ્રમાણિત છે. પાક નિષ્ફળ જવાનું ભારે જોખમ છે. આ ઉત્પાદન ખરીદશો નહીં.", 'gu');
      } else {
        speakVoice("Warning! This batch is counterfeit and failed SATHI verification. Do not buy this input.", 'en');
      }
    }
  }

  function endIVRCall() {
    IVR_STATE.active = false;
    IVR_STATE.step = 'IDLE';
    IVR_STATE.enteredBatch = '';
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    updateIVRScreen("CALL ENDED", "Dial 1800-843-AGRO or press DIAL to test again.");
  }
}

// ==========================================================================
// 8. INTERACTIVE ACREAGE RISK CALCULATOR
// ==========================================================================
function setupRiskCalculator() {
  const farmSlider = document.getElementById('farmAcreageSlider');
  const acreDisplay = document.getElementById('farmAcreDisplay');
  const cropSelect = document.getElementById('calcCropSelect');
  const lossValueDisplay = document.getElementById('calcLossValue');
  const investmentDisplay = document.getElementById('calcInputInvestment');
  const protectedDisplay = document.getElementById('calcProtectedYield');

  if (!farmSlider || !lossValueDisplay) return;

  const CROP_RATES = {
    cotton: { costPerAcre: 9500, lossPerAcre: 11500, yieldPerAcre: 48000 },
    wheat: { costPerAcre: 6200, lossPerAcre: 8500, yieldPerAcre: 36000 },
    mustard: { costPerAcre: 5100, lossPerAcre: 7800, yieldPerAcre: 32000 },
    soybean: { costPerAcre: 7000, lossPerAcre: 9200, yieldPerAcre: 38000 },
    paddy: { costPerAcre: 8400, lossPerAcre: 10800, yieldPerAcre: 44000 }
  };

  function updateCalculations() {
    const acres = parseInt(farmSlider.value, 10) || 5;
    const cropKey = cropSelect ? cropSelect.value : 'cotton';
    const rate = CROP_RATES[cropKey] || CROP_RATES.cotton;

    if (acreDisplay) acreDisplay.textContent = `${acres} ${acres === 1 ? 'Acre' : 'Acres'}`;

    const totalPotentialLoss = acres * rate.lossPerAcre;
    const totalInputSpend = acres * rate.costPerAcre;
    const totalYieldProtected = acres * rate.yieldPerAcre;

    lossValueDisplay.textContent = `₹${totalPotentialLoss.toLocaleString('en-IN')}`;
    if (investmentDisplay) investmentDisplay.textContent = `₹${totalInputSpend.toLocaleString('en-IN')}`;
    if (protectedDisplay) protectedDisplay.textContent = `₹${totalYieldProtected.toLocaleString('en-IN')}`;
  }

  farmSlider.addEventListener('input', updateCalculations);
  if (cropSelect) cropSelect.addEventListener('change', updateCalculations);

  updateCalculations();
}

// ==========================================================================
// 9. DEALER DIRECTORY & SURVEILLANCE HEATMAP MODULE
// ==========================================================================
const DISTRICT_DATA = {
  rajkot: {
    name: "Rajkot District (Saurashtra)",
    riskLevel: "HIGH ALERT",
    riskClass: "badge-danger",
    seizedCount: "1,420 kg Seeds / 840 L Chemicals",
    raidsActive: "4 Active Squads Deployed",
    flaggedVendors: "8 Retailers Suspended",
    valueConfiscated: "₹24.8 Lakhs",
    hotspots: "Gondal, Jasdan, Jetpur Mandi"
  },
  mansa: {
    name: "Mansa / Gandhinagar District",
    riskLevel: "MODERATE",
    riskClass: "badge-ochre",
    seizedCount: "350 kg Wheat Lots",
    raidsActive: "1 Routine Inspection",
    flaggedVendors: "2 Retailers Warned",
    valueConfiscated: "₹4.2 Lakhs",
    hotspots: "Mansa APMC outskirts"
  },
  bhatinda: {
    name: "Bhatinda District (Punjab)",
    riskLevel: "HIGH ALERT",
    riskClass: "badge-danger",
    seizedCount: "2,800 L Chlorpyrifos Imitations",
    raidsActive: "6 Joint Enforcement Raids",
    flaggedVendors: "12 Licences Revoked",
    valueConfiscated: "₹48.6 Lakhs",
    hotspots: "Rampura Phul, Talwandi Sabo"
  },
  nashik: {
    name: "Nashik District (Maharashtra)",
    riskLevel: "MODERATE",
    riskClass: "badge-ochre",
    seizedCount: "410 L Expired Bio-stimulants",
    raidsActive: "2 Flying Squads Active",
    flaggedVendors: "4 Vendors Under Investigation",
    valueConfiscated: "₹8.9 Lakhs",
    hotspots: "Malegaon, Niphad grape belt"
  },
  anand: {
    name: "Anand District (Gujarat)",
    riskLevel: "LOW RISK (98.4% Compliant)",
    riskClass: "badge-genuine",
    seizedCount: "Zero Counterfeit Batches Detected",
    raidsActive: "Regular Routine Surveillance",
    flaggedVendors: "All 142 Dealers SATHI Certified",
    valueConfiscated: "₹0 (Clean Hub)",
    hotspots: "Anand, Borsad, Petlad"
  }
};

function setupSurveillanceModule() {
  const districtItems = document.querySelectorAll('.district-hotspot-item');
  const survTabBtns = document.querySelectorAll('.surv-tab-btn');
  const survViews = document.querySelectorAll('.surv-view-pane');
  const districtDetailTitle = document.getElementById('selectedDistrictTitle');
  const districtRiskBadge = document.getElementById('selectedDistrictRisk');
  const districtSeized = document.getElementById('selectedDistrictSeized');
  const districtRaids = document.getElementById('selectedDistrictRaids');
  const districtVendors = document.getElementById('selectedDistrictVendors');
  const districtHotspots = document.getElementById('selectedDistrictHotspots');

  districtItems.forEach(item => {
    item.addEventListener('click', () => {
      districtItems.forEach(d => d.classList.remove('selected'));
      item.classList.add('selected');

      const distKey = item.getAttribute('data-district');
      const data = DISTRICT_DATA[distKey];
      if (!data) return;

      if (districtDetailTitle) districtDetailTitle.textContent = data.name;
      if (districtRiskBadge) {
        districtRiskBadge.className = `badge ${data.riskClass}`;
        districtRiskBadge.textContent = data.riskLevel;
      }
      if (districtSeized) districtSeized.textContent = data.seizedCount;
      if (districtRaids) districtRaids.textContent = data.raidsActive;
      if (districtVendors) districtVendors.textContent = data.flaggedVendors;
      if (districtHotspots) districtHotspots.textContent = data.hotspots;
    });
  });

  // Switch between Heatmap View and Dealer Directory View
  survTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPane = btn.getAttribute('data-view');
      survTabBtns.forEach(b => b.classList.remove('active'));
      survViews.forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      const pane = document.getElementById(targetPane);
      if (pane) pane.classList.add('active');
    });
  });

  // Dealer directory search filter
  const dealerSearch = document.getElementById('dealerSearchInput');
  const dealerDistrictFilter = document.getElementById('dealerDistrictFilter');
  const dealerCards = document.querySelectorAll('.dealer-card');

  function filterDealers() {
    const q = (dealerSearch ? dealerSearch.value : '').toLowerCase();
    const dist = dealerDistrictFilter ? dealerDistrictFilter.value : 'all';

    dealerCards.forEach(card => {
      const name = card.querySelector('h4').textContent.toLowerCase();
      const cardDist = card.getAttribute('data-district') || '';
      const matchesSearch = name.includes(q) || card.textContent.toLowerCase().includes(q);
      const matchesDist = dist === 'all' || cardDist === dist;

      if (matchesSearch && matchesDist) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  if (dealerSearch) dealerSearch.addEventListener('input', filterDealers);
  if (dealerDistrictFilter) dealerDistrictFilter.addEventListener('change', filterDealers);
}

// Agriculture Officer Action: Dispatch Raid
function dispatchRaid(feedId, location) {
  showToast(`🚨 Inspection squad dispatched to ${location}! Incident reference logged in SATHI enforcement module.`, "danger");
  const feedItem = document.getElementById(`feedItem-${feedId}`);
  if (feedItem) {
    feedItem.classList.add('raid-dispatched');
    const actionBtn = feedItem.querySelector('.btn-dispatch-raid');
    if (actionBtn) {
      actionBtn.textContent = "Squad Dispatched ✓";
      actionBtn.style.background = "var(--primary-moss)";
      actionBtn.disabled = true;
    }
  }
}

// Download Enforcement CSV report
function exportEnforcementCSV() {
  const csvContent = 
`Incident_ID,District,Taluka,Seized_Product,Batch_Code,Estimated_Loss_Prevented,Enforcement_Status
ENF-2026-901,Rajkot,Gondal,Chlorpyrifos 20% EC (Imitation),CT-2025-0144F,₹1450000,RAID_COMPLETED_SEIZED
ENF-2026-902,Bhatinda,Rampura,Spurious Bt Cotton Seeds,SP-2026-1029C,₹2200000,FIR_REGISTERED
ENF-2026-903,Nashik,Malegaon,Expired Bio-NPK Consortium,EX-2023-8821Z,₹480000,SHOP_SEALED
ENF-2026-904,Mansa,APMC Road,Counterfeit DAP Bags,FT-FAKE-8821,₹890000,UNDER_INVESTIGATION
ENF-2026-905,Junagadh,Keshod,Substandard Groundnut Seeds,GN-2026-0044,₹1120000,SAMPLE_SENT_TO_LAB`;

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `AgroVerify_Enforcement_Hotspot_Report_${new Date().toISOString().split('T')[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast("Enforcement surveillance CSV report downloaded successfully!", "success");
}

// ==========================================================================
// 10. MODALS: REPORTING & PRINTABLE CERTIFICATE
// ==========================================================================
function openReportModal(batchCode = '') {
  const modal = document.getElementById('reportModal');
  const batchInput = document.getElementById('reportBatchCode');
  if (batchInput && batchCode) {
    batchInput.value = batchCode;
  }
  if (modal) modal.classList.add('open');
}

function closeReportModal() {
  const modal = document.getElementById('reportModal');
  if (modal) modal.classList.remove('open');
}

function handleReportSubmit(e) {
  e.preventDefault();
  const token = `AGRO-GRV-2026-${Math.floor(1000 + Math.random() * 9000)}`;
  closeReportModal();

  alert(
    `✅ GRIEVANCE LODGED SUCCESSFULLY!\n\n` +
    `Grievance Tracking Token: ${token}\n` +
    `Priority: HIGH (Auto-routed to District Agriculture Officer)\n\n` +
    `A mobile inspection squad has been notified. An SMS acknowledgment with tracking link has been sent to your mobile number.`
  );
  showToast(`Grievance #${token} created and sent to District Agriculture Officer`, "success");
}

function detectLocation() {
  const locInput = document.getElementById('reportLocation');
  if (!locInput) return;
  locInput.value = "Detecting GPS...";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        locInput.value = `Lat: ${pos.coords.latitude.toFixed(4)}, Long: ${pos.coords.longitude.toFixed(4)} (GPS Verified)`;
        showToast("GPS coordinates locked!", "success");
      },
      () => {
        locInput.value = "Rajkot APMC Market Yard, Gujarat (Auto-Geocoded)";
        showToast("Location populated via network IP geocode", "success");
      }
    );
  } else {
    locInput.value = "Rajkot APMC Market Yard, Gujarat";
  }
}

function openCertificateModal() {
  const modal = document.getElementById('certificateModal');
  const certContainer = document.getElementById('certSheetContainer');
  const data = lastVerifiedBatch || SATHI_DATABASE["SB-2026-9941X"];

  if (certContainer) {
    certContainer.innerHTML = `
      <div class="cert-preview-sheet">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #183D2B; padding-bottom:12px; margin-bottom:16px;">
          <div>
            <h3 style="color:#183D2B; font-size:1.4rem; margin:0;">GOVERNMENT OF INDIA • SATHI VERIFIED</h3>
            <span style="font-size:0.8rem; font-weight:700; color:#53645B;">MINISTRY OF AGRICULTURE & FARMERS WELFARE</span>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.75rem; font-family:monospace; background:#eef5f1; padding:4px 8px; border-radius:4px; font-weight:700;">
              CERTIFICATE ID: ${data.sathiCertNo || 'SATHI-2026-CERT-9941'}
            </div>
            <span style="font-size:0.75rem; color:#7E8E85;">Verified on ${new Date().toLocaleDateString('en-IN')}</span>
          </div>
        </div>

        <div style="margin-bottom:16px;">
          <h4 style="font-size:1.15rem; color:#183D2B; margin-bottom:4px;">${data.productName}</h4>
          <p style="font-size:0.85rem; color:#53645B;">Manufacturer / Certified Agency: <strong>${data.manufacturer}</strong></p>
        </div>

        <table style="width:100%; border-collapse:collapse; font-size:0.85rem; margin-bottom:20px;">
          <tr style="border-bottom:1px solid #e2ddd3;">
            <td style="padding:6px 0; color:#7E8E85; font-weight:600;">Batch Code:</td>
            <td style="padding:6px 0; font-weight:800; color:#183D2B;">${data.code}</td>
            <td style="padding:6px 0; color:#7E8E85; font-weight:600;">Germination Rate:</td>
            <td style="padding:6px 0; font-weight:800; color:#2A7B4C;">${data.germination}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2ddd3;">
            <td style="padding:6px 0; color:#7E8E85; font-weight:600;">Genetic Purity:</td>
            <td style="padding:6px 0; font-weight:800; color:#183D2B;">${data.purity}</td>
            <td style="padding:6px 0; color:#7E8E85; font-weight:600;">Valid Upto:</td>
            <td style="padding:6px 0; font-weight:800; color:#183D2B;">${data.expiryDate}</td>
          </tr>
          <tr style="border-bottom:1px solid #e2ddd3;">
            <td style="padding:6px 0; color:#7E8E85; font-weight:600;">Allocated Retailer:</td>
            <td style="padding:6px 0; font-weight:800; color:#183D2B;" colspan="3">${data.allocatedDealer}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; color:#7E8E85; font-weight:600;">HMAC Hash:</td>
            <td style="padding:6px 0; font-family:monospace; font-size:0.75rem;" colspan="3">${data.hmacHash}</td>
          </tr>
        </table>

        <div class="cert-stamp">
          OFFICIALLY<br>VERIFIED<br>SATHI v2.4
        </div>

        <div style="font-size:0.75rem; color:#7E8E85; line-height:1.4;">
          This digital certificate is cryptographically counter-signed by the SATHI Public Key Infrastructure. Valid for purchase verification and seed crop insurance claims.
        </div>
      </div>
    `;
  }

  if (modal) modal.classList.add('open');
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateModal');
  if (modal) modal.classList.remove('open');
}

function printCertificate() {
  window.print();
}

// Officer Portal Modal
function openOfficerPortal() {
  const modal = document.getElementById('officerModal');
  if (modal) modal.classList.add('open');
}

function closeOfficerPortal() {
  const modal = document.getElementById('officerModal');
  if (modal) modal.classList.remove('open');
}

// Offline Mode Toggle (Simulation)
let isOfflineMode = false;
function toggleOfflineMode() {
  isOfflineMode = !isOfflineMode;
  const pill = document.getElementById('offlineSyncPill');
  if (!pill) return;

  if (isOfflineMode) {
    pill.innerHTML = `○ Offline Mode (Cached DB Active)`;
    pill.style.background = "rgba(217, 130, 43, 0.35)";
    showToast("Switched to Offline Mode: Verifying against 25,000+ cached local SATHI batch hashes.", "danger");
  } else {
    pill.innerHTML = `● Online (SATHI v2.4 Live Sync)`;
    pill.style.background = "rgba(255, 255, 255, 0.12)";
    showToast("Reconnected to central SATHI government registry API.", "success");
  }
}

// ==========================================================================
// 11. MULTILINGUAL UI DYNAMIC SWITCHER
// ==========================================================================
function setLanguage(langKey) {
  if (!TRANSLATIONS[langKey]) return;
  currentLang = langKey;

  // Update language button text
  const currentLangLabel = document.getElementById('currentLangLabel');
  const langNames = { en: "English", gu: "ગુજરાતી", hi: "हिन्दी", mr: "मराठी" };
  if (currentLangLabel) {
    currentLangLabel.textContent = langNames[langKey] || "English";
  }

  // Update active state in menu
  document.querySelectorAll('.lang-option').forEach(opt => {
    if (opt.getAttribute('data-lang') === langKey) {
      opt.classList.add('active');
    } else {
      opt.classList.remove('active');
    }
  });

  // Close dropdown
  const langMenu = document.getElementById('langMenu');
  if (langMenu) langMenu.classList.remove('open');

  // Apply translations to all DOM elements with data-i18n
  const dict = TRANSLATIONS[langKey];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  showToast(`Language switched to ${langNames[langKey]}`, "success");
}

// ==========================================================================
// 12. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Setup Language Selector Dropdown
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  if (langBtn && langMenu) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove('open');
      }
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        setLanguage(lang);
      });
    });
  }

  // Setup Verification Tab switching (Code input vs QR)
  const tabBtns = document.querySelectorAll('.verify-tab-btn');
  const tabPanes = document.querySelectorAll('.verify-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-tab');
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const pane = document.getElementById(targetId);
      if (pane) pane.classList.add('active');
    });
  });

  // Setup Batch Code Input
  const batchInput = document.getElementById('batchCodeInput');
  const btnClearInput = document.getElementById('btnClearBatchInput');
  const btnCheckBatch = document.getElementById('btnCheckBatch');

  if (batchInput) {
    batchInput.addEventListener('input', () => {
      if (btnClearInput) {
        if (batchInput.value.trim().length > 0) {
          btnClearInput.classList.add('visible');
        } else {
          btnClearInput.classList.remove('visible');
        }
      }
    });

    batchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        performBatchVerification(batchInput.value);
      }
    });
  }

  if (btnClearInput) {
    btnClearInput.addEventListener('click', () => {
      if (batchInput) {
        batchInput.value = '';
        batchInput.focus();
      }
      btnClearInput.classList.remove('visible');
    });
  }

  if (btnCheckBatch) {
    btnCheckBatch.addEventListener('click', () => {
      if (batchInput) {
        performBatchVerification(batchInput.value);
      }
    });
  }

  // Sample Presets Chips Click
  document.querySelectorAll('.sample-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.getAttribute('data-code');
      if (batchInput) {
        batchInput.value = code;
        if (btnClearInput) btnClearInput.classList.add('visible');
      }
      // Ensure tab 1 is active
      const tab1Btn = document.querySelector('[data-tab="tab-code"]');
      if (tab1Btn) tab1Btn.click();

      performBatchVerification(code);
    });
  });

  // Navbar Scroll shadow
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = '#fff';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = 'var(--shadow-lg)';
      }
    });
  }

  // Initialize remaining modules
  setupQRScanner();
  setupIVRSimulator();
  setupRiskCalculator();
  setupSurveillanceModule();

  // Close modals on clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });

  // Close modals on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeReportModal();
      closeCertificateModal();
      closeOfficerPortal();
    }
  });

  // Pre-render genuine seed result initially as demo preview
  setTimeout(() => {
    const defaultRecord = SATHI_DATABASE["SB-2026-9941X"];
    lastVerifiedBatch = defaultRecord;
    renderVerificationResult(defaultRecord);
  }, 400);
});
