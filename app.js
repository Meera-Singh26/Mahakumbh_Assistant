
let currentLanguage = 'en';
let currentSubTab = 'mela-map';
let isSirenPlaying = false;
let isTextToSpeechEnabled = true;
let isListening = false;
let speechRecognition = null;

const i18n = {
    en: {
        tagline: "Mahakumbh 2028 Assistant",
        ticker_alert: "ALERT",
        ticker_message: "🔴 Live: Makar Sankranti Shahi Snan guidelines released. Sector 4 bridge one-way only between 4 AM and 10 AM. Lost & Found booth Sector 11 reports 14 reunions today.",
        welcome_title: "Welcome to Prayagraj",
        welcome_desc: "Your spiritual journey companion for the holy Mahakumbh Mela 2028.",
        your_location: "Estimated Location",
        sector_location: "Sector 4 (Akhara Region)",
        weather_title: "Weather & AQI",
        aqi_good: "Good (68)",
        crowd_status: "Sangam Density",
        crowd_moderate: "Moderate (Yellow)",
        countdown_title: "Next Major Snan (Holy Bath)",
        next_snan_name: "Makar Sankranti (First Shahi Snan)",
        next_snan_date: "January 14, 2028",
        days: "Days",
        hours: "Hrs",
        minutes: "Mins",
        seconds: "Secs",
        quick_actions: "Quick Navigation Hub",
        qa_map: "Mela Map & Route",
        qa_assistant: "Sangam AI Chat",
        qa_snan: "Snan Dates",
        qa_services: "Services Directory",
        updates_title: "Updates & Guidelines",
        nt_1_title: "Security Checkpoints Active",
        nt_1_desc: "Keep your Aadhaar / Identity proof copy ready for verification at outer security cordons.",
        nt_2_title: "Free Drinking Water",
        nt_2_desc: "Water taps available every 100 meters on Sector 3 Marg and Sector 4 Marg.",
        nav_home: "Home",
        nav_chat: "Sangam AI",
        nav_map: "Navigator",
        nav_calendar: "Calendar",
        nav_services: "Services",
        chat_header_title: "Sangam AI",
        chat_header_status: "Online (Multi-Language)",
        chat_welcome_msg: "Pranam! I am SangamSathi AI, your assistant for Mahakumbh 2028. Ask me about 'staying options', 'bathing dates', or 'how to reach the Mela'.",
        chat_input_placeholder: "Ask in your selected language...",
        listening: "Listening... speak now",
        sg_bathing: "📅 Bathing Dates",
        sg_emergency: "🚨 Emergency Contacts",
        sg_lost: "🔍 Lost & Found",
        sg_medical: "🏥 Medical Camp",
        subtab_mela: "Mela Ground Map",
        subtab_city: "City Connectivity",
        navigator_title: "Mela Navigator",
        navigator_desc: "Draw routes and check distances between sectors and bathing ghats.",
        route_start: "Starting Point:",
        route_end: "Destination:",
        get_directions: "Get Directions",
        rt_distance: "Distance",
        rt_time: "Walking Time",
        rt_crossings: "Pontoon Crossings",
        route_desc_sample: "Walk south along sector 4 main road, cross Pontoon Bridge 2, turn left onto Sangam Marg and proceed straight.",
        map_triveni_lbl: "Triveni Sangam",
        p1_lbl: "Bridge 1",
        p2_lbl: "Bridge 2",
        sec1_lbl: "Sector 1 (Admin)",
        sec4_lbl: "Sector 4 (You)",
        sec8_lbl: "Sector 8 (Hosp)",
        sec11_lbl: "Sector 11 (L&F)",
        sec15_lbl: "Sector 15 (Camp)",
        pin_sangam_lbl: "Sangam Nose",
        pin_vip_lbl: "VIP Ghat",
        pin_qila_lbl: "Qila Ghat",
        pin_temple_lbl: "Hanuman Temple",
        sec1_opt: "Sector 1 (Entry Gates)",
        sec4_opt: "Sector 4 (Your Location)",
        sec8_opt: "Sector 8 (Main Bus Stand)",
        sec11_opt: "Sector 11 (Railway Stn Camp)",
        sec15_opt: "Sector 15 (Akharas North)",
        sangam_opt: "Triveni Sangam Nose",
        vip_opt: "VIP Bathing Ghat",
        qila_opt: "Qila Bathing Ghat",
        med_opt: "Central Hospital (Sec 8)",
        lost_opt: "Lost & Found HQs (Sec 11)",
        temple_opt: "Lying Hanuman Temple",
        transit_planner_title: "City-to-Mela Travel Planner",
        transit_planner_desc: "Plan your journey from major Airports, Railway Stations, or Parking Lots straight to the Mela gates.",
        transit_origin: "Starting Hub (City):",
        transit_dest: "Mela Entry Sector:",
        btn_plan_route: "Calculate Route",
        recommended_mode: "Transport Mode",
        estimated_fare: "Est. Cost",
        step_by_step_heading: "Route Instructions:",
        transit_directory_title: "Approved Transit Tariffs & Guidelines",
        erick_fare_card: "E-Rickshaw Rates",
        erick_fares_desc: "Government approved fixed tariffs within 10km of Mela area. Report overcharging to 112.",
        mela_shuttle_card: "Mela Shuttle Routes",
        mela_shuttles_desc: "Free government shuttle buses operate 24/7 from railway stations and outer parkings straight to Mela entry points.",
        hub_pryj: "Prayagraj Junction Stn (PRYJ)",
        hub_sfg: "Subedarganj Station (SFG)",
        hub_pcoi: "Prayagraj Cheoki Stn (PCOI)",
        hub_ixd: "Prayagraj Airport (IXD)",
        hub_vns: "Varanasi Airport (VNS - 120km)",
        hub_lko: "Lucknow Airport (LKO - 200km)",
        hub_jhunsi: "Jhunsi Mela Outer Parking",
        hub_arail: "Arail Mela Outer Parking",
        calendar_header: "Shahi Snan & Auspicious Dates",
        calendar_desc: "Mark these primary bathing dates for Mahakumbh 2028. Plan your travels and bathing times accordingly.",
        snan_type_shahi: "Shahi Snan",
        snan_type_normal: "Holy Snan",
        services_header: "Mela Amenities & Staying Guide",
        services_desc: "Find ashrams, Akharas, free food (Bhandaras), police camps, and sanitation stations in your sector.",
        fl_all: "All Services",
        fl_food: "Bhandara (Food)",
        fl_medical: "Medical",
        fl_tents: "Tents / Stay",
        fl_toilet: "Toilets",
        sector_label: "Sector",
        btn_map: "Show Map",
        btn_call: "Call Center",
        sos_card_title: "EMERGENCY SOS",
        sos_card_desc: "Tap the button above to broadcast your location to emergency teams and play a loud warning beacon.",
        play_siren: "Play Safety Siren",
        stop_siren: "Stop Safety Siren",
        sos_toast_title: "Transmitting Distress Call...",
        em_contacts_title: "Direct Helpline Dialers",
        em_amb_title: "Medical Ambulance",
        em_pol_title: "Mela Security / Police",
        em_ctrl_title: "Mela Control Command HQs",
        em_lost_title: "Lost & Found Helpline",
        family_search_title: "Find Lost Family Registry",
        family_search_desc: "Search for names reported to the Lost & Found central registry (updated live).",
        family_search_placeholder: "Enter family member's name...",
        family_found_msg: "Matches found in registry:",
        family_not_found: "No matching record found in the database. Please report at the nearest Lost & Found Booth (Sector 11) or call 1920.",
        status_reunited: "Reunited",
        status_camp: "At Care Camp",
        status_transit: "In Transit",
        safety_guides_title: "Emergency & Safety Guides",
        guide_1_title: "Stampede Prevention & Safety",
        guide_1_content: "1. Always move with the flow of the crowd. Do not walk against it.\n2. Keep your hands folded in front of your chest like a boxer to create breathing space.\n3. If you drop something, do not bend down to pick it up in a dense crowd.\n4. If you fall, curl into a ball, cover your head with your hands, and protect your chest.",
        guide_2_title: "Heat & Exhaustion First Aid",
        guide_2_content: "1. Drink water and ORS packets regularly, even if you are not thirsty.\n2. Find shade immediately if you experience dizziness, headache, or excessive sweating.\n3. Loosen tight clothing and apply cool water to the skin.\n4. Contact the nearest medical booth or dial 108 if symptoms worsen."
    },
    hi: {
        tagline: "महाकुंभ 2028 सहायक",
        ticker_alert: "सूचना",
        ticker_message: "🔴 लाइव: मकर संक्रांति शाही स्नान के दिशा-निर्देश जारी। सेक्टर 4 का पुल सुबह 4 से 10 बजे के बीच केवल एकतरफा रहेगा। सेक्टर 11 के खोया-पाया केंद्र ने आज 14 पुनर्मिलन दर्ज किए।",
        welcome_title: "प्रयागराज में आपका स्वागत है",
        welcome_desc: "पवित्र महाकुंभ मेला 2028 के लिए आपका आध्यात्मिक मार्गदर्शक साथी।",
        your_location: "अनुमानित स्थान",
        sector_location: "सेक्टर 4 (अखाड़ा क्षेत्र)",
        weather_title: "मौसम और एक्यूआई",
        aqi_good: "अच्छा (68)",
        crowd_status: "संगम पर भीड़",
        crowd_moderate: "मध्यम (पीला)",
        countdown_title: "अगला प्रमुख स्नान (पवित्र स्नान)",
        next_snan_name: "मकर संक्रांति (प्रथम शाही स्नान)",
        next_snan_date: "14 जनवरी, 2028",
        days: "दिन",
        hours: "घंटे",
        minutes: "मिनट",
        seconds: "सेकंड",
        quick_actions: "त्वरित नेविगेशन हब",
        qa_map: "मेला नक्शा और मार्ग",
        qa_assistant: "संगम एआई चैट",
        qa_snan: "स्नान तिथियां",
        qa_services: "सेवाएं निर्देशिका",
        updates_title: "अपडेट और दिशा-निर्देश",
        nt_1_title: "सुरक्षा चौकियां सक्रिय",
        nt_1_desc: "बाहरी सुरक्षा घेरे पर सत्यापन के लिए अपना आधार कार्ड/पहचान पत्र तैयार रखें।",
        nt_2_title: "निःशुल्क पेयजल",
        nt_2_desc: "सेक्टर 3 मार्ग और सेक्टर 4 मार्ग पर प्रत्येक 100 मीटर पर पानी की टोंटियां उपलब्ध हैं।",
        nav_home: "मुख्य पृष्ठ",
        nav_chat: "संगम एआई",
        nav_map: "मार्गदर्शक",
        nav_calendar: "कैलेंडर",
        nav_services: "सेवाएं",
        chat_header_title: "संगम एआई",
        chat_header_status: "सक्रिय (बहुभाषी)",
        chat_welcome_msg: "प्रणाम! मैं संगमसाथी एआई हूँ। आप मुझसे रहने की व्यवस्था, स्नान तिथियों या मेला पहुंचने के मार्ग के बारे में पूछ सकते हैं।",
        chat_input_placeholder: "अपनी चुनी हुई भाषा में पूछें...",
        listening: "सुन रहा हूँ... अब बोलें",
        sg_bathing: "📅 स्नान तिथियां",
        sg_emergency: "🚨 आपातकालीन संपर्क",
        sg_lost: "🔍 खोया-पाया",
        sg_medical: "🏥 मेडिकल कैंप",
        subtab_mela: "मेला ग्राउंड मैप",
        subtab_city: "शहर से कनेक्टिविटी",
        navigator_title: "मेला मार्गदर्शक",
        navigator_desc: "सेक्टरों और स्नान घाटों के बीच मार्ग बनाएं और दूरी की जांच करें।",
        route_start: "प्रारंभिक बिंदु:",
        route_end: "गंतव्य:",
        get_directions: "मार्ग प्राप्त करें",
        rt_distance: "दूरी",
        rt_time: "पैदल चलने का समय",
        rt_crossings: "पोंटून पुल पार करना",
        route_desc_sample: "सेक्टर 4 मुख्य सड़क पर दक्षिण की ओर चलें, पोंटून पुल 2 पार करें, संगम मार्ग पर बाएं मुड़ें और सीधे चलें।",
        map_triveni_lbl: "त्रिवेणी संगम",
        p1_lbl: "पुल 1",
        p2_lbl: "पुल 2",
        sec1_lbl: "सेक्टर 1 (प्रशासन)",
        sec4_lbl: "सेक्टर 4 (आप)",
        sec8_lbl: "सेक्टर 8 (अस्पताल)",
        sec11_lbl: "सेक्टर 11 (खोया-पाया)",
        sec15_lbl: "सेक्टर 15 (कैंप)",
        pin_sangam_lbl: "संगम नोज़",
        pin_vip_lbl: "वीआईपी घाट",
        pin_qila_lbl: "किला घाट",
        pin_temple_lbl: "हनुमान मंदिर",
        sec1_opt: "सेक्टर 1 (प्रवेश द्वार)",
        sec4_opt: "सेक्टर 4 (आपका स्थान)",
        sec8_opt: "सेक्टर 8 (मुख्य बस स्टैंड)",
        sec11_opt: "सेक्टर 11 (रेलवे स्टेशन कैंप)",
        sec15_opt: "सेक्टर 15 (उत्तरी अखाड़ा)",
        sangam_opt: "त्रिवेणी संगम नोज़",
        vip_opt: "वीआईपी स्नान घाट",
        qila_opt: "किला स्नान घाट",
        med_opt: "केंद्रीय अस्पताल (सेक्टर 8)",
        lost_opt: "खोया-पाया मुख्यालय (सेक्टर 11)",
        temple_opt: "लेटे हुए हनुमान मंदिर",
        transit_planner_title: "शहर से मेला यात्रा योजक",
        transit_planner_desc: "मुख्य हवाई अड्डों, रेलवे स्टेशनों या पार्किंग स्थलों से सीधे मेला द्वारों तक अपनी यात्रा की योजना बनाएं।",
        transit_origin: "प्रारंभिक हब (शहर):",
        transit_dest: "मेला प्रवेश सेक्टर:",
        btn_plan_route: "मार्ग की गणना करें",
        recommended_mode: "परिवहन साधन",
        estimated_fare: "अनुमानित किराया",
        step_by_step_heading: "मार्ग निर्देश:",
        transit_directory_title: "स्वीकृत परिवहन किराए और नियम",
        erick_fare_card: "ई-रिक्शा दरें",
        erick_fares_desc: "मेला क्षेत्र के 10 किमी के भीतर सरकार द्वारा स्वीकृत निश्चित किराया। अधिक शुल्क की शिकायत 112 पर करें।",
        mela_shuttle_card: "मेला शटल मार्ग",
        mela_shuttles_desc: "रेलवे स्टेशनों और बाहरी पार्किंग से सीधे मेला प्रवेश बिंदुओं तक मुफ्त सरकारी शटल बसें 24/7 चलती हैं।",
        hub_pryj: "प्रयागराज जंक्शन (PRYJ)",
        hub_sfg: "सूबेदारगंज स्टेशन (SFG)",
        hub_pcoi: "प्रयागराज छीयोकी (PCOI)",
        hub_ixd: "प्रयागराज हवाई अड्डा (IXD)",
        hub_vns: "वाराणसी हवाई अड्डा (VNS - 120 किमी)",
        hub_lko: "लखनऊ हवाई अड्डा (LKO - 200 किमी)",
        hub_jhunsi: "झूंसी मेला बाहरी पार्किंग",
        hub_arail: "अरैल मेला बाहरी पार्किंग",
        calendar_header: "शाही स्नान और शुभ तिथियां",
        calendar_desc: "महाकुंभ 2028 के लिए मुख्य स्नान तिथियों को नोट करें। अपनी यात्रा और स्नान के समय की योजना तदनुसार बनाएं।",
        snan_type_shahi: "शाही स्नान",
        snan_type_normal: "पवित्र स्नान",
        services_header: "मेला सुविधाएं और आवास मार्गदर्शिका",
        services_desc: "अपने सेक्टर में आश्रम, अखाड़े, मुफ्त भोजन (भंडारा), पुलिस कैंप और स्वच्छता केंद्रों का पता लगाएं।",
        fl_all: "सभी सेवाएं",
        fl_food: "भंडारा (भोजन)",
        fl_medical: "चिकित्सा",
        fl_tents: "तंबू / आवास",
        fl_toilet: "शौचालय",
        sector_label: "सेक्टर",
        btn_map: "मानचित्र देखें",
        btn_call: "कॉल सेंटर",
        sos_card_title: "आपातकालीन एसओएस",
        sos_card_desc: "आपातकालीन टीमों को अपना स्थान भेजने और तेज सुरक्षा सायरन बजाने के लिए ऊपर दिए गए बटन को दबाएं।",
        play_siren: "सायरन बजाएं",
        stop_siren: "सायरन बंद करें",
        sos_toast_title: "संकट संकेत भेज रहा है...",
        em_contacts_title: "सीधे हेल्पलाइन नंबर",
        em_amb_title: "मेडिकल एम्बुलेंस",
        em_pol_title: "मेला सुरक्षा / पुलिस",
        em_ctrl_title: "मेला नियंत्रण कमान मुख्यालय",
        em_lost_title: "खोया-पाया हेल्पलाइन",
        family_search_title: "खोए हुए परिवार का रजिस्टर",
        family_search_desc: "खोया-पाया केंद्रीय रजिस्टर में दर्ज नामों की खोज करें (सीधा प्रसारण)।",
        family_search_placeholder: "परिवार के सदस्य का नाम दर्ज करें...",
        family_found_msg: "रजिस्टर में मिले नाम:",
        family_not_found: "डेटाबेस में कोई मिलान रिकॉर्ड नहीं मिला। कृपया निकटतम खोया-पाया बूथ (सेक्टर 11) पर रिपोर्ट करें या 1920 पर कॉल करें।",
        status_reunited: "पुनर्मिलन हुआ",
        status_camp: "केयर कैंप में",
        status_transit: "रास्ते में",
        safety_guides_title: "आपातकाल और सुरक्षा गाइड",
        guide_1_title: "भगदड़ से बचाव और सुरक्षा",
        guide_1_content: "1. हमेशा भीड़ के प्रवाह के साथ चलें। इसके विपरीत न चलें।\n2. सांस लेने की जगह बनाने के लिए अपने हाथों को छाती के सामने बॉक्सर की तरह मोड़ कर रखें।\n3. घनी भीड़ में यदि आपकी कोई चीज गिर जाए, तो उसे उठाने के लिए नीचे न झुकें।\n4. यदि आप गिर जाएं, तो एक गेंद की तरह सिमट जाएं, अपने हाथों से सिर को ढकें और छाती की रक्षा करें।",
        guide_2_title: "गर्मी और थकान का प्राथमिक उपचार",
        guide_2_content: "1. प्यास न लगने पर भी नियमित रूप से पानी और ओआरएस पिएं।\n2. चक्कर आना, सिरदर्द या अत्यधिक पसीना आने पर तुरंत छायादार स्थान पर जाएं।\n3. तंग कपड़ों को ढीला करें और त्वचा पर ठंडा पानी लगाएं।\n4. लक्षण बिगड़ने पर निकटतम चिकित्सा बूथ से संपर्क करें या 108 डायल करें।"
    },
    bn: {
        tagline: "মহাকুম্ভ ২০২৮ অ্যাসিস্ট্যান্ট",
        ticker_alert: "সতর্কতা",
        ticker_message: "🔴 লাইভ: মকর সংক্রান্তি শাহি স্নানের নির্দেশিকা প্রকাশিত। সেক্টর ৪ ব্রিজ ভোর ৪টা থেকে সকাল ১০টার মধ্যে কেবল একমুখী থাকবে। সেক্টর ১১ এর নিখোঁজ কেন্দ্রে আজ ১৪ জন পুনর্মিলিত হয়েছে।",
        welcome_title: "প্রয়াগরাজে স্বাগতম",
        welcome_desc: "পवিত্র মহাকুম্ভ মেলা ২০২৮-এ আপনার আধ্যাত্মিক যাত্রার সহযোগী।",
        your_location: "আনুমানিক অবস্থান",
        sector_location: "সেক্টর ৪ (আখড়া অঞ্চল)",
        weather_title: "আবহাওয়া ও একিউআই",
        aqi_good: "ভালো (৬৮)",
        crowd_status: "সঙ্গমে ভিড়",
        crowd_moderate: "মাঝারি (হলুদ)",
        countdown_title: "পরবর্তী প্রধান স্নান (পবিত্র স্নান)",
        next_snan_name: "মকর সংক্রান্তি (প্রথম শাহি স্নান)",
        next_snan_date: "১৪ জানুয়ারি, ২০২৮",
        days: "দিন",
        hours: "ঘণ্টা",
        minutes: "মিনিট",
        seconds: "সেকেন্ড",
        quick_actions: "দ্রুত নেভিগেশন হাব",
        qa_map: "মেলা মানচিত্র ও রুট",
        qa_assistant: "সঙ্গম এআই চ্যাট",
        qa_snan: "স্নানের তারিখ",
        qa_services: "পরিষেবা নির্দেশিকা",
        updates_title: "আপডেট ও নির্দেশিকা",
        nt_1_title: "নিরাপত্তা চৌকি সক্রিয়",
        nt_1_desc: "নিরাপত্তা বেষ্টনীতে যাচাইকরণের জন্য আপনার আধার কার্ড/পরিচয়পত্র প্রস্তুত রাখুন।",
        nt_2_title: "বিনামূল্যে পানীয় জল",
        nt_2_desc: "সেক্টর ৩ এবং সেক্টর ৪ রোডে প্রতি ১০০ মিটার অন্তর জলের কল পাওয়া যাচ্ছে।",
        nav_home: "হোম",
        nav_chat: "সঙ্গম এআই",
        nav_map: "নেভিগেটর",
        nav_calendar: "ক্যালেন্ডার",
        nav_services: "পরিষেবা",
        chat_header_title: "সঙ্গম এআই",
        chat_header_status: "অনলাইন (বহুভাষী)",
        chat_welcome_msg: "প্রণাম! আমি সঙ্গমসাথী এআই। আপনি আমাকে মেলায় থাকার জায়গা, স্নানের তারিখ বা কিভাবে মেলায় পৌঁছাবেন তা জিজ্ঞাসা করতে পারেন।",
        chat_input_placeholder: "আপনার নির্বাচিত ভাষায় জিজ্ঞাসা করুন...",
        listening: "শুনছি... এখন বলুন",
        sg_bathing: "📅 স্নানের তারিখ",
        sg_emergency: "🚨 জরুরি যোগাযোগ",
        sg_lost: "🔍 নিখোঁজ ও প্রাপ্তি",
        sg_medical: "🏥 মেডিকেল ক্যাম্প",
        subtab_mela: "মেলা গ্রাউন্ড ম্যাপ",
        subtab_city: "শহরের সাথে যোগাযোগ",
        navigator_title: "মেলা নেভিগেটর",
        navigator_desc: "সেক্টর এবং স্নানের ঘাটের মধ্যে রুট আঁকুন এবং দূরত্ব পরীক্ষা করুন।",
        route_start: "প্রারম্ভিক বিন্দু:",
        route_end: "গন্তব্য:",
        get_directions: "রুট পান",
        rt_distance: "দূরত্ব",
        rt_time: "হাঁটার সময়",
        rt_crossings: "পন্টুন ব্রিজ পারাপার",
        route_desc_sample: "সেক্টর ৪ প্রধান রাস্তা দিয়ে দক্ষিণে হাঁটুন, পন্টুন ব্রিজ ২ পার হন, সঙ্গম রোডে বাঁদিকে মোড় নিন এবং সোজা যান।",
        map_triveni_lbl: "ত্রিবেনি সঙ্গম",
        p1_lbl: "পুল ১",
        p2_lbl: "পুল ২",
        sec1_lbl: "সেক্টর ১ (প্রশাসন)",
        sec4_lbl: "সেক্টর ৪ (আপনি)",
        sec8_lbl: "সেক্টর ৮ (হাসপাতাল)",
        sec11_lbl: "সেক্টর ১১ (নিখোঁজ)",
        sec15_lbl: "সেক্টর ১৫ (ক্যাম্প)",
        pin_sangam_lbl: "সঙ্গম নোজ",
        pin_vip_lbl: "ভিআইপি ঘাট",
        pin_qila_lbl: "কেল্লা ঘাট",
        pin_temple_lbl: "হনুমান মন্দির",
        sec1_opt: "সেক্টর ১ (প্রবেশ গেট)",
        sec4_opt: "সেক্টর ৪ (আপনার অবস্থান)",
        sec8_opt: "সেক্টর ৮ (প্রধান বাস স্ট্যান্ড)",
        sec11_opt: "সেক্টর ১১ (রেলওয়ে স্টেশন ক্যাম্প)",
        sec15_opt: "সেক্টর ১৫ (উত্তর আখড়া)",
        sangam_opt: "ত্রিবেনি সঙ্গম নোজ",
        vip_opt: "ভিআইপি স্নান ঘাট",
        qila_opt: "কেল্লা স্নান ঘাট",
        med_opt: "সেন্ট্রাল হাসপাতাল (সেক্টর ৮)",
        lost_opt: "নিখোঁজ সদর দফতর (সেক্টর ১১)",
        temple_opt: "শয়ান হনুমান মন্দির",
        transit_planner_title: "শহর থেকে মেলা রুট প্ল্যানার",
        transit_planner_desc: "রেলওয়ে স্টেশন বা পার্কিং থেকে সরাসরি মেলা গেট পর্যন্ত যাত্রা পরিকল্পনা করুন।",
        transit_origin: "শুরুর স্টেশন (শহর):",
        transit_dest: "মেলা প্রবেশ গেট:",
        btn_plan_route: "রুট হিসাব করুন",
        recommended_mode: "পরিবহন মাধ্যম",
        estimated_fare: "আনুমানিক ভাড়া",
        step_by_step_heading: "যাত্রাপথের নির্দেশাবলী:",
        transit_directory_title: "অনুমোদিত পরিবহন ভাড়া ও গাইড",
        erick_fare_card: "ই-রিকশা ভাড়া",
        erick_fares_desc: "মেলা ১০ কিমি এলাকার মধ্যে সরকার অনুমোদিত নির্দিষ্ট ভাড়া তালিকা। অতিরিক্ত ভাড়ার জন্য ১১২ নম্বরে জানান।",
        mela_shuttle_card: "মেলা শটল রুট",
        mela_shuttles_desc: "রেলওয়ে স্টেশন এবং বাইরের পার্কিং থেকে সরাসরি মেলা প্রবেশদ্বার পর্যন্ত বিনামূল্যে সরকারি শটল বাস চলে ২৪ ঘণ্টা।",
        hub_pryj: "প্রয়াগরাজ জংশন স্টেশন (PRYJ)",
        hub_sfg: "সুবেদারগঞ্জ স্টেশন (SFG)",
        hub_pcoi: "প্রয়াগরাজ ছিউকি স্টেশন (PCOI)",
        hub_ixd: "প্রয়াগরাজ বিমানবন্দর (IXD)",
        hub_vns: "বারাণসী বিমানবন্দর (VNS - ১২০ কিমি)",
        hub_lko: "লখনউ বিমানবন্দর (LKO - ২০০ কিমি)",
        hub_jhunsi: "ঝুঁসি মেলা বাইরের পার্কিং",
        hub_arail: "আড়াইল মেলা বাইরের পার্কিং",
        calendar_header: "শাহি স্নান ও শুভ দিনগুলি",
        calendar_desc: "মহাকুম্ভ ২০২৮-এর প্রধান স্নানের তারিখগুলি নোট করুন। সেই অনুযায়ী আপনার ভ্রমণ এবং স্নানের পরিকল্পনা করুন।",
        snan_type_shahi: "শাহি স্নান",
        snan_type_normal: "পবিত্র স্নান",
        services_header: "মেলা সুবিধা ও থাকার গাইড",
        services_desc: "আপনার সেক্টরে আশ্রম, আখড়া, বিনামূল্যে খাবার (ভণ্ডারা), পুলিশ ক্যাম্প এবং শৌচাগারগুলি সন্ধান করুন।",
        fl_all: "সমস্ত পরিষেবা",
        fl_food: "ভণ্ডারা (খাবার)",
        fl_medical: "চিকিৎসা",
        fl_tents: "তাঁবু / থাকার জায়গা",
        fl_toilet: "শৌচাগার",
        sector_label: "সেক্টর",
        btn_map: "মানচিত্র দেখুন",
        btn_call: "কল সেন্টার",
        sos_card_title: "জরুরি এসওএস",
        sos_card_desc: "জরুরি দলগুলিকে আপনার অবস্থান পাঠাতে এবং একটি উচ্চ নিরাপত্তা সাইরেন বাজাতে উপরের বোতামটি ট্যাপ করুন।",
        play_siren: "সাইরেন বাজান",
        stop_siren: "সাইরেন বন্ধ করুন",
        sos_toast_title: "সংকেত পাঠানো হচ্ছে...",
        em_contacts_title: "সরাসরি হেল্পলাইন নম্বর",
        em_amb_title: "মেডিকেল অ্যাম্বুলেন্স",
        em_pol_title: "মেলা নিরাপত্তা / পুলিশ",
        em_ctrl_title: "মেলা নিয়ন্ত্রণ সদর দফতর",
        em_lost_title: "নিখোঁজ হেল্পলাইন",
        family_search_title: "নিখোঁজ পরিবারের সন্ধান",
        family_search_desc: "নিখোঁজ সেন্ট্রাল রেজিস্ট্রি ডেটাবেসে নামের সন্ধান করুন (সরাসরি আপডেট)।",
        family_search_placeholder: "পরিবারের সদস্যের নাম লিখুন...",
        family_found_msg: "রেজিস্ট্রি থেকে প্রাপ্ত মিল:",
        family_not_found: "ডাটাবেসে কোনো তথ্য মেলেনি। অনুগ্রহ করে নিকটস্থ নিখোঁজ বুথে (সেক্টর ১১) জানান বা ১৯২০ নম্বরে কল করুন।",
        status_reunited: "পুনর্মিলিত",
        status_camp: "যত্ন শিবিরে",
        status_transit: "পথে আছে",
        safety_guides_title: "জরুরি ও নিরাপত্তা গাইড",
        guide_1_title: "ভিড়ে পদদলিত প্রতিরোধ ও নিরাপত্তা",
        guide_1_content: "১. সর্বদা ভিড়ের গতির সাথে চলুন। বিপরীতে হাঁটবেন না।\n২. বুকের সামনে হাত ভাঁজ করে রাখুন যাতে শ্বাস নেওয়ার জায়গা তৈরি হয়।\n৩. ভিড়ের মধ্যে কোনো জিনিস পড়ে গেলে তা তোলার জন্য নিচু হবেন না।\n৪. পড়ে গেলে নিজেকে গুটিয়ে নিন, হাত দিয়ে মাথা ঢেকে রাখুন এবং বুক রক্ষা করুন।",
        guide_2_title: "উত্তাপ ও ক্লান্তির প্রাথমিক চিকিৎসা",
        guide_2_content: "১. তৃষ্ণা না পেলেও নিয়মিত জল এবং ওআরএস পান করুন।\n২. মাথা ঘোরা বা অতিরিক্ত ঘাম হলে অবিলম্বে ছায়াযুক্ত স্থানে যান।\n৩. আঁটসাঁট জামাকাপড় ঢিলে করুন এবং ত্বকে ঠান্ডা জল দিন।\n৪. লক্ষণ খারাপ হলে নিকটস্থ চিকিৎসাকেন্দ্রে যোগাযোগ করুন বা ১০৮ নম্বরে কল করুন।"
    },
    te: {
        tagline: "మహాకుంభ 2028 అసిస్టెంట్",
        ticker_alert: "అలర్ట్",
        ticker_message: "🔴 లైవ్: మకర సంక్రాంతి షాహీ స్నాన మార్గదర్శకాలు విడుదలయ్యాయి. సెక్టార్ 4 బ్రిడ్జ్ ఉదయం 4 నుండి 10 గంటల మధ్య వన్-వే మాత్రమే ఉంటుంది. సెక్టార్ 11 లోని పోయినవారి విభాగంలో ఈరోజు 14 మంది కలయికలు జరిగాయి.",
        welcome_title: "ప్రయాగ్‌రాజ్‌కు స్వాగతం",
        welcome_desc: "పవిత్ర మహాకుంభ మేళా 2028 కోసం మీ ఆధ్యాత్మిక ప్రయాణ తోడు.",
        your_location: "అంచనా వేసిన ప్రదేశం",
        sector_location: "సెక్టార్ 4 (అఖారా ప్రాంతం)",
        weather_title: "వాతావరణం & AQI",
        aqi_good: "మంచిది (68)",
        crowd_status: "సంగమం రద్దీ",
        crowd_moderate: "మధ్యస్థం (పసుపు)",
        countdown_title: "తదుపరి ప్రధాన స్నానం (పవిత్ర స్నానం)",
        next_snan_name: "మకర సంక్రాంతి (మొదటి షాహీ స్నానం)",
        next_snan_date: "జనవరి 14, 2028",
        days: "రోజులు",
        hours: "గంటలు",
        minutes: "నిమిషాలు",
        seconds: "సెకన్లు",
        quick_actions: "త్వరిత నావిగేషన్ హబ్",
        qa_map: "మేళా మ్యాప్ & మార్గం",
        qa_assistant: "సంగమం AI చాట్",
        qa_snan: "స్నానాల తేదీలు",
        qa_services: "సేవల డైరెక్టరీ",
        updates_title: "అప్‌డేట్లు & మార్గదర్శకాలు",
        nt_1_title: "సెక్యూరిటీ చెక్‌పాయింట్లు సక్రియం",
        nt_1_desc: "బాహ్య భద్రతా వలయాల వద్ద ధృవీకరణ కోసం మీ ఆధార్/గుర్తింపు కార్డును సిద్ధంగా ఉంచుకోండి.",
        nt_2_title: "ఉచిత తాగునీరు",
        nt_2_desc: "సెక్టార్ 3 మరియు సెక్టార్ 4 మార్గాల్లో ప్రతి 100 మీటర్లకు నీటి కుళాయిలు అందుబాటులో ఉన్నాయి.",
        nav_home: "హోమ్",
        nav_chat: "సంగమం AI",
        nav_map: "నావిగేటర్",
        nav_calendar: "క్యాలెండర్",
        nav_services: "సేవలు",
        chat_header_title: "సంగమం AI",
        chat_header_status: "ఆన్‌లైన్ (బహుభాష)",
        chat_welcome_msg: "ప్రణామం! నేను సంగమసాథి AI. వసతి శిబిరాలు, స్నానాల తేదీలు లేదా మేళా మార్గాల గురించి నన్ను అడగండి.",
        chat_input_placeholder: "మీరు ఎంచుకున్న భాషలో అడగండి...",
        listening: "వింటున్నాను... ఇప్పుడు మాట్లాడండి",
        sg_bathing: "📅 స్నానాల తేదీలు",
        sg_emergency: "🚨 అత్యవసర సంప్రదింపులు",
        sg_lost: "🔍 తప్పిపోయిన & దొరికిన",
        sg_medical: "🏥 వైద్య శిబిరం",
        subtab_mela: "మేళా మైదానం మ్యాప్",
        subtab_city: "సిటీ కనెక్టివిటీ",
        navigator_title: "మేళా నావిగేటర్",
        navigator_desc: "సెక్టార్ల మధ్య మరియు స్నాన ఘాట్ల మధ్య మార్గాలను గీయండి మరియు దూరాలను తనిఖీ చేయండి.",
        route_start: "ప్రారంభ స్థానం:",
        route_end: "గమ్యం స్థానం:",
        get_directions: "మార్గం చూపించు",
        rt_distance: "దూరం",
        rt_time: "నడక సమయం",
        rt_crossings: "పాంటూన్ వంతెనల దాటుట",
        route_desc_sample: "సెక్టార్ 4 ప్రధాన రహదారి గుండా దక్షిణం వైపు నడవండి, పాంటూన్ బ్రిడ్జ్ 2 దాటండి, సంగమం మార్గంలో ఎడమ వైపునకు తిరిగి నేరుగా వెళ్ళండి.",
        map_triveni_lbl: "త్రివేణి సంగమం",
        p1_lbl: "వంతెన 1",
        p2_lbl: "వంతెన 2",
        sec1_lbl: "సెక్టార్ 1 (పరిపాలన)",
        sec4_lbl: "సెక్టార్ 4 (మీరు)",
        sec8_lbl: "సెక్టార్ 8 (ఆసుపత్రి)",
        sec11_lbl: "సెక్టార్ 11 (పోయిన విభాగం)",
        sec15_lbl: "సెక్టార్ 15 (శిబిరం)",
        pin_sangam_lbl: "సంగమం నోస్",
        pin_vip_lbl: "VIP ఘాట్",
        pin_qila_lbl: "ఖిలా ఘాట్",
        pin_temple_lbl: "హనుమాన్ దేవాలయం",
        sec1_opt: "సెక్టార్ 1 (ప్రవేశ ద్వారం)",
        sec4_opt: "సెక్టార్ 4 (మీ ప్రదేశం)",
        sec8_opt: "సెక్టార్ 8 (ప్రధాన బస్సు స్టాండ్)",
        sec11_opt: "సెక్టార్ 11 (రైల్వే స్టేషన్ క్యాంప్)",
        sec15_opt: "సెక్టార్ 15 (ఉత్తర అఖారా)",
        sangam_opt: "త్రివేణి సంగమం నోస్",
        vip_opt: "VIP స్నాన ఘాట్",
        qila_opt: "ఖిలా స్నాన ఘాట్",
        med_opt: "సెంట్రల్ ఆసుపత్రి (సెక్టార్ 8)",
        lost_opt: "తప్పిపోయిన హెడ్‌క్వార్టర్స్ (సెక్టార్ 11)",
        temple_opt: "శయన హనుమాన్ దేవాలయం",
        transit_planner_title: "నగరం నుండి మేళా ట్రావెల్ ప్లానర్",
        transit_planner_desc: "విమానాశ్రయాలు, రైల్వే స్టేషన్లు లేదా పార్కింగ్ స్థలాల నుండి నేరుగా మేళా ద్వారాలకు మీ ప్రయాణాన్ని ప్లాన్ చేసుకోండి.",
        transit_origin: "ప్రారంభ హబ్ (నగరం):",
        transit_dest: "మేళా ప్రవేశ సెక్టార్:",
        btn_plan_route: "మార్గం లెక్కించు",
        recommended_mode: "రవాణా విధానం",
        estimated_fare: "అంచనా ధర",
        step_by_step_heading: "మార్గం సూచనలు:",
        transit_directory_title: "ఆమోదించబడిన రవాణా ధరలు & నియమాలు",
        erick_fare_card: "ఈ-రిక్షా ఛార్జీలు",
        erick_fares_desc: "మేళా పరిధిలోని 10 కిలోమీటర్ల లోపల ప్రభుత్వం నిర్ణయించిన నిర్దిష్ట ధరలు. అదనపు వసూళ్లపై 112 కి ఫిర్యాదు చేయండి.",
        mela_shuttle_card: "మేళా షటిల్ మార్గాలు",
        mela_shuttles_desc: "రైల్వే స్టేషన్లు మరియు బాహ్య పార్కింగ్ ల నుండి నేరుగా మేళా ప్రవేశ కేంద్రాలకు ఉచిత ప్రభుత్వ షటిల్ బస్సులు 24/7 నడుస్తాయి.",
        hub_pryj: "ప్రయాగ్‌రాజ్ జంక్షన్ (PRYJ)",
        hub_sfg: "సుబేదార్‌గంజ్ స్టేషన్ (SFG)",
        hub_pcoi: "ప్రయాగ్‌రాజ్ ఛేవ్కీ (PCOI)",
        hub_ixd: "ప్రయాగ్‌రాజ్ విమానాశ్రయం (IXD)",
        hub_vns: "వారణాసి విమానాశ్రయం (VNS - 120 కిమీ)",
        hub_lko: "లక్నో విమానాశ్రయం (LKO - 200 కిమీ)",
        hub_jhunsi: "ఝున్సీ మేళా బాహ్య పార్కింగ్",
        hub_arail: "అరైల్ మేళా బాహ్య పార్కింగ్",
        calendar_header: "షాహీ స్నానాలు & పవిత్ర తేదీలు",
        calendar_desc: "మహాకుంభ 2028 కి సంబంధించిన ప్రధాన స్నానాల తేదీలను నోట్ చేసుకోండి. తదనుగుణంగా మీ ప్రయాణాన్ని ప్లాన్ చేసుకోండి.",
        snan_type_shahi: "షాహీ స్నానం",
        snan_type_normal: "పవిత్ర స్నానం",
        services_header: "మేళా సేవలు & వసతి గైడ్",
        services_desc: "మీ సెక్టార్‌లో ఆశ్రమాలు, అఖారాలు, ఉచిత భోజన శాలలు (భండారాలు), పోలీస్ క్యాంపులు మరియు శౌచాలయాలను కనుగొనండి.",
        fl_all: "అన్ని సేవలు",
        fl_food: "భండారా (భోజనం)",
        fl_medical: "వైద్య సేవలు",
        fl_tents: "గుడారాలు / వసతి",
        fl_toilet: "మరుగుదొడ్లు",
        sector_label: "సెక్టార్",
        btn_map: "మ్యాప్ చూపించు",
        btn_call: "కాల్ సెంటర్",
        sos_card_title: "అत्यవసర SOS",
        sos_card_desc: "అత్యవసర విభాగాలకు మీ ప్రదేశాన్ని పంపించడానికి మరియు పెద్ద భద్రతా సైరన్‌ను ప్లే చేయడానికి పైన ఉన్న బటన్ నొక్కండి.",
        play_siren: "సైరన్ ప్లే చేయండి",
        stop_siren: "సైరన్ ఆపివేయండి",
        sos_toast_title: "సంకేతాన్ని పంపుతోంది...",
        em_contacts_title: "నేరుగా హెల్ప్‌లైన్ నెంబర్లు",
        em_amb_title: "వైద్య అంబులెన్స్",
        em_pol_title: "మేళా భద్రత / పోలీస్",
        em_ctrl_title: "మేళా కంట్రోల్ కమాండ్ హెడ్‌క్వార్టర్స్",
        em_lost_title: "తప్పిపోయిన వారి హెల్ప్‌లైన్",
        family_search_title: "తప్పిపోయిన కుటుంబ సభ్యుల శోధన",
        family_search_desc: "సెంట్రల్ రిజిస్ట్రీ డేటాబేస్ లో తప్పిపోయిన వారి పేర్ల కోసం శోధించండి (లైవ్ అప్‌డేట్).",
        family_search_placeholder: "కుటుంబ సభ్యుడి పేరు నమోదు చేయండి...",
        family_found_msg: "రిజిస్ట్రీలో కనుగొనబడిన మ్యాచ్‌లు:",
        family_not_found: "డేటాబేస్ లో ఎలాంటి సమాచారం దొరకలేదు. దయచేసి సమీపంలోని తప్పిపోయిన బూత్ (సెక్టార్ 11) లో నివేదించండి లేదా 1920 కి కాల్ చేయండి.",
        status_reunited: "కలిశారు",
        status_camp: "రక్షణ శిబిరంలో",
        status_transit: "దారిలో ఉన్నారు",
        safety_guides_title: "అత్యవసర & భద్రతా మార్గదర్శకాలు",
        guide_1_title: "తొక్కిసలాట నివారణ & భద్రత",
        guide_1_content: "1. ఎల్లప్పుడూ గుంపు వెళ్ళే దిశలోనే వెళ్ళండి. వ్యతిరేక దిశలో నడవకండి.\n2. శ్వాస తీసుకోవడానికి వీలుగా మీ చేతులను బాక్సర్ లాగా ఛాతీ ముందు మడచి ఉంచండి.\n3. రద్దీగా ఉండే గుంపులో ఏదైనా కింద పడితే, దానిని తీసుకోవడానికి వంగకండి.\n4. ఒకవేళ మీరు కింద పడిపోతే, చేతులతో తలను కప్పి ఛాతీని రక్షించుకోండి.",
        guide_2_title: "ఎండదెబ్బ & అలసట ప్రథమ చికిత్స",
        guide_2_content: "1. దాహం వేయకపోయినా క్రమం తప్పకుండా నీరు మరియు ORS తాగండి.\n2. మైకం, తలనొప్పి లేదా ఎక్కువ చెమటలు పట్టినప్పుడు వెంటనే నీడ ఉన్న ప్రదేశానికి వెళ్ళండి.\n3. గట్టి బట్టలను లిహి చేయండి మరియు చర్మంపై చల్లటి నీటిని చల్లండి.\n4. లక్షణాలు తీవ్రమైతే సమీప వైద్య శిబిరాన్ని సంప్రదించండి లేదా 108 కి కాల్ చేయండి."
    },
    ta: {
        tagline: "மஹாகும்ப 2028 உதவியாளர்",
        ticker_alert: "அறிவிப்பு",
        ticker_message: "🔴 நேரலை: மகர சங்கராந்தி ஷாஹி ஸ்நான வழிகாட்டுதல்கள் வெளியிடப்பட்டுள்ளன. செக்டார் 4 பாலம் காலை 4 மணி முதல் 10 மணி வரை ஒரு வழிப்பாதையாக மட்டுமே செயல்படும். செக்டார் 11 மீட்பு மையம் இன்று 14 குடும்ப இணைப்புகளைப் பதிவு செய்துள்ளது.",
        welcome_title: "பிரயாக்ராஜிற்கு வரவேற்கிறோம்",
        welcome_desc: "புனித மஹாகும்ப மேளா 2028-க்கான உங்கள் ஆன்மீகப் பயண வழிகாட்டி.",
        your_location: "மதிப்பிடப்பட்ட இடம்",
        sector_location: "செக்டார் 4 (அகாரா பகுதி)",
        weather_title: "வானிலை & AQI",
        aqi_good: "நன்று (68)",
        crowd_status: "சங்கமத்தில் கூட்டம்",
        crowd_moderate: "மிதமானது (மஞ்சள்)",
        countdown_title: "அடுத்த முக்கிய ஸ்நானம் (புனித நீராடல்)",
        next_snan_name: "மகர சங்கராந்தி (முதல் ஷாஹி ஸ்நானம்)",
        next_snan_date: "ஜனவரி 14, 2028",
        days: "நாட்கள்",
        hours: "மணி",
        minutes: "நிமிடம்",
        seconds: "வினாடி",
        quick_actions: "விரைவு வழிசெலுத்தல் மையம்",
        qa_map: "மேளா வரைபடம் & வழி",
        qa_assistant: "சங்கமம் AI சாட்",
        qa_snan: "நீராடல் தேதிகள்",
        qa_services: "சேவைகள் அடைவு",
        updates_title: "செய்திகள் & வழிகாட்டுதல்கள்",
        nt_1_title: "பாதுகாப்புச் சாவடிகள் தயார்",
        nt_1_desc: "வெளிப்புற பாதுகாப்பு வளையங்களில் சரிபார்ப்பதற்காக உங்கள் ஆதார்/அடையாள அட்டையைத் தயாராக வைத்திருக்கவும்.",
        nt_2_title: "இலவசக் குடிநீர்",
        nt_2_desc: "செக்டார் 3 மற்றும் செக்டார் 4 வழிகளில் ஒவ்வொரு 100 மீட்டருக்கும் குடிநீர் குழாய்கள் உள்ளன.",
        nav_home: "முகப்பு",
        nav_chat: "சங்கமம் AI",
        nav_map: "வழிசெலுத்தி",
        nav_calendar: "நாட்காட்டி",
        nav_services: "சேவைகள்",
        chat_header_title: "சங்கமம் AI",
        chat_header_status: "ஆன்லைன் (பல்மொழி)",
        chat_welcome_msg: "வணக்கம்! நான் சங்கமசாதி AI. தங்குமிடம், நீராடல் தேதிகள் அல்லது மேளாவுக்கு வரும் வழி பற்றி என்னிடம் கேட்கலாம்.",
        chat_input_placeholder: "உங்கள் மொழியில் கேளுங்கள்...",
        listening: "கேட்டுக்கொண்டிருக்கிறேன்... இப்போது பேசுங்கள்",
        sg_bathing: "📅 நீராடல் தேதிகள்",
        sg_emergency: "🚨 அவசர தொடர்புகள்",
        sg_lost: "🔍 தொலைந்த & கண்டெடுக்கப்பட்ட",
        sg_medical: "🏥 மருத்துவ முகாம்",
        subtab_mela: "மேளா மைதான வரைபடம்",
        subtab_city: "நகர இணைப்பு",
        navigator_title: "மேளா வழிசெலுத்தி",
        navigator_desc: "செக்டார்களுக்கு இடையேயும் நீராடும் घाட்களுக்கு இடையேயும் பாதைகளை வரைந்து தூரத்தை அறியவும்.",
        route_start: "தொடக்கப் புள்ளி:",
        route_end: "சேருமிடம்:",
        get_directions: "வழியைக் காட்டு",
        rt_distance: "தூரம்",
        rt_time: "நடக்கும் நேரம்",
        rt_crossings: "மிதவைப் பாலங்களைக் கடத்தல்",
        route_desc_sample: "செக்டார் 4 முதன்மைச் சாலை வழியாக தெற்கு நோக்கி நடக்கவும், மிதவைப்பாலம் 2-ஐக் கடந்து, சங்கமப் பாதையில் இடப்பக்கம் திரும்பி நேராகச் செல்லவும்.",
        map_triveni_lbl: "திரிவேணி சங்கமம்",
        p1_lbl: "பாலம் 1",
        p2_lbl: "பாலம் 2",
        sec1_lbl: "செக்டார் 1 (நிர்வாகம்)",
        sec4_lbl: "செக்டார் 4 (நீ)",
        sec8_lbl: "செக்டார் 8 (மருத்துவமனை)",
        sec11_lbl: "செக்டார் 11 (மீட்பகம்)",
        sec15_lbl: "செக்டார் 15 (முகாம்)",
        pin_sangam_lbl: "சங்கம முனை",
        pin_vip_lbl: "VIP ঘাট",
        pin_qila_lbl: "கோட்டை ঘাট",
        pin_temple_lbl: "அனுமன் கோவில்",
        sec1_opt: "செக்டார் 1 (நுழைவாயில்)",
        sec4_opt: "செக்டார் 4 (உங்களது இருப்பிடம்)",
        sec8_opt: "செக்டார் 8 (முதன்மைப் பேருந்து நிலையம்)",
        sec11_opt: "செக்டார் 11 (இரயில் நிலைய முகாம்)",
        sec15_opt: "செக்டார் 15 (வடக்கு அகாரா)",
        sangam_opt: "திரிவேணி சங்கம முனை",
        vip_opt: "VIP நீராடல் ঘাট",
        qila_opt: "கோட்டை நீராடல் ঘাট",
        med_opt: "மத்திய மருத்துவமனை (செக்டார் 8)",
        lost_opt: "மீட்பuத் தலைமையகம் (செக்டார் 11)",
        temple_opt: "படுத்திருக்கும் அனுமன் கோவில்",
        transit_planner_title: "நகரத்திலிருந்து மேளா பயணத் திட்டம்",
        transit_planner_desc: "முக்கிய விமான நிலையங்கள், ரயில் நிலையங்கள் அல்லது வாகன நிறுத்தங்களில் இருந்து நேரடியாக மேளா வாயில்களுக்கான வழியைத் திட்டமிடுங்கள்.",
        transit_origin: "தொடக்கப் புள்ளி (நகரம்):",
        transit_dest: "மேளா நுழைவு வாயில்:",
        btn_plan_route: "வழியைக் கணக்கிடு",
        recommended_mode: "போக்குவரத்து முறை",
        estimated_fare: "மதிப்பிடப்பட்ட கட்டணம்",
        step_by_step_heading: "வழிமுறைகள்:",
        transit_directory_title: "அங்கீகரிக்கப்பட்ட கட்டணங்கள் & விதிகள்",
        erick_fare_card: "இ-ரிக்ஷா கட்டணங்கள்",
        erick_fares_desc: "மேளா பகுதிக்குள் 10 கிமீ தூரத்திற்கு அரசு அங்கீகரித்த நிலையான கட்டணம். கூடுதல் கட்டணம் வசூலித்தால் 112-ஐத் தொடர்பு கொள்ளவும்.",
        mela_shuttle_card: "மேளா ஷட்டில் வழித்தடங்கள்",
        mela_shuttles_desc: "ரயில் நிலையங்கள் மற்றும் வெளி வாகன நிறுத்தங்களில் இருந்து நேரடியாக மேளா நுழைவாயில்கள் வரை இலவச அரசு ஷட்டில் பேருந்துகள் 24/7 இயங்குகின்றன.",
        hub_pryj: "பிரயாக்ராஜ் சந்திப்பு நிலையம் (PRYJ)",
        hub_sfg: "சுபேதர்கஞ்ச் நிலையம் (SFG)",
        hub_pcoi: "பிரயாக்ராஜ் செவ்கி நிலையம் (PCOI)",
        hub_ixd: "பிரயாக்ராஜ் விமான நிலையம் (IXD)",
        hub_vns: "வாரணாசி விமான நிலையம் (VNS - 120 கிமீ)",
        hub_lko: "லக்னோ விமான நிலையம் (LKO - 200 கிமீ)",
        hub_jhunsi: "ஜூசி மேளா வெளி வாகன நிறுத்தம்",
        hub_arail: "அரைல் மேளா வெளி வாகன நிறுத்தம்",
        calendar_header: "ஷாஹி ஸ்நானம் & புனித தேதிகள்",
        calendar_desc: "மஹாகும்பம் 2028-க்கான முக்கிய நீராடல் தேதிகளைக் குறித்துக் கொள்ளுங்கள். அதற்கேற்ப உங்கள் பயணத் திட்டங்களை வகுக்கவும்.",
        snan_type_shahi: "ஷாஹி ஸ்நானம்",
        snan_type_normal: "புனித நீராடல்",
        services_header: "மேளா சேவைகள் & தங்கும் வசதி வழிகாட்டி",
        services_desc: "உங்கள் செக்டாரில் உள்ள ஆசிரமங்கள், அகாடாக்கள், இலவச உணவுச் சாலைகள் (பண்டாரங்கள்), காவல் முகாம்கள் மற்றும் கழிப்பறைகளைக் கண்டறியவும்.",
        fl_all: "அனைத்து சேவைகள்",
        fl_food: "பண்டாரா (உணவு)",
        fl_medical: "மருத்துவ சேவை",
        fl_tents: "கூடாரங்கள் / தங்குமிடம்",
        fl_toilet: "கழிப்பறைகள்",
        sector_label: "செக்டார்",
        btn_map: "வரைபடத்தைக் காட்டு",
        btn_call: "அழைப்பு மையம்",
        sos_card_title: "அவசர SOS",
        sos_card_desc: "அவசரக் குழுக்களுக்கு உங்கள் இருப்பிடத்தை அனுப்பவும், பலத்த எச்சரிக்கை சைரனை ஒலிக்கச் செய்யவும் மேலே உள்ள பொத்தானைத் தொடவும்.",
        play_siren: "சைரனை இயக்கு",
        stop_siren: "சைரனை நிறுத்து",
        sos_toast_title: "அபாய சமிக்ஞை அனுப்பப்படுகிறது...",
        em_contacts_title: "நேரடி உதவி எண்கள்",
        em_amb_title: "மருத்துவ ஆம்புலன்ஸ்",
        em_pol_title: "பாதுகாப்பு / காவல்துறை",
        em_ctrl_title: "மேளா கட்டுப்பாட்டுத் தலைமையகம்",
        em_lost_title: "தொலைந்தோர் மீட்பு உதவி எண்",
        family_search_title: "தொலைந்த குடும்ப உறுப்பினரைத் தேடுங்கள்",
        family_search_desc: "மையப் பதிவேட்டில் தொலைந்தோர் பட்டியலில் உள்ள பெயர்களைத் தேடுங்கள் (நேரலை அப்லோடு).",
        family_search_placeholder: "குடும்ப உறுப்பினரின் பெயரை உள்ளிடவும்...",
        family_found_msg: "பதிவேட்டில் கண்டறியப்பட்டவை:",
        family_not_found: "தரவுத்தளத்தில் எந்தத் தகவலும் கிடைக்கவில்லை. அருகிலுள்ள மீட்பு மையத்தில் (செக்டார் 11) தெரிவிக்கவும் அல்லது 1920-க்கு அழைக்கவும்.",
        status_reunited: "மீட்கப்பட்டார்",
        status_camp: "பாதுகாப்பு முகாமில்",
        status_transit: "பயணத்தில் உள்ளார்",
        safety_guides_title: "அவசரக்கால & பாதுகாப்பு வழிகாட்டி",
        guide_1_title: "நெரிசலில் சிக்காமல் தற்காத்துக் கொள்ளுதல்",
        guide_1_content: "1. எப்போதும் கூட்டத்தின் போக்கிலேயே செல்லுங்கள். அதற்கு எதிராக நடக்க வேண்டாம்.\n2. சுவாசிக்க இடம் கிடைக்க உங்கள் கைகளை மார்புக்கு முன்னால் குத்துச்சண்டை வீரர் போல் மடித்து வைத்துக் கொள்ளவும்.\n3. அடர்த்தியான கூட்டத்தில் ஏதேனும் கீழே விழுந்தால், அதை எடுக்கக் குனிய வேண்டாம்.\n4. நீங்கள் கீழே விழுந்தால், ஒரு பந்து போல் சுருண்டு, கைகளால் தலையை மூடி மார்பைப் பாதுகாக்கவும்.",
        guide_2_title: "வெப்பத் தளர்ச்சி முதலுதவி",
        guide_2_content: "1. தாகம் எடுக்காவிட்டாலும் தொடர்ந்து தண்ணீர் மற்றும் ஓ.ஆர்.எஸ் (ORS) பருகுங்கள்.\n2. மயக்கம், தலைவலி அல்லது அதிக வியர்வை ஏற்பட்டால் உடனடியாக நிழலான இடத்திற்குச் செல்லுங்கள்.\n3. இறுக்கமான ஆடைகளைத் தளர்த்தி, தோலில் குளிர்ந்த நீரைப் பூசவும்.\n4. அறிகுறிகள் மோசமடைந்தால் அருகிலுள்ள மருத்துவ முகாமில் தெரிவிக்கவும் அல்லது 108 ஐ அழைக்கவும்."
    },
    gu: {
        tagline: "મહાકુંભ ૨૦૨૮ આસિસ્ટન્ટ",
        ticker_alert: "ચેતવણી",
        ticker_message: "🔴 લાઈવ: મકર સંક્રાંતિ શાહી સ્નાન માર્ગદર્શિકા જાહેર. સેક્ટર ૪ બ્રિજ સવારે ૪ થી ૧૦ વાગ્યા દરમિયાન માત્ર વન-વે રહેશે. સેક્ટર ૧૧ ના ખોવાયેલા વિભાગે આજે ૧૪ મિલન નોંધાવ્યા છે.",
        welcome_title: "પ્રયાગરાજમાં આપનું સ્વાગત છે",
        welcome_desc: "પવિત્ર મહાકુંભ મેળો ૨૦૨૮ માટે તમારા આધ્યાત્મિક પ્રવાસનો સાથી.",
        your_location: "અંદાજિત સ્થાન",
        sector_location: "સેક્ટર ૪ (અખાડા ક્ષેત્ર)",
        weather_title: "હવામાન અને AQI",
        aqi_good: "સારું (૬૮)",
        crowd_status: "સંગમ પર ભીડ",
        crowd_moderate: "મધ્યમ (પીળો)",
        countdown_title: "આગામી મુખ્ય સ્નાન (પવિત્ર સ્નાન)",
        next_snan_name: "મકર સંક્રાંતિ (પ્રથમ શાહી સ્નાન)",
        next_snan_date: "૧૪ જાન્યુઆરી, ૨૦૨૮",
        days: "દિવસ",
        hours: "કલાક",
        minutes: "મિનિટ",
        seconds: "સેકન્ડ",
        quick_actions: "ઝડપી નેવિગેશન હબ",
        qa_map: "મેળાનો નકશો અને માર્ગ",
        qa_assistant: "સંગમ AI ચેટ",
        qa_snan: "સ્નાનની તારીખો",
        qa_services: "સેવાઓની ડિરેક્ટરી",
        updates_title: "અપડેટ્સ અને માર્ગદર્શિકા",
        nt_1_title: "સુરક્ષા ચોકીઓ સક્રિય",
        nt_1_desc: "બહારના સુરક્ષા ઘેરા પર ચકાસણી માટે તમારું આધાર કાર્ડ/ઓળખ પત્ર તૈયાર રાખો.",
        nt_2_title: "મફત પીવાનું પાણી",
        nt_2_desc: "સેક્ટર ૩ અને ૪ માર્ગો પર પીવાનું પાણી ઉપલબ્ધ છે.",
        nav_home: "હોમ",
        nav_chat: "સંગમ AI",
        nav_map: "નેવિગેટર",
        nav_calendar: "કેલેન્ડર",
        nav_services: "સેવાઓ",
        chat_header_title: "સંગમ AI",
        chat_header_status: "ઓનલાઈન (બહુભાષી)",
        chat_welcome_msg: "પ્રણામ! હું સંગમસાથી AI છું. તમે રોકાણની સગવડ, સ્નાનની તારીખો કે મેળો પહોંચવાના માર્ગ વિશે પૂછી શકો છો.",
        chat_input_placeholder: "તમારી પસંદ કરેલી ભાષામાં પૂછો...",
        listening: "સાંભળી રહ્યો છું... હવે બોલો",
        sg_bathing: "📅 સ્નાનની તારીખો",
        sg_emergency: "🚨 ઈમરજન્સી સંપર્ક",
        sg_lost: "🔍 ખોવાયેલ અને મળેલ",
        sg_medical: "🏥 મેડિકલ કેમ્પ",
        subtab_mela: "મેળા ગ્રાઉન્ડ નકશો",
        subtab_city: "શહેર સાથે કનેક્ટિવિટી",
        navigator_title: "મેળાનો નેવિગેટર",
        navigator_desc: "સેક્ટરો અને સ્નાન ઘાટો વચ્ચે માર્ગ દોરો અને અંતર તપાસો.",
        route_start: "પ્રારંભિક બિંદુ:",
        route_end: "ગંતવ્ય સ્થાન:",
        get_directions: "માર્ગ મેળવો",
        rt_distance: "અંતર",
        rt_time: "ચાલવાનો સમય",
        rt_crossings: "પોન્ટૂન બ્રિજ પાર કરવા",
        route_desc_sample: "સેક્ટર ૪ મુખ્ય રસ્તા પર દક્ષિણ તરફ ચાલો, પોન્ટૂન બ્રિજ ૨ પાર કરો, સંગમ માર્ગ પર ડાબી બાજુ વળો અને સીધા ચાલો.",
        map_triveni_lbl: "ત્રિવેણી સંગમ",
        p1_lbl: "પુલ ૧",
        p2_lbl: "પુલ ૨",
        sec1_lbl: "સેક્ટર ૧ (વહીવટ)",
        sec4_lbl: "સેક્ટર ૪ (તમે)",
        sec8_lbl: "સેક્ટર ૮ (હોસ્પિટલ)",
        sec11_lbl: "સેક્ટર ૧૧ (ખોવાયેલ વિભાગ)",
        sec15_lbl: "સેક્ટર ૧૫ (કેમ્પ)",
        pin_sangam_lbl: "સંગમ નોઝ",
        pin_vip_lbl: "VIP ઘાટ",
        pin_qila_lbl: "કિલ્લા ઘાટ",
        pin_temple_lbl: "હનુમાન મંદિર",
        sec1_opt: "સેક્ટર ૧ (પ્રવેશ દ્વાર)",
        sec4_opt: "સેક્ટર ૪ (તમારું સ્થાન)",
        sec8_opt: "સેક્ટર ૮ (મુખ્ય બસ સ્ટેન્ડ)",
        sec11_opt: "સેક્ટર ૧૧ (રેલ્વે સ્ટેશન કેમ્પ)",
        sec15_opt: "સેક્ટર ૧૫ (ઉત્તરી અખાડા)",
        sangam_opt: "ત્રિવેણી સંગમ નોઝ",
        vip_opt: "VIP સ્નાન ઘાટ",
        qila_opt: "કિલ્લા સ્નાન ઘાટ",
        med_opt: "સેન્ટ્રલ હોસ્પિટલ (સેક્ટર ૮)",
        lost_opt: "ખોવાયેલ મુખ્ય મથક (સેક્ટર ૧૧)",
        temple_opt: "સુતેલા હનુમાનજી મંદિર",
        transit_planner_title: "શહેરથી મેળા પ્રવાસ આયોજક",
        transit_planner_desc: "મુખ્ય હવાઈ મથકો, રેલ્વે સ્ટેશનો કે પાર્કિંગ સ્થળોથી સીધા મેળા પ્રવેશદ્વાર સુધીના પ્રવાસનું આયોજન કરો.",
        transit_origin: "શરૂઆતનું હબ (શહેર):",
        transit_dest: "મેળા પ્રવેશ સેક્ટર:",
        btn_plan_route: "માર્ગ શોધો",
        recommended_mode: "પરિવહન પદ્ધતિ",
        estimated_fare: "અંદાજિત ભાડું",
        step_by_step_heading: "માર્ગ માર્ગદર્શન:",
        transit_directory_title: "મંજૂર પરિવહન ભાડા અને નિયમો",
        erick_fare_card: "ઈ-રિક્શા ભાડા દર",
        erick_fares_desc: "મેળા ક્ષેત્રના ૧૦ કિમી ત્રિજ્યામાં સરકાર માન્ય નિશ્ચિત ભાડું. વધુ ભાડું વસૂલવાની ફરિયાદ ૧૧૨ પર કરો.",
        mela_shuttle_card: "મેળા શટલ માર્ગ",
        mela_shuttles_desc: "રેલ્વે સ્ટેશનો અને બહારના પાર્કિંગથી મેળા પ્રવેશદ્વાર સુધી મફત સરકારી શટલ બસો ૨૪ કલાક ચાલે છે.",
        hub_pryj: "પ્રયાગરાજ જંક્શન (PRYJ)",
        hub_sfg: "સુબેદારગંજ સ્ટેશન (SFG)",
        hub_pcoi: "પ્રયાગરાજ છીવકી (PCOI)",
        hub_ixd: "પ્રયાગરાજ એરપોર્ટ (IXD)",
        hub_vns: "વારાણસી એરપોર્ટ (VNS - ૧૨૦ કિમી)",
        hub_lko: "લખનૌ એરપોર્ટ (LKO - ૨૦૦ કિમી)",
        hub_jhunsi: "ઝૂંસી મેળા બાહ્ય પાર્કિંગ",
        hub_arail: "અરાઈલ મેળા બાહ્ય પાર્કિંગ",
        calendar_header: "શાહી સ્નાન અને શુભ તારીખો",
        calendar_desc: "મહાકુંભ ૨૦૨૮ માટેની મુખ્ય સ્નાન તારીખો નોંધી લો. તે મુજબ તમારી મુસાફરી અને સ્નાનનું આયોજન કરો.",
        snan_type_shahi: "શાહી સ્નાન",
        snan_type_normal: "પવિત્ર સ્નાન",
        services_header: "મેળાની સુવિધાઓ અને રોકાણ માર્ગદર્શિકા",
        services_desc: "તમારા સેક્ટરમાં આશ્રમો, અખાડા, મફત ભોજન (ભંડારા), પોલીસ કેમ્પ અને શૌચાલયો શોધો.",
        fl_all: "બધી સેવાઓ",
        fl_food: "ભંડારા (ભોજન)",
        fl_medical: "તબીબી સેવા",
        fl_tents: "તંબુ / રોકાણ વ્યવસ્થા",
        fl_toilet: "શૌચાલય",
        sector_label: "સેક્ટર",
        btn_map: "નકશો જુઓ",
        btn_call: "કૉલ સેન્ટર",
        sos_card_title: "ઈમરજન્સી SOS",
        sos_card_desc: "કટોકટી ટીમોને તમારું સ્થાન મોકલવા અને મોટો સાયરન વગાડવા માટે ઉપરનું બટન દબાવો.",
        play_siren: "સાયરન વગાડો",
        stop_siren: "સાયરન બંધ કરો",
        sos_toast_title: "સંદેશ મોકલી રહ્યું છે...",
        em_contacts_title: "સીધા હેલ્પલાઇન નંબર",
        em_amb_title: "મેડિકલ એમ્બ્યુલન્સ",
        em_pol_title: "મેળા સુરક્ષા / પોલીસ",
        em_ctrl_title: "મેળા કંટ્રોલ કમાન્ડ મુખ્ય મથક",
        em_lost_title: "ખોવાયેલ હેલ્પલાઇન",
        family_search_title: "ખોવાયેલા પરિવારની શોધ",
        family_search_desc: "ખોવાયેલા સેન્ટ્રલ રજિસ્ટ્રી ડેટાબેઝમાં નામો શોધો (લાઈવ અપડેટ).",
        family_search_placeholder: "પરિવારના સભ્યનું નામ દાખલ કરો...",
        family_found_msg: "રજિસ્ટ્રીમાંથી મળેલા નામ:",
        family_not_found: "ડેટાબેઝમાં કોઈ મેળ ખાતો રેકોર્ડ મળ્યો નથી. કૃપા કરીને નજીકના ખોવાયેલા વિભાગના બૂથ (સેક્ટર ૧૧) પર સંપર્ક કરો અથવા ૧૯૨૦ પર કૉલ કરો.",
        status_reunited: "પુનઃમિલન થયું",
        status_camp: "કેર કેમ્પમાં",
        status_transit: "રસ્તામાં છે",
        safety_guides_title: "ઈમરજન્સી અને સેફ્ટી ગાઇડ",
        guide_1_title: "ધક્કામુક્કીથી બચાવ અને સુરક્ષા",
        guide_1_content: "૧. હંમેશા ભીડના પ્રવાહ સાથે આગળ વધો. તેની વિરુદ્ધ દિશામાં ન ચાલો.\n૨. શ્વાસ લેવાની જગ્યા બનાવવા માટે તમારા હાથને છાતીની સામે બોક્સરની જેમ વાળીને રાખો.\n૩. જો ગીચ ભીડમાં તમારી કોઈ વસ્તુ પડી જાય, તો તેને લેવા નીચે ન નમો.\n૪. જો તમે પડી જાઓ, તો દડાની જેમ સંકોચાઈ જાઓ, હાથથી માથું ઢાંકો અને છાતીનું રક્ષણ કરો.",
        guide_2_title: "ગરમી અને થાક માટે પ્રાથમિક સારવાર",
        guide_2_content: "૧. તરસ ન લાગી હોય તો પણ નિયમિતપણે પાણી અને ઓઆરએસ (ORS) પીઓ.\n૨. ચક્કર આવવા, માથાનો દુખાવો અથવા વધુ પડતો પરસેવો થાય તો તરત જ છાયડાવાળી જગ્યાએ જાઓ.\n૩. ચુસ્ત કપડાં ઢીલા કરો અને ત્વચા પર ઠંડુ પાણી લગાવો.\n૪. લક્ષણો વધુ બગડે તો નજીકના તબીબી બૂથનો સંપર્ક કરો અથવા ૧૦૮ ડાયલ કરો."
    },
    mr: {
        tagline: "महाकुंभ २०२८ असिस्टंट",
        ticker_alert: "सूचना",
        ticker_message: "🔴 लाईव्ह: मकर संक्रांती शाही स्नान मार्गदर्शक तत्त्वे जाहीर. सेक्टर ४ ब्रीज सकाळी ४ ते १० दरम्यान फक्त एकतर्फी वाहतुकीसाठी खुला राहील. सेक्टर ११ मधील हरवलेल्या कक्षाने आज १४ पुनर्मिलन नोंदवले आहेत.",
        welcome_title: "प्रयागराजमध्ये स्वागत आहे",
        welcome_desc: "पवित्र महाकुंभ मेळा २०२८ साठी आपला आध्यात्मिक प्रवासाचा सोबती.",
        your_location: "अंदाजे स्थान",
        sector_location: "सेक्टर ४ (अखाडा क्षेत्र)",
        weather_title: "हवामान आणि AQI",
        aqi_good: "चांगले (६८)",
        crowd_status: "संगमावरील गर्दी",
        crowd_moderate: "मध्यम (पिवळा)",
        countdown_title: "पुढील मुख्य स्नान (पवित्र स्नान)",
        next_snan_name: "मकर संक्रांत (प्रथम शाही स्नान)",
        next_snan_date: "१४ जानेवारी, २०२८",
        days: "दिवस",
        hours: "तास",
        minutes: "मिनिटे",
        seconds: "सेकंद",
        quick_actions: "जलद नेव्हिगेशन हब",
        qa_map: "मेळा नकाशा आणि मार्ग",
        qa_assistant: "संगम AI चॅट",
        qa_snan: "स्नान तारखा",
        qa_services: "सेवा निर्देशिका",
        updates_title: "अपडेट्स आणि मार्गदर्शक तत्त्वे",
        nt_1_title: "सुरक्षा चौक्या कार्यरत",
        nt_1_desc: "बाहेरच्या सुरक्षा वेढ्यांवर तपासणीसाठी आपले आधार कार्ड/ओळखपत्र तयार ठेवा.",
        nt_2_title: "मोफत पिण्याचे पाणी",
        nt_2_desc: "सेक्टर ३ आणि सेक्टर ४ मार्गावर प्रत्येक १०० मीटरवर पाण्याचे नळ उपलब्ध आहेत.",
        nav_home: "होम",
        nav_chat: "संगम AI",
        nav_map: "नेव्हिगेटर",
        nav_calendar: "कॅलेंडर",
        nav_services: "सेवा",
        chat_header_title: "संगम AI",
        chat_header_status: "सक्रिय (बहुभाषी)",
        chat_welcome_msg: "प्रणाम! मी संगमसाथी AI आहे. आपण राहण्याची सोय, स्नान तारखा, किंवा मेळाव्यात पोहोचण्याच्या मार्गाबद्दल विचारू शकता.",
        chat_input_placeholder: "आपल्या निवडलेल्या भाषेत विचारा...",
        listening: "ऐकत आहे... आता बोला",
        sg_bathing: "📅 स्नान तारखा",
        sg_emergency: "🚨 आणीबाणी संपर्क",
        sg_lost: "🔍 हरवलेले व सापडलेले",
        sg_medical: "🏥 वैद्यकीय कॅम्प",
        subtab_mela: "मेळा मैदान नकाशा",
        subtab_city: "शहर दळणवळण",
        navigator_title: "मेळा नेव्हिगेटर",
        navigator_desc: "सेक्टर्स आणि स्नान घाटांच्या दरम्यान मार्ग निश्चित करा आणि अंतराची खात्री करा.",
        route_start: "प्रारंभिक बिंदू:",
        route_end: "गंतव्य स्थान:",
        get_directions: "मार्ग मिळवा",
        rt_distance: "अंतर",
        rt_time: "चालण्याची वेळ",
        rt_crossings: "पाँटून पूल ओलांडणे",
        route_desc_sample: "सेक्टर ४ मुख्य रस्त्यावरून दक्षिणेकडे चाला, पाँटून पूल २ ओलांडून संगम मार्गावर डावीकडे वळा आणि सरळ जा.",
        map_triveni_lbl: "त्रिवेणी संगम",
        p1_lbl: "पूल १",
        p2_lbl: "पूल २",
        sec1_lbl: "सेक्टर १ (प्रशासन)",
        sec4_lbl: "सेक्टर ४ (तुम्ही)",
        sec8_lbl: "सेक्टर ८ (रुग्णालय)",
        sec11_lbl: "सेक्टर ११ (हरवलेले कक्ष)",
        sec15_lbl: "सेक्टर 1५ (कॅम्प)",
        pin_sangam_lbl: "संगम नोज",
        pin_vip_lbl: "VIP घाट",
        pin_qila_lbl: "किल्ला घाट",
        pin_temple_lbl: "हनुमान मंदिर",
        sec1_opt: "सेक्टर १ (प्रवेश द्वार)",
        sec4_opt: "सेक्टर ४ (आपले स्थान)",
        sec8_opt: "सेक्टर ८ (मुख्य बस स्थानक)",
        sec11_opt: "सेक्टर ११ (रेल्वे स्टेशन कॅम्प)",
        sec15_opt: "सेक्टर १५ (उत्तरी अखाडा)",
        sangam_opt: "त्रिवेणी संगम नोज",
        vip_opt: "VIP स्नान घाट",
        qila_opt: "किल्ला स्नान घाट",
        med_opt: "सेंट्रल हॉस्पिटल (सेक्टर ८)",
        lost_opt: "हरवलेले मुख्यालय (सेक्टर ११)",
        temple_opt: "लेटे हुए हनुमानजी मंदिर",
        transit_planner_title: "शहर ते मेळा प्रवास नियोजक",
        transit_planner_desc: "मुख्य विमानतळ, रेल्वे स्थानक किंवा पार्किंगमधून थेट मेळा प्रवेशद्वारापर्यंत प्रवासाचे नियोजन करा.",
        transit_origin: "प्रारंभीचे स्टेशन (शहर):",
        transit_dest: "मेळा प्रवेश गेट:",
        btn_plan_route: "मार्ग शोधा",
        recommended_mode: "वाहतुकीचा पर्याय",
        estimated_fare: "अंदाजे भाडे",
        step_by_step_heading: "मार्गदर्शन पायऱ्या:",
        transit_directory_title: "मंजूर प्रवास दर आणि नियम",
        erick_fare_card: "ई-रिक्षा दरपत्रक",
        erick_fares_desc: "मेळा परिसरातील १० किमी अंतरासाठी शासनाने मंजूर केलेले निश्चित दर. तक्रारींसाठी ११२ वर संपर्क करा.",
        mela_shuttle_card: "मेळा शटल बस मार्ग",
        mela_shuttles_desc: "रेल्वे स्थानके आणि बाहेरील पार्किंगमधून थेट मेळा प्रवेशद्वारापर्यंत मोफत शासकीय बस सेवा २४ तास उपलब्ध.",
        hub_pryj: "प्रयागराज जंक्शन (PRYJ)",
        hub_sfg: "सुबेदारगंज स्थानक (SFG)",
        hub_pcoi: "प्रयागराज छिवकी (PCOI)",
        hub_ixd: "प्रयागराज विमानतळ (IXD)",
        hub_vns: "वाराणसी विमानतळ (VNS - १२० किमी)",
        hub_lko: "लखनऊ विमानतळ (LKO - २०० किमी)",
        hub_jhunsi: "झुंसी मेळा बाह्य पार्किंग",
        hub_arail: "अराईल्ड मेळा बाહ્ય पार्किंग",
        calendar_header: "शाही स्नान आणि शुभ दिवस",
        calendar_desc: "महाकुंभ २०२८ च्या मुख्य स्नान तारखांची नोंद घ्या. त्यानुसार आपल्या प्रवासाचे आणि स्नानाचे नियोजन करा.",
        snan_type_shahi: "शाही स्नान",
        snan_type_normal: "पवित्र स्नान",
        services_header: "मेळा सुविधा आणि राहण्याची सोय मार्गदर्शक",
        services_desc: "आपल्या सेक्टरमधील आश्रम, अखाडे, मोफत जेवण (भंडारा), पोलीस कॅम्प आणि स्वच्छतागृहे शोधा.",
        fl_all: "सर्व सेवा",
        fl_food: "भंडारा (जेवण)",
        fl_medical: "वैद्यकीय मदत",
        fl_tents: "तंबू / निवास व्यवस्था",
        fl_toilet: "स्वच्छतागृहे",
        sector_label: "सेक्टर",
        btn_map: "नकाशा पहा",
        btn_call: "कॉल सेंटर",
        sos_card_title: "आणीबाणी SOS",
        sos_card_desc: "आपत्कालीन पथकांना आपले स्थान पाठवण्यासाठी आणि मोठा सुरक्षा सायरन वाजवण्यासाठी वरील बटण दाबा.",
        play_siren: "सुरक्षा सायरन वाजवा",
        stop_siren: "सुरक्षा सायरन बंद करा",
        sos_toast_title: "संकट संदेश पाठवत आहे...",
        em_contacts_title: "थेट हेल्पलाईन क्रमांक",
        em_amb_title: "वैद्यकीय रुग्णवाहिका",
        em_pol_title: "मेळा सुरक्षा / पोलीस",
        em_ctrl_title: "मेळा नियंत्रण कमान मुख्यालय",
        em_lost_title: "हरवलेले हेल्पलाईन",
        family_search_title: "हरवलेल्या कुटुंबाचा शोध",
        family_search_desc: "हरवलेल्या मध्यवर्ती नोंदणी डेटाबेसमधील नावांचा शोध घ्या (थेट अपडेट).",
        family_search_placeholder: "कुटुंबातील सदस्याचे नाव प्रविष्ट करा...",
        family_found_msg: "रजिस्ट्रीमध्ये मिळालेली नावे:",
        family_not_found: "डेटाबेसमध्ये जुळणारा कोणताही रेकॉर्ड सापडला नाही. हरवलेल्या कक्षाच्या जवळच्या बूथवर (सेक्टर ११) तक्रार करा किंवा १९२० वर कॉल करा.",
        status_reunited: "पुनर्मिलन झाले",
        status_camp: "केयर कॅम्पमध्ये",
        status_transit: "वाटेत आहेत",
        safety_guides_title: "आणीबाणी आणि सुरक्षा मार्गदर्शक",
        guide_1_title: "चेंगराचेंगरी प्रतिबंध आणि सुरक्षा",
        guide_1_content: "१. नेहमी गर्दीच्या प्रवाहाबरोबर जा. उलट दिशेने चालू नका.\n२. श्वास घेण्यासाठी पुरेशी जागा निर्माण करण्यासाठी आपले हात छातीसमोर बॉक्सरसारखे दुमडून ठेवा.\n३. गर्दीत तुमची कोणतीही वस्तू खाली पडल्यास ती उचलण्यासाठी खाली वाकू नका.\n४. तुम्ही खाली पडल्यास, स्वतःला गोळा करा, हातांनी डोके झाकून घ्या आणि छातीचे संरक्षण करा.",
        guide_2_title: "उष्माघात आणि थकवा प्राथमिक उपचार",
        guide_2_content: "१. तहान लागली नसली तरी नियमित पाणी आणि ओआरएस (ORS) प्या.\n२. वळण लागल्यास, डोकेदुखी किंवा जास्त घाम येणे अशा परिस्थितीत लगेच सावलीच्या ठिकाणी जा.\n३. घट्ट कपडे सैल करा आणि त्वचेवर थंड पाणी लावा.\n४. प्रकृती खालावल्यास जवळच्या वैद्यकीय बूथशी संपर्क साधा किंवा १०८ डायल करा।"
    }
};


const transitRoutes = {
    station_pryj: {
        sector1: {
            modeEn: "Free Shuttle Bus (Route 1A)", modeHi: "मुफ्त शटल बस (मार्ग 1A)",
            fareEn: "Free", fareHi: "निःशुल्क",
            timeEn: "15 mins", timeHi: "15 मिनट",
            steps: {
                en: [
                    "Exit from the Civil Lines side (Platform 10) of Prayagraj Junction.",
                    "Board the Mela Special Shuttle Bus (Route 1A) at the terminal bay.",
                    "Ride straight to Mela entry gates at Sector 1."
                ],
                hi: [
                    "प्रयागराज जंक्शन के सिविल लाइंस निकास (प्लेटफॉर्म 10) से बाहर निकलें।",
                    "शटल बस टर्मिनल से मेला स्पेशल शटल बस (मार्ग 1A) पर सवार हों।",
                    "सीधे सेक्टर 1 मेला प्रवेश द्वारों तक यात्रा करें।"
                ],
                bn: ["প্রয়াগরাজ জংশনের সিভিল লাইন্স সাইড (প্ল্যাটফর্ম ১০) থেকে বের হন।", "টার্মিনাল থেকে শটল বাস (রুট ১এ) এ উঠুন।", "সরাসরি সেক্টর ১ মেলা প্রবেশদ্বারে যান।"],
                te: ["ప్రయాగ్‌రాజ్ జంక్షన్ సివిల్ లైన్స్ గేట్ (ప్లాట్‌ఫాం 10) నుండి బయటకు రండి.", "టెర్మినల్ వద్ద ఉన్న మేళా ప్రత్యేక బస్సు (రూట్ 1A) ఎక్కండి.", "సెక్టార్ 1 ప్రవేశ కేంద్రానికి చేరుకోండి."],
                ta: ["பிரயாக்ராஜ் சந்திப்பின் சிவில் லைன்ஸ் நுகர்வோர் வழியே வெளியேறவும்.", "முனையத்தில் உள்ள மேளா சிறப்பு பேருந்தில் ஏறவும்.", "செக்டார் 1 நுழைவு வாயிலுக்குச் செல்லவும்."],
                gu: ["પ્રયાગરાજ જંક્શનના સિવિલ લાઇન્સ નિકાસ (પ્લેટફોર્મ ૧૦) થી બહાર નીકળો.", "મેળા શટલ બસ (માર્ગ ૧A) પર સવાર થાઓ.", "સીધા સેક્ટર ૧ મેળો પ્રવેશદ્વાર પહોંચો."],
                mr: ["प्रयागराज जंक्शनच्या सिव्हिल लाइन्स बाजूने (प्लॅटफॉर्म १०) बाहेर पडा.", "मेळा स्पेशल शटल बस (मार्ग १A) मध्ये बसा.", "थेट सेक्टर १ मेळा प्रवेशद्वारावर उतरा."]
            }
        },
        sector4: {
            modeEn: "E-Rickshaw + Walk", modeHi: "ई-रिक्शा + पैदल",
            fareEn: "₹20", fareHi: "₹20",
            timeEn: "25 mins", timeHi: "25 मिनट",
            steps: {
                en: [
                    "Exit from the City side (Platform 1) of Prayagraj Junction.",
                    "Take a government-approved E-Rickshaw to Pontoon Bridge 2.",
                    "Walk across Pontoon Bridge 2 to enter Sector 4 (Akhara Region)."
                ],
                hi: [
                    "प्रयागराज जंक्शन के सिटी साइड (प्लेटफॉर्म 1) से बाहर निकलें।",
                    "पोंटून पुल 2 के लिए सरकारी स्वीकृत ई-रिक्शा लें।",
                    "सेक्टर 4 (अखाड़ा क्षेत्र) में प्रवेश करने के लिए पोंटून पुल 2 को पैदल पार करें।"
                ],
                bn: ["জংশনের প্ল্যাটফর্ম ১ (সিটি সাইড) থেকে বের হন।", "ই-রিকশা নিয়ে পন্টুন ব্রিজ ২ এ যান।", "সেক্টর ৪ অखाড়া অঞ্চলে যাওয়ার জন্য ব্রিজটি পায়ে হেঁটে পার হন।"],
                te: ["జంక్షన్ సిటీ గేట్ (ప్లాట్‌ఫాం 1) నుండి బయటకు రండి.", "పాంటూన్ వంతెన 2 కి ఈ-రిక్షా తీసుకోండి.", "సెక్టార్ 4 లోనికి నడిచి వెళ్ళండి."],
                ta: ["சந்திப்பின் நகர நுகர்வோர் வழியே வெளியேறவும்.", "மிதவைப்பாலம் 2-க்கு இ-ரிக்ஷா எடுக்கவும்.", "செக்டார் 4-க்குள் நுழைய மிதவைப்பாலத்தை நடந்து கடக்கவும்."],
                gu: ["જંક્શન પ્લેટફોર્મ ૧ (સિટી સાઈડ) થી બહાર નીકળો.", "પોન્ટૂન બ્રિજ ૨ માટે ઈ-રિક્શા મેળવો.", "સેક્ટર ૪ માં પ્રવેશવા બ્રિજ પગપાળા પાર કરો."],
                mr: ["जंक्शनच्या प्लॅटफॉर्म १ (सिटी बाजू) वरून बाहेर पडा.", "पाँटून पूल २ साठी ई-रिक्षा घ्या.", "सेक्टर ४ मध्ये जाण्यासाठी पाँटून पूल पैदल ओलांडा."]
            }
        }
    },
    station_sfg: {
        sector1: {
            modeEn: "Free Shuttle Bus (Route 4B)", modeHi: "मुफ्त शटल बस (मार्ग 4B)",
            fareEn: "Free", fareHi: "निःशुल्क",
            timeEn: "20 mins", timeHi: "20 मिनट",
            steps: {
                en: [
                    "Exit Subedarganj station platform and head to Mela bus bay.",
                    "Board Mela Shuttle 4B towards Sector 1.",
                    "De-board at Mela Admin block, Sector 1."
                ],
                hi: [
                    "सूबेदारगंज स्टेशन से बाहर निकलें और बस बे की ओर बढ़ें।",
                    "सेक्टर 1 की ओर जाने वाली मेला शटल 4B पर सवार हों।",
                    "सेक्टर 1 मेला प्रशासनिक ब्लॉक पर उतरें।"
                ],
                bn: ["স্টেশন থেকে বের হয়ে মেলা বাস বে-র দিকে যান।", "সেক্টর ১ শটলে উঠুন।", "সেক্টর ১ মেলা গেটে উতরান।"],
                te: ["స్టేషన్ నుండి బస్సు బే కి వెళ్ళండి.", "సెక్టార్ 1 షటిల్ బస్సు ఎక్కండి.", "సెక్టార్ 1 అడ్మిన్ బ్లాక్ వద్ద దిగండి."],
                ta: ["நிலையத்திலிருந்து பேருந்து நிறுத்தத்திற்குச் செல்லவும்.", "செக்டார் 1 ஷட்டில் பேருந்தில் ஏறவும்.", "செக்டார் 1 நிர்வாக மையத்தில் இறங்கவும்."],
                gu: ["સ્ટેશનથી બહાર આવી બસ બે તરફ જાઓ.", "સેક્ટર ૧ ની શટલ બસ પકડો.", "સેક્ટર ૧ વહીવટી બિલ્ડીંગ પાસે ઉતરો."],
                mr: ["स्टेशनमधून बाहेर पडून बस स्थानकाकडे जा.", "सेक्टर १ शटल बसमध्ये बसा.", "सेक्टर १ प्रशासन केंद्रावर उतरा."]
            }
        }
    },
    airport_ixd: {
        sector1: {
            modeEn: "Prepaid Taxi", modeHi: "प्रीपेड टैक्सी",
            fareEn: "₹350 - ₹450", fareHi: "₹350 - ₹450",
            timeEn: "40 mins", timeHi: "40 मिनट",
            steps: {
                en: [
                    "Book a government prepaid taxi at the airport terminal arrival counter.",
                    "Travel via Airport Road and GT road straight to Sector 1 parking limit.",
                    "Private taxis are allowed up to Sector 1 outer checkpoint. Walk 200m inside."
                ],
                hi: [
                    "हवाई अड्डे के टर्मिनल आगमन काउंटर पर सरकारी प्रीपेड टैक्सी बुक करें।",
                    "हवाई अड्डा मार्ग और जीटी रोड से होते हुए सीधे सेक्टर 1 पार्किंग सीमा तक यात्रा करें।",
                    "निजी टैक्सियों को सेक्टर 1 बाहरी चेकपोस्ट तक अनुमति है। वहां से 200 मीटर पैदल चलें।"
                ],
                bn: ["বিমানবন্দরের কাউন্টার থেকে প্রিপেইড ট্যাক্সি বুক করুন।", "সেক্টর ১ পার্কিং সীমা পর্যন্ত ভ্রমণ করুন।", "চেকপোস্ট থেকে ২০০ মিটার হেঁটে ভেতরে যান।"],
                te: ["ఎయిర్‌పోర్ట్ కౌంటర్ వద్ద ప్రిపైడ్ టాక్సీ బుక్ చేయండి.", "సెక్టార్ 1 పార్కింగ్ పరిమితి వరకు ప్రయాణించండి.", "చెక్‌పాయింట్ నుండి 200 మీటర్లు నడవండి."],
                ta: ["விமான நிலைய முனையத்தில் முன்கூட்டியே கட்டணம் செலுத்திய டாக்ஸியை பதிவு செய்யவும்.", "செக்டார் 1 எல்லை வரை செல்லவும்.", "சோதனைச் சாவடியிலிருந்து 200மீ நடந்து செல்லவும்."],
                gu: ["એરપોર્ટ ટર્મિનલ કાઉન્ટર પર પ્રીપેડ ટેક્સી બુક કરો.", "સેક્ટર ૧ પાર્કિંગ સીમા સુધી મુસાફરી કરો.", "ચેકપોસ્ટથી ૨૦૦ મીટર પગપાળા ચાલો."],
                mr: ["विमानतळ काउंटरवर प्रीपेड टॅक्सी बुक करा.", "सेक्टर १ पार्किंग मर्यादेपर्यंत प्रवास करा.", "चेकपोस्टवरून २०० मीटर पैदल पुढे जा."]
            }
        }
    },
    airport_vns: {
        sector1: {
            modeEn: "Intercity Cab / Train", modeHi: "इंटरसिटी कैब / ट्रेन",
            fareEn: "₹250 - ₹1200", fareHi: "₹250 - ₹1200",
            timeEn: "2.5 hours", timeHi: "2.5 घंटे",
            steps: {
                en: [
                    "Take a local cab from Varanasi Airport (VNS) to Varanasi Junction Station, or book a direct highway taxi to Prayagraj.",
                    "Board any Prayagraj bound express train (e.g., Sarnath Express) or travel via NH-19 highway.",
                    "Once in Prayagraj, take Mela Shuttle bus from outer cordons to Sector 1."
                ],
                hi: [
                    "वाराणसी हवाई अड्डे (VNS) से वाराणसी जंक्शन के लिए कैब लें, या सीधे प्रयागराज के लिए टैक्सी बुक करें।",
                    "प्रयागराज जाने वाली किसी भी एक्सप्रेस ट्रेन में सवार हों या राष्ट्रीय राजमार्ग 19 से यात्रा करें।",
                    "प्रयागराज पहुँचने पर, बाहरी नाकों से सेक्टर 1 के लिए मेला शटल बस लें।"
                ],
                bn: ["বারাণসী বিমানবন্দর থেকে বারাণসী জংশনে যান বা সরাসরি ট্যাক্সি নিন।", "প্রয়াগরাজগামী এক্সপ্রেসে উঠুন অথবা মহাসড়ক দিয়ে যান।", "প্রয়াগরাজে পৌঁছে মেলা শটল বাস নিন।"],
                te: ["వారణాసి విమానాశ్రయం నుండి వారణాసి జంక్షన్ కి వెళ్ళండి లేదా నేరుగా టాక్సీ తీసుకోండి.", "ప్రయాగ్‌రాజ్ ఎక్స్‌ప్రెస్ ట్రైన్ లేదా రోడ్డు మార్గం ద్వారా వెళ్ళండి.", "ప్రయాగ్‌రాజ్ చేరిన తర్వాత సెక్టార్ 1 శటిల్ బస్సు ఎక్కండి."],
                ta: ["வாரணாசி விமான நிலையத்திலிருந்து வாரணாசி சந்திப்பிற்கு டாக்ஸி அல்லது நேரடி டாக்ஸி எடுக்கவும்.", "பிரயாக்ராஜ் எக்ஸ்பிரஸ் இரயில் அல்லது சாலை மார்க்கமாக செல்லவும்.", "பிரயாக்ராஜ் வந்ததும் செக்டார் 1 ஷட்டில் பேருந்தில் ஏறவும்."],
                gu: ["વારાણસી એરપોર્ટથી વારાણસી જંક્શન માટે ટેક્સી લો.", "પ્રયાગરાજ એક્સપ્રેસ ટ્રેન કે હાઇવે દ્વારા મુસાફરી કરો.", "પ્રયાગરાજ પહોંચી સેક્ટર ૧ ની શટલ બસ પકડો."],
                mr: ["वाराणसी विमानतळावरून वाराणसी जंक्शनसाठी टॅक्सी घ्या.", "प्रयागराज एक्सप्रेस ट्रेन किंवा महामार्गाद्वारे प्रवास करा.", "प्रयागराज येथे पोहोचल्यावर सेक्टर १ साठी शटल बस घ्या."]
            }
        }
    },
    parking_jhunsi: {
        sector11: {
            modeEn: "Free Shuttle Bus (Route 2B)", modeHi: "मुफ्त शटल बस (मार्ग 2B)",
            fareEn: "Free", fareHi: "निःशुल्क",
            timeEn: "15 mins", timeHi: "15 मिनट",
            steps: {
                en: [
                    "Park your vehicle at the designated Jhunsi Mela Outer Parking.",
                    "Walk to Shuttle Bus Terminal Bay 4.",
                    "Board Shuttle bus Route 2B directly to Sector 11 gates."
                ],
                hi: [
                    "झूंसी मेला बाहरी पार्किंग स्थल पर अपना वाहन पार्क करें।",
                    "शटल बस टर्मिनल बे 4 पर पैदल जाएं।",
                    "शटल बस मार्ग 2B से सीधे सेक्टर 11 गेट पर पहुंचें।"
                ],
                bn: ["ঝুঁসি মেলার বাইরের পার্কিংয়ে গাড়ি পার্ক করুন।", "শটল বাস বে ৪ এ যান।", "সেক্টর ১১ গেটে যাওয়ার জন্য শটল বাস ২বি এ উঠুন।"],
                te: ["ఝున్సీ ఔటర్ పార్కింగ్ లో మీ వాహనాన్ని పార్క్ చేయండి.", "షటిల్ బస్ బే 4 కి నడిచి వెళ్ళండి.", "రూట్ 2B బస్సు ఎక్కి సెక్టార్ 11 కి వెళ్ళండి."],
                ta: ["ஜூசி வெளி வாகன நிறுத்தத்தில் வாகனத்தை நிறுத்தவும்.", "பேருந்து முனையம் 4-க்கு நடந்து செல்லவும்.", "வழித்தடம் 2B பேருந்தில் ஏறி செக்டார் 11-க்குச் செல்லவும்."],
                gu: ["ઝૂંસી મેળા પાર્કિંગમાં તમારું વાહન પાર્ક કરો.", "બસ બે ૪ તરફ ચાલો.", "સેક્ટર ૧૧ ના શટલ ૨B બસ પકડો."],
                mr: ["झुंसी पार्किंग जागेत आपले वाहन पार्क करा.", "बस स्थानक बे ४ कडे जा.", "सेक्टर ११ शटल बस २B मध्ये बसा."]
            }
        }
    }
};

const snanEvents = [
    {
        id: "paush_purnima",
        date: "2028-01-10",
        day: "10",
        month: "Jan",
        nameKey: "Paush Purnima",
        nameHindi: "पौष पूर्णिमा",
        nameBengali: "পৌষ পূর্ণিমা",
        nameTelugu: "పౌష పూర్ణిమ",
        nameTamil: "பௌஷ பூர்ணிமா",
        nameGujarati: "પોષ પૂર્ણિમા",
        nameMarathi: "पौष पौर्णिमा",
        tithiKey: "Auspicious Snan (Holy Commencement)",
        tithiHindi: "शुभ स्नान (मेले का शुभारंभ)",
        tithiBengali: "শুভ স্নান (মেলার সূচনা)",
        tithiTelugu: "శుభ స్నానం (మేళా ప్రారంభం)",
        tithiTamil: "புனித நீராடல் (மேளா தொடக்கம்)",
        tithiGujarati: "શુભ સ્નાન (મેળાનો શુભારંભ)",
        tithiMarathi: "शुभ स्नान (मेळाव्याची सुरुवात)",
        isShahi: false,
        guidelinesKey: "Auspicious hour: 05:40 AM - 11:20 AM. High crowd expected at VIP Ghat. Follow sector 3 entry route.",
        guidelinesHindi: "शुभ मुहूर्त: सुबह 05:40 - 11:20 बजे। वीआईपी घाट पर भीड़ की संभावना। सेक्टर 3 प्रवेश मार्ग का पालन करें।",
        guidelinesBengali: "শুভ সময়: সকাল ০৫:৪০ - ১১:২০ মিনিট। ভিআইপি ঘাটে ভিড়ের সম্ভাবনা। সেক্টর ৩ প্রবেশ পথ অনুসরণ করুন।",
        guidelinesTelugu: "శుభ సమయం: ఉదయం 05:40 - 11:20. VIP ఘాట్ వద్ద రద్దీ ఎక్కువ. సెక్టార్ 3 ప్రవేశ మార్గాన్ని అనుసరించండి.",
        guidelinesTamil: "நல்ல நேரம்: காலை 05:40 - 11:20. VIP ঘাட்டில் கூட்டம் அதிகம் இருக்கும். செக்டார் 3 வழியைப் பின்பற்றவும்.",
        guidelinesGujarati: "શુભ મુહૂર્ત: સવારે ૦૫:૪૦ - ૧૧:૨૦ વાગ્યે. VIP ઘાટ પર વધુ ભીડની સંભાવના. સેક્ટર ૩ પ્રવેશ માર્ગનો ઉપયોગ કરો.",
        guidelinesMarathi: "शुभ मुहूर्त: सकाळी ०५:৪০ - ११:२० वाजता. व्हीआयपी घाटावर गर्दीची शक्यता. सेक्टर ३ प्रवेश मार्गाचा वापर करा।"
    },
    {
        id: "makar_sankranti",
        date: "2028-01-14",
        day: "14",
        month: "Jan",
        nameKey: "Makar Sankranti (First Shahi Snan)",
        nameHindi: "मकर संक्रांति (प्रथम शाही स्नान)",
        nameBengali: "মকর সংক্রান্তি (প্রথম শাহি স্নান)",
        nameTelugu: "మకర సంక్రాంతి (మొదటి షాహీ స్నానం)",
        nameTamil: "மகர சங்கராந்தி (முதல் ஷாஹி ஸ்நானம்)",
        nameGujarati: "મકર સંક્રાંતિ (પ્રથમ શાહી સ્નાન)",
        nameMarathi: "मकर संक्रांत (प्रथम शाही स्नान)",
        tithiKey: "Shahi Snan (Auspicious Solar Entry)",
        tithiHindi: "शाही स्नान (उत्तरायण महायोग)",
        tithiBengali: "শাহি স্নান (উত্তরায়ণ মহাযোগ)",
        tithiTelugu: "షాహీ స్నానం (ఉత్తరాయణ పుణ్యకాలం)",
        tithiTamil: "ஷாஹி ஸ்நானம் (உத்தராயண புண்ணியகாலம்)",
        tithiGujarati: "શાહી સ્નાન (ઉત્તરાયણ મહાયોગ)",
        tithiMarathi: "शाही स्नान (उत्तरायण महायोग)",
        isShahi: true,
        guidelinesKey: "Auspicious hour: All day (Main hours: 04:00 AM - 02:00 PM). Pontoon bridges will be one-way.",
        guidelinesHindi: "शुभ मुहूर्त: पूरे दिन (मुख्य समय: सुबह 04:00 - दोपहर 02:00 बजे)। पोंटून पुलों पर एकतरफा मार्ग रहेगा।",
        guidelinesBengali: "শুভ সময়: সারাদিন (প্রধান সময়: ভোর ০৪:০০ - দুপুর ০২:০০ টা)। পন্টুন সেতুগুলিতে কেবল একমুখী যাতায়াত থাকবে।",
        guidelinesTelugu: "శుభ సమయం: రోజంతా (ముఖ్య సమయం: ఉదయం 04:00 - మధ్యాహ్నం 02:00). పాంటూన్ వంతెనలపై వన్-వే మాత్రమే ఉంటుంది.",
        guidelinesTamil: "நல்ல நேரம்: நாள் முழுவதும் (முக்கிய நேரம்: காலை 04:00 - பிற்பகல் 02:00). மிதவைப் பாலங்கள் ஒருவழியாக இருக்கும்.",
        guidelinesGujarati: "શુભ મુહૂર્ત: આખો દિવસ (મુખ્ય સમય: સવારે ૦૪:૦૦ - બપોરે ૦૨:૦૦ વાગ્યે). પોન્ટૂન પુલ પર એકતરફી માર્ગ રહેશે.",
        guidelinesMarathi: "शुभ मुहूर्त: पूर्ण दिवस (मुख्य वेळ: सकाळी ०४:०० - दुपारी ०२:०० वाजेपर्यंत). पाँटून पुलांवर एकतर्फी वाहतूक राहील।"
    },
    {
        id: "mauni_amavasya",
        date: "2028-01-25",
        day: "25",
        month: "Jan",
        nameKey: "Mauni Amavasya (Main Shahi Snan)",
        nameHindi: "मौनी अमावस्या (मुख्य शाही स्नान)",
        nameBengali: "মৌনী অমাবস্যা (প্রধান শাহি স্নান)",
        nameTelugu: "మౌని అమావాస్య (ప్రధాన షాహీ స్నానం)",
        nameTamil: "மௌனி அமாவாசை (முக்கிய ஷாஹி ஸ்நானம்)",
        nameGujarati: "મૌની અમાસ (મુખ્ય શાહી સ્નાન)",
        nameMarathi: "मौनी अमावस्या (मुख्य शाही स्नान)",
        tithiKey: "Supreme Shahi Snan (Royal Confluence)",
        tithiHindi: "परम शाही स्नान (अमृत योग)",
        tithiBengali: "সর্বোচ্চ শাহি স্নান (অমৃত যোগ)",
        tithiTelugu: "అత్యున్నత షాహీ స్నానం (అమృత యోగం)",
        tithiTamil: "உன்னத ஷாஹि ஸ்நானம் (அமிர்த யோகம்)",
        tithiGujarati: "પરમ શાહી સ્નાન (અમૃત યોગ)",
        tithiMarathi: "परम शाही स्नान (अमृत योग)",
        isShahi: true,
        guidelinesKey: "Auspicious hour: 03:00 AM - 06:00 PM. Maximum crowd warning! Walk-only zones activated for 5km radius.",
        guidelinesHindi: "शुभ मुहूर्त: सुबह 03:00 - शाम 06:00 बजे। अत्यधिक भीड़ की चेतावनी! 5 किमी के दायरे में केवल पैदल क्षेत्र सक्रिय।",
        guidelinesBengali: "শুভ সময়: ভোর ০৩:০০ - সন্ধ্যা ০৬:০০ টা। চরম ভিড়ের সতর্কতা! ৫ কিমি ব্যাসার্ধে কেবল হেঁটে চলার জোন সক্রিয় থাকবে।",
        guidelinesTelugu: "శుభ సమయం: ఉదయం 03:00 - సాయంత్రం 06:00. భారీ రద్దీ హెచ్చరిక! 5 కిలోమీటర్ల పరిధిలో వాహనాలు నిషేధించబడ్డాయి.",
        guidelinesTamil: "நல்ல நேரம்: காலை 03:00 - மாலை 06:00. மிக அதிக கூட்ட நெரிசல் எச்சரிக்கை! 5 கிமீ சுற்றளவில் வாகனங்களுக்குத் தடை.",
        guidelinesGujarati: "શુભ મુહૂર્ત: સવારે ૦૩:૦૦ - સાંજે ૦૬:૦૦ વાગ્યે. ભારે ભીડની ચેતવણી! ૫ કિમી ત્રિજ્યામાં માત્ર પગપાળા ઝોન રહેશે.",
        guidelinesMarathi: "शुभ मुहूर्त: सकाळी ०३:०० - संध्याकाळी ०६:०० वाजेपर्यंत. प्रचंड गर्दीचा इशारा! ५ किमी परिसरात वाहनांना बंदी।"
    }
];

const amenitiesList = [
    {
        id: "stay_dorm",
        category: "tent",
        titleEn: "Akhara Parishad Free Pilgrim Dormitory",
        titleHi: "अखाड़ा परिषद निःशुल्क तीर्थयात्री धर्मशाला",
        titleBn: "আখড়া পরিষদ বিনামূল্যে তীর্থযাত্রী ধর্মশাலா",
        titleTe: "అఖారా పరిషత్ ఉచిత యాత్రికుల ధర్మశాల",
        titleTa: "அகாரா பரிஷத் இலவச யாத்ரீகர் தங்குமிடம்",
        titleGu: "અખાડા પરિષદ મફત યાત્રાળુ ધર્મશાળા",
        titleMr: "अखाडा परिषद मोफत भाविक धर्मशाळा",
        sector: 4,
        distance: "0.1 km",
        descEn: "Free accommodation, community sleeping halls, blankets, clean drinking water, and common toilets. Open to all pilgrims.",
        descHi: "निःशुल्क आवास, सामुदायिक शयन कक्ष, कंबल, स्वच्छ पेयजल और शौचालय। सभी तीर्थयात्रियों के लिए उपलब्ध।",
        descBn: "বিনামূল্যে থাকার জায়গা, কম্বল, পরিষ্কার পানীয় জল এবং শৌচাগার। সমস্ত তীর্থযাত্রীদের জন্য উন্মুক্ত।",
        descTe: "ఉచిత వసతి, కమ్యూనిటీ నిద్ర శాలలు, దుప్పట్లు, తాగునీరు మరియు మరుగుదొడ్లు. యాత్రికులందరికీ ప్రవేశం ఉంది.",
        descTa: "இலவச தங்குமிடம், போர்வைகள், குடிநீர் மற்றும் கழிப்பறை வசதி. அனைத்து யாத்ரீகர்களுக்கும் அனுமதி உண்டு.",
        descGu: "મફત રહેવાની વ્યવસ્થા, ધાબળા, ચોખ્ખું પીવાનું પાણી અને શૌચાલયો. બધા યાત્રાળુઓ માટે ખુલ્લું.",
        descMr: "मोफत राहण्याची सोय, घोंगड्या, पिण्याचे पाणी व सामूहिक स्वच्छतागृहांची सोय. सर्व भाविकांसाठी मोफत सोय।",
        phone: "1920",
        mapPinId: "sector-4"
    },
    {
        id: "stay_swiss",
        category: "tent",
        titleEn: "Triveni Luxury Swiss Tent City",
        titleHi: "त्रिवेणी लक्जरी स्विस टेंट सिटी",
        titleBn: "ত্রিবেনি লাক্সারি সুইস টেন্ট সিটি",
        titleTe: "త్రివేణి లగ్జరీ స్విస్ టెంట్ సిటీ",
        titleTa: "திரிவேணி சொகுசு சுவிஸ் கூடார நகரம்",
        titleGu: "ત્રિવેણી લક્ઝરી સ્વિસ ટેન્ટ સિટી",
        titleMr: "त्रिवेणी लक्झरी स्विस टेंट सिटी",
        sector: 11,
        distance: "1.2 km",
        descEn: "Paid luxury accommodation with attached bathrooms, room heaters, Wi-Fi, and vegetarian buffet meals. Prior booking required.",
        descHi: "सशुल्क लक्जरी स्विस टेंट, निजी बाथरूम, हीटर, वाई-फाई और शाकाहारी भोजन। पहले से बुकिंग अनिवार्य है।",
        descBn: "সशुल्क লাক্সারি তাবু, বাথরুম, হিটার, ওয়াই-ফাই এবং নিরামিষ খাবার। অগ্রিম বুকিং বাধ্যতামূলক।",
        descTe: "చెల్లింపు లగ్జరీ స్విస్ టెంట్లు, అటాచ్డ్ బాత్రూమ్, హీటర్, Wi-Fi మరియు శాకాహార భోజనం. ముందస్తు బుకింగ్ అవసరం.",
        descTa: "கட்டண சொகுசு சுவிஸ் கூடாரங்கள், தனியறை கழிப்பறை, வைஃபை மற்றும் சைவ உணவு வசதி. முன்பதிவு அவசியம்.",
        descGu: "સશુલ્ક લક્ઝરી સ્વિસ ટેન્ટ, પ્રાઇવેટ બાથરૂમ, હીટર, વાઇ-ફાઇ અને ભોજન. અગાઉથી બુકિંગ કરાવવું જરૂરી.",
        descMr: "सशुल्क लक्झरी स्विस टेंट, खाजगी प्रसाधनगृह, रूम हिटर, वाय-फाय आणि जेवण सोय. पूर्व आरक्षित करणे गरजेचे।",
        phone: "+91-532-2430511",
        mapPinId: "sector-11"
    },
    {
        id: "food_1",
        category: "food",
        titleEn: "Geeta Bhawan Bhandara (Free Meals)",
        titleHi: "गीता भवन भंडारा (निःशुल्क भोजन)",
        titleBn: "গীতা ভবন ভণ্ডারা (বিনামূল্যে খাবার)",
        titleTe: "గీతా భవన్ భండారా (ఉచిత భోజనం)",
        titleTa: "கீதா பவன் பண்டாரா (இலவச உணவு)",
        titleGu: "ગીતા ભવન ભંડારા (મફત ભોજન)",
        titleMr: "गीता भवन भंडारा (मोफत भोजन)",
        sector: 6,
        distance: "0.8 km",
        descEn: "Sattvik lunch and dinner served continuously for all pilgrims without charge.",
        descHi: "सभी तीर्थयात्रियों के लिए लगातार निःशुल्क सात्विक दोपहर और रात का भोजन।",
        descBn: "সমস্ত তীর্থযাত্রীদের জন্য নিখরচায় সাত্বিক দুপুরের ও রাতের খাবার।",
        descTe: "యాత్రికులందరికీ ఉచితంగా సాత్విక భోజనం మరియు రాత్రి భోజనం నిరంతరంగా అందించబడుతుంది.",
        descTa: "அனைத்து யாத்ரீகர்களுக்கும் தொடர்ந்து இலவச சாத்வீக மதிய உணவு மற்றும் இரவு உணவு வழங்கப்படுகிறது.",
        descGu: "બધા યાત્રાળુઓ માટે સતત મફત સાત્વિક બપોરનું અને સાંજનું ભોજન.",
        descMr: "सर्व भाविकांसाठी मोफत सात्त्विक जेवण व रात्रीचे जेवण निरंतर सेवा.",
        phone: "+91-532-2430006",
        mapPinId: "sector-4"
    },
    {
        id: "medical_1",
        category: "medical",
        titleEn: "Red Cross Emergency Post 3",
        titleHi: "रेड क्रॉस आपातकालीन पोस्ट 3",
        titleBn: "রেড ক্রস জরুরি পোস্ট ৩",
        titleTe: "రెడ్ క్రాస్ అత్యవసర పోస్ట్ 3",
        titleTa: "ரெட் கிராஸ் அவசர சிகிச்சை மையம் 3",
        titleGu: "રેડ ક્રોસ ઈમરજન્સી પોસ્ટ ૩",
        titleMr: "रेड क्रॉस आणीबाणी पोस्ट ३",
        sector: 4,
        distance: "0.1 km",
        descEn: "24/7 first aid, primary health check, ambulance support, and emergency medicines.",
        descHi: "24/7 प्राथमिक उपचार, प्राथमिक स्वास्थ्य जांच, एम्बुलेंस सहायता और आपातकालीन दवाएं।",
        descBn: "২৪/৭ প্রাথমিক চিকিৎসা, প্রাথমিক স্বাস্থ্য পরীক্ষা, অ্যাম্বুলেন্স সহায়তা এবং জরুরি ওষুধ।",
        descTe: "24/7 ప్రథమ చికిత్స, ప్రాథమిక ఆరోగ్య పరీక్షలు, అంబులెన్స్ సదుపాయం మరియు అత్యవసర మందులు.",
        descTa: "24/7 முதலுதவி, ஆரம்ப சுகாதார பரிசோதனை, ஆம்புலன்ஸ் வசதி மற்றும் அவசர மருந்துகள்.",
        descGu: "૨૪/૭ પ્રાથમિક સારવાર, પ્રાથમિક આરોગ્ય તપાસ, એમ્બ્યુલન્સ સેવા અને ઈમરજન્સી દવાઓ.",
        descMr: "२४/७ प्रथमोपचार, प्राथमिक आरोग्य तपासणी, रुग्णवाहिका सेवा आणि आणीबाणीची औषधे.",
        phone: "108",
        mapPinId: "pin-medical"
    }
];

const routeDatabase = {
    "sector4_sangam": {
        d: "M 280,125 L 280,250 L 410,270 L 580,400",
        distance: "1.2 km",
        time: "15 mins",
        crossings: "1 Bridge (Bridge 2)"
    },
    "sector4_vip_ghat": {
        d: "M 280,125 L 280,250 L 410,270",
        distance: "0.7 km",
        time: "9 mins",
        crossings: "1 Bridge (Bridge 1)"
    },
    "sector4_qila_ghat": {
        d: "M 280,125 L 100,95 L 110,290 L 200,480",
        distance: "2.4 km",
        time: "30 mins",
        crossings: "0 Bridges"
    },
    "sector4_medical": {
        d: "M 280,125 L 475,110 L 490,115",
        distance: "1.0 km",
        time: "12 mins",
        crossings: "0 Bridges"
    },
    "sector4_lost_found": {
        d: "M 280,125 L 475,110 L 680,115",
        distance: "2.0 km",
        time: "25 mins",
        crossings: "0 Bridges"
    },
    "sector4_temple": {
        d: "M 280,125 L 280,250 L 410,270 L 340,380",
        distance: "1.1 km",
        time: "14 mins",
        crossings: "1 Bridge"
    }
};

const chatbotDatabase = {
    en: [
        { keys: ["stay", "accommodation", "tent", "ashram", "hotel", "dormitory", "sleep"], response: "Accommodations available:\n1. Akhara Parishad Free Dormitories: Located in Sector 4. Free, includes blankets & water.\n2. Triveni Luxury Swiss Tents: Located in Sector 11. Attached baths, buffet meals (₹4500 - ₹9500/night).\n3. Parmarth Niketan Ashram: Located in Sector 4. Simple rooms & yoga (₹500 - ₹1500/night).\nCheck the 'Services' tab to view details and booking options!" },
        { keys: ["reach", "go to", "travel", "flight", "train", "bus", "parking", "junction"], response: "To reach the Mela from City Hubs:\n- From Prayagraj Junction (PRYJ): Take Mela Free Shuttle Bus Route 1A from the Civil Lines exit side directly to Sector 1 Mela entrance.\n- From airports or outer parking lots: Check the 'Navigator' tab and switch to 'City Connectivity' sub-tab for step-by-step travel planning!" },
        { keys: ["bathing", "snan", "date", "calendar", "shahi"], response: "The key Bathing (Snan) dates are:\n1. Paush Purnima: Jan 10, 2028\n2. Makar Sankranti (1st Shahi Snan): Jan 14, 2028\n3. Mauni Amavasya (Main bathing day): Jan 25, 2028\nCheck the 'Calendar' tab below to view tithis and specific guidelines." }
    ],
    hi: [
        { keys: ["रहने", "आवास", "टेंट", "धर्मशाला", "होटल", "रुकने"], response: "मेला क्षेत्र में रहने की व्यवस्था:\n1. अखाड़ा परिषद निःशुल्क धर्मशाला: सेक्टर 4 में। निःशुल्क कंबल, बिस्तर और जल की व्यवस्था।\n2. त्रिवेणी स्विस टेंट सिटी: सेक्टर 11 में। प्राइवेट बाथरूम और भोजन की सशुल्क व्यवस्था (₹4500 - ₹9500/रात)।\n3. परमार्थ निकेतन आश्रम: सेक्टर 4 में। सादे कमरे और योगाभ्यास (₹500 - ₹1500/रात)।\nविवरण देखने के लिए नीचे 'सेवाएं' टैब देखें।" },
        { keys: ["पहुंचने", "रास्ता", "ट्रेन", "फ्लाइट", "बस", "जंक्शन"], response: "शहर से मेले तक पहुँचने के लिए:\n- प्रयागराज जंक्शन से: सिविल लाइंस निकास से मेला स्पेशल मुफ्त शटल बस मार्ग 1A लें जो सीधे सेक्टर 1 मेला गेट तक जाती है।\n- अन्य स्टेशनों या हवाई अड्डों से: 'मार्गदर्शक' टैब पर जाएं और 'शहर दळणवळण' उप-टैब देखें।" },
        { keys: ["स्नान", "नहाने", "तारीख", "कैलेंडर", "शाही"], response: "शाही स्नान की मुख्य तिथियां:\n1. पौष पूर्णिमा: 10 जनवरी\n2. मकर संक्रांति: 14 जनवरी\n3. मौनी अमावस्या: 25 जनवरी\nविवरण कैलेंडर टैब में देखें।" }
    ],
    bn: [
        { keys: ["থাকার", "আবাসন", "তাবু", "ধর্মশালা", "হোটেল", "রুম"], response: "মেলায় থাকার ব্যবস্থা:\n১. আখড়া পরিষদ বিনামূল্যে ধর্মশালা: সেক্টর ৪ এ অবস্থিত। বিনামূল্যে কম্বল ও জল দেওয়া হয়।\n২. ত্রিবেনি সুইস টেন্ট সিটি: সেক্টর ১১ তে অবস্থিত। প্রিমিয়াম তাবু ও খাবার সুবিধা (₹৪৫০০ - ₹৯৫০০/রাত)।\n৩. পরমার্থ নিকেতন আশ্রম: সেক্টর ৪ এ অবস্থিত (₹৫০০ - ₹১৫০০/রাত)।\nবিস্তারিত জানতে 'Services' ট্যাব দেখুন।" },
        { keys: ["পৌঁছানো", "রুট", "ট্রেন", "বাস", "বিমানবন্দর", "স্টেশন"], response: "শহর থেকে মেলায় আসার পথ:\n- প্রয়াগরাজ জংশন (PRYJ) থেকে সিভিল লাইন্স নिकास হয়ে মেলা ফ্রি শটল বাস ১এ নিয়ে সরাসরি সেক্টর ১ মেলা গেটে আসুন।\n- অন্যান্য রুটের জন্য 'Navigator' ট্যাব থেকে 'City Connectivity' রুট প্ল্যান করুন!" }
    ],
    te: [
        { keys: ["వసతి", "ఉండడానికి", "టెంట్", "ధర్మశాల", "హోటల్", "గది"], response: "మేళాలో వసతి సౌకర్యాలు:\n1. అఖారా పరిషత్ ఉచిత యాత్రికుల ధర్మశాల: సెక్టార్ 4 లో ఉంది. ఉచిత దుప్పట్లు & నీటి సౌకర్యం.\n2. త్రివేణి లగ్జరీ స్విస్ టెంట్లు: సెక్టార్ 11 లో ఉంది (ధర ₹4500 - ₹9500/రాత్రి).\n3. పరమార్థ నికేతన్ ఆశ్రమం: సెక్టార్ 4 లో ఉంది (ధర ₹500 - ₹1500/రాత్రి).\nమరిన్ని వివరాలకు 'Services' ట్యాబ్ చూడండి!" },
        { keys: ["ఎలా రావాలి", "మార్గం", "ట్రైన్", "బస్సు", "ఎయిర్పోర్ట్", "స్టేషన్"], response: "నగరం నుండి మేళాకు చేరుకోవడానికి:\n- ప్రయాగ్‌రాజ్ జంక్షన్ (PRYJ) నుండి సివిల్ లైన్స్ గేట్ ద్వారా బయటకు వచ్చి ఉచిత ప్రభుత్వ షటిల్ బస్సు 1A ఎక్కి సెక్టార్ 1 కి చేరండి.\n- ఇతర వివరాలకు 'Navigator' లో 'City Connectivity' చూడండి." }
    ],
    ta: [
        { keys: ["தங்குமிடம்", "தங்குவதற்கு", "கூடாரம்", "விடுதி", "அறை"], response: "மேளாவில் தங்கும் வசதிகள்:\n1. அகாரா பரிஷத் இலவச யாத்ரீகர் தங்குமிடம்: செக்டார் 4-ல் உள்ளது. இலவச போர்வைகள் & குடிநீர்.\n2. திரிவேணி சொகுசு சுவிஸ் கூடாரங்கள்: செக்டார் 11-ல் உள்ளது (கட்டணம் ₹4500 - ₹9500/இரவு).\n3. பரமார்த்த நிகேதன் ஆசிரமம்: செக்டார் 4-ல் உள்ளது (கட்டணம் ₹500 - ₹1500/இரவு).\nவிவரங்களுக்கு 'Services' பகுதிக்குச் செல்லவும்." },
        { keys: ["வழி", "வருவது எப்படி", "இரயில்", "பேருந்து", "விமான நிலையம்"], response: "நகரத்திலிருந்து மேளாவுக்கு வர:\n- பிரயாக்ராஜ் சந்திப்பிலிருந்து (PRYJ) சிவில் லைன்ஸ் வழியாக வெளியேறி இலவச அரசு பேருந்து 1A மூலம் செக்டார் 1-ஐ அடையலாம்.\n- கூடுதல் விபரங்களுக்கு 'Navigator' பகுதி பார்க்கவும்." }
    ],
    gu: [
        { keys: ["રોકાણ", "આવાસ", "ટેન્ટ", "ધર્મશાળા", "હોટેલ", "રૂમ"], response: "મેળામાં રોકાવાની સુવિધાઓ:\n1. અખાડા પરિષદ મફત ધર્મશાળા: સેક્ટર ૪ માં આવેલ છે. ધાબળા અને પાણીની મફત સુવિધા.\n2. ત્રિવેણી લક્ઝરી ટેન્ટ સિટી: સેક્ટર ૧૧ માં (ભાડું ₹૪૫૦૦ - ₹૯૫૦૦/રાત).\n3. પરમાર્થ નિકેતન આશ્રમ: સેક્ટર ૪ માં (ભાડું ₹૫૦૦ - ₹૧૫૦૦/રાત).\nવિગતો માટે 'Services' ટેબ જુઓ." },
        { keys: ["પહોંચવું", "ટ્રેન", "બસ", "એરપોર્ટ", "સ્ટેશન", "રસ્તો"], response: "શહેરથી મેળામાં પહોંચવા માટે:\n- પ્રયાગરાજ જંક્શન (PRYJ) ના સિવિલ લાઈન્સ બહારથી મફત સરકારી બસ ૧A પકડી સેક્ટર ૧ મેળો ગેટ પહોંચો.\n- અન્ય રૂટ માટે 'Navigator' માં 'City Connectivity' જુઓ." }
    ],
    mr: [
        { keys: ["राहण्याची", "निवास", "तंबू", "धर्मशाळा", "हॉटेल", "खोली"], response: "मेळाव्यात राहण्याची सोय:\n१. अखाडा परिषद मोफत धर्मशाळा: सेक्टर ४ मध्ये. मोफत ब्लँकेट आणि पाणी सोय.\n२. त्रिवेणी लक्झरी स्विस टेंट्स: सेक्टर ११ मध्ये (दर ₹४५०० - ₹९५००/रात्र).\n३. परमार्थ निकेतन आश्रम: सेक्टर ४ मध्ये (दर ₹५०० - ₹१५००/रात्र).\nतपशीलासाठी 'Services' टॅब पहा." },
        { keys: ["पोहोचणे", "रेल्वे", "बस", "विमानतळ", "स्टेशन", "मार्ग"], response: "शहर ते मेळा प्रवास मार्ग:\n- प्रयागराज जंक्शन (PRYJ) वरून सिव्हिल लाईन्स बाहेरून मेळा स्पेशल मोफत शटल बस १A ने थेट सेक्टर १ वर यावे.\n- इतर मार्गांसाठी 'Navigator' मध्ये 'City Connectivity' तपासा." }
    ]
};

const familyDatabase = [
    { name: "ramesh chandra sharma", statusEn: "Reunited", statusHi: "पुनर्मिलन हुआ", locEn: "Sector 11 Lost & Found Headquarters", locHi: "सेक्टर 11 खोया-पाया मुख्यालय", time: "11:20 AM" },
    { name: "savitri devi patel", statusEn: "At Care Camp", statusHi: "केयर कैंप में", locEn: "Sector 4 Red Cross Medical Camp 3", locHi: "सेक्टर 4 रेड क्रॉस मेडिकल कैंप 3", time: "09:45 AM" }
];

const fallbackResponses = {
    en: "I'm here to help! You can ask about 'staying options', 'bathing dates', or 'how to reach the Mela'.",
    hi: "मैं आपकी सहायता के लिए तैयार हूँ! आप 'रहने की व्यवस्था', 'स्नान तिथियां', या 'मेला पहुंचने का मार्ग' के बारे में पूछ सकते हैं।",
    bn: "আমি সাহায্য করতে প্রস্তুত! আপনি 'থাকার জায়গা', 'স্নানের তারিখ', বা 'কিভাবে মেলায় আসবো' জিজ্ঞাসা করতে পারেন।",
    te: "నేను సహాయం చేయడానికి సిద్ధంగా ఉన్నాను! మీరు 'వసతి క్యాంపులు', 'స్నానాల తేదీలు' లేదా 'మేళాకు ఎలా చేరుకోవాలి' అని అడగవచ్చు.",
    ta: "உங்களுக்கு உதவ நான் தயாராக உள்ளேன்! நீங்கள் தங்குமிடம், நீராடல் தேதிகள் அல்லது மேளாவுக்கு வரும் வழி பற்றி கேட்கலாம்.",
    gu: "હું તમારી મદદ માટે તૈયાર છું. તમે 'રોકાણની વ્યવસ્થા', 'સ્નાનની તારીખો' અથવા 'મેળામાં પહોંચવા' વિશે પૂછી શકો છો.",
    mr: "मी मदतीसाठी तयार आहे! आपण 'राहण्याची सोय', 'स्नान तारखा', किंवा 'मेळाव्यात कसे पोहोचायचे' याबद्दल विचारू शकता।"
};


document.addEventListener('DOMContentLoaded', () => {
    updateLanguageUI();
    renderCalendar();
    renderServices('all');
    startCountdown();
    setupVoiceEngine();

    const langBtn = document.getElementById('langBtn');
    const langOptions = document.getElementById('langOptions');
    
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langOptions.classList.toggle('show');
    });

    document.addEventListener('click', () => {
        langOptions.classList.remove('show');
    });

    const options = document.querySelectorAll('.lang-opt');
    options.forEach(opt => {
        opt.addEventListener('click', () => {
            options.forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            currentLanguage = opt.getAttribute('data-lang');
            document.getElementById('currentLang').textContent = opt.textContent.split(' ')[0];
            
            translatePage();
            renderCalendar();
            renderServices(document.querySelector('.filter-chip.active').getAttribute('data-filter'));
            
            // Auto translate chat header & welcome msg
            document.getElementById('chatWelcomeText').textContent = i18n[currentLanguage].chat_welcome_msg;
            
            const voiceNote = {
                en: "Language set to English.",
                hi: "भाषा हिंदी में बदल दी गई है।",
                bn: "भाषा परिवर्तन करके बंगला করা হয়েছে।",
                te: "భాష తెలుగులోకి మార్చబడింది.",
                ta: "மொழி தமிழாக மாற்றப்பட்டுள்ளது.",
                gu: "ભાષા બદલીને ગુજરાતી કરવામાં આવી છે.",
                mr: "भाषा मराठी मध्ये बदलली आहे."
            };
            speakText(voiceNote[currentLanguage] || voiceNote['en']);
        });
    });

    // Chat Interface Bindings
    const chatInput = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');
    const voiceBtn = document.getElementById('voiceBtn');
    const ttsToggle = document.getElementById('ttsToggle');

    sendBtn.addEventListener('click', handleChatSendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChatSendMessage();
    });

    voiceBtn.addEventListener('click', toggleVoiceInput);
    
    document.querySelectorAll('.suggest-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            chatInput.value = btn.innerText.substring(2);
            handleChatSendMessage();
        });
    });

    ttsToggle.addEventListener('click', () => {
        isTextToSpeechEnabled = !isTextToSpeechEnabled;
        ttsToggle.classList.toggle('active', isTextToSpeechEnabled);
        ttsToggle.querySelector('i').className = isTextToSpeechEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    });

    // Map Route Bindings
    document.getElementById('drawRouteBtn').addEventListener('click', calculateAndDrawRoute);
    document.getElementById('calcTransitBtn').addEventListener('click', calculateCityTransit);

    // SOS Trigger
    document.getElementById('sosTrigger').addEventListener('click', triggerEmergencySOS);
    document.getElementById('sirenBtn').addEventListener('click', toggleSafetySiren);

    // Family Lost & Found Search Bindings
    document.getElementById('familySearchBtn').addEventListener('click', performFamilySearch);
    document.getElementById('familySearchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performFamilySearch();
    });

    // Service Filters chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderServices(chip.getAttribute('data-filter'));
        });
    });

    // Clickable sectors in SVG map
    document.querySelectorAll('.svg-sector').forEach(sec => {
        sec.addEventListener('click', () => {
            const secId = sec.getAttribute('id');
            document.getElementById('routeStart').value = secId;
            showLocalNotification(`Map: Set ${secId.toUpperCase()} as starting point.`);
        });
    });

    // Clickable ghats/pins in SVG map
    document.querySelectorAll('.svg-pin').forEach(pin => {
        pin.addEventListener('click', () => {
            const pinId = pin.getAttribute('id').replace('pin-', '');
            document.getElementById('routeEnd').value = pinId;
            calculateAndDrawRoute();
        });
    });
});


function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[currentLanguage] && i18n[currentLanguage][key]) {
            el.innerHTML = i18n[currentLanguage][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18n[currentLanguage] && i18n[currentLanguage][key]) {
            el.placeholder = i18n[currentLanguage][key];
        }
    });
}

function updateLanguageUI() {
    translatePage();
}

function showLocalNotification(message) {
    const textEl = document.getElementById('tickerText');
    textEl.innerHTML = `🔔 ${message}`;
    textEl.style.animation = 'none';
    setTimeout(() => {
        textEl.style.animation = 'ticker 25s linear infinite';
    }, 100);
}

function switchTab(tabName) {
    document.querySelectorAll('.nav-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    const targetSection = document.getElementById(`section-${tabName}`);
    if (targetSection) {
        targetSection.classList.add('active');
        const activeNavBtn = Array.from(document.querySelectorAll('.nav-btn')).find(btn => 
            btn.getAttribute('onclick').includes(tabName)
        );
        if (activeNavBtn) activeNavBtn.classList.add('active');
        document.querySelector('.app-main').scrollTop = 0;
    }
}

function switchSubTab(subTabName) {
    currentSubTab = subTabName;
    document.querySelectorAll('.sub-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.sub-section').forEach(s => s.classList.remove('active'));

    if (subTabName === 'mela-map') {
        document.getElementById('tabMelaMap').classList.add('active');
        document.getElementById('sub-section-mela-map').classList.add('active');
    } else {
        document.getElementById('tabCityTransit').classList.add('active');
        document.getElementById('sub-section-city-transit').classList.add('active');
    }
}

// ==========================================
// SHAHI SNAN DATES COUNTDOWN TIMER
// ==========================================
function startCountdown() {
    const targetDate = new Date('January 14, 2028 00:00:00').getTime();
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        if (difference < 0) {
            clearInterval(countdownInterval);
            document.getElementById('snanCountdown').innerHTML = `<h4 class="text-primary bold">Makar Sankranti Snan is Live! Har Har Gange!</h4>`;
            return;
        }
        
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = d.toString().padStart(2, '0');
        document.getElementById('hours').textContent = h.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = s.toString().padStart(2, '0');
    }, 1000);
}


function renderCalendar() {
    const calendarList = document.getElementById('calendarList');
    calendarList.innerHTML = '';
    
    snanEvents.forEach(evt => {
        let name = evt.nameKey;
        let tithi = evt.tithiKey;
        let guidelines = evt.guidelinesKey;
        
        if (currentLanguage === 'hi') {
            name = evt.nameHindi; tithi = evt.tithiHindi; guidelines = evt.guidelinesHindi;
        } else if (currentLanguage === 'bn') {
            name = evt.nameBengali; tithi = evt.tithiBengali; guidelines = evt.guidelinesBengali;
        } else if (currentLanguage === 'te') {
            name = evt.nameTelugu; tithi = evt.tithiTelugu; guidelines = evt.guidelinesTelugu;
        } else if (currentLanguage === 'ta') {
            name = evt.nameTamil; tithi = evt.tithiTamil; guidelines = evt.guidelinesTamil;
        } else if (currentLanguage === 'gu') {
            name = evt.nameGujarati; tithi = evt.tithiGujarati; guidelines = evt.guidelinesGujarati;
        } else if (currentLanguage === 'mr') {
            name = evt.nameMarathi; tithi = evt.tithiMarathi; guidelines = evt.guidelinesMarathi;
        }

        const card = document.createElement('div');
        card.className = `snan-card glass-panel ${evt.isShahi ? 'shahi' : ''}`;
        const typeLabel = evt.isShahi ? i18n[currentLanguage].snan_type_shahi : i18n[currentLanguage].snan_type_normal;
        
        card.innerHTML = `
            <span class="snan-badge">${typeLabel}</span>
            <div class="snan-date-badge">
                <span class="day">${evt.day}</span>
                <span class="month">${evt.month}</span>
            </div>
            <div class="snan-info">
                <h4>${name}</h4>
                <div class="tithi">${tithi}</div>
                <div class="guidelines">${guidelines}</div>
            </div>
        `;
        calendarList.appendChild(card);
    });
}

function renderServices(filter = 'all') {
    const grid = document.getElementById('servicesGrid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? amenitiesList : amenitiesList.filter(item => item.category === filter);
    
    filtered.forEach(item => {
        let title = item.titleEn;
        let desc = item.descEn;
        
        if (currentLanguage === 'hi') { title = item.titleHi; desc = item.descHi; }
        else if (currentLanguage === 'bn') { title = item.titleBn; desc = item.descBn; }
        else if (currentLanguage === 'te') { title = item.titleTe; desc = item.descTe; }
        else if (currentLanguage === 'ta') { title = item.titleTa; desc = item.descTa; }
        else if (currentLanguage === 'gu') { title = item.titleGu; desc = item.descGu; }
        else if (currentLanguage === 'mr') { title = item.titleMr; desc = item.descMr; }

        const card = document.createElement('div');
        card.className = 'service-card glass-panel';
        
        let iconHtml = '';
        if (item.category === 'food') iconHtml = `<i class="fa-solid fa-bowl-rice text-primary"></i>`;
        else if (item.category === 'medical') iconHtml = `<i class="fa-solid fa-kit-medical col-teal"></i>`;
        else if (item.category === 'tent') iconHtml = `<i class="fa-solid fa-tent col-purple"></i>`;
        else if (item.category === 'toilet') iconHtml = `<i class="fa-solid fa-restroom col-blue"></i>`;
        
        const sectorLabel = i18n[currentLanguage].sector_label || "Sector";
        const mapBtnLabel = i18n[currentLanguage].btn_map || "Show Map";
        const callBtnLabel = i18n[currentLanguage].btn_call || "Call Center";

        card.innerHTML = `
            <div class="service-card-header">
                <div class="service-card-title">
                    ${iconHtml}
                    <h4>${title}</h4>
                </div>
                <span class="service-dist">${item.distance}</span>
            </div>
            <p class="text-secondary" style="font-size: 11px; line-height: 1.4;">${desc}</p>
            <div class="service-meta">
                <span>${sectorLabel}: <span>${item.sector}</span></span>
                <span>Phone: <span>${item.phone}</span></span>
            </div>
            <div class="service-actions">
                <button class="secondary-btn" onclick="focusServiceOnMap('${item.mapPinId}')">
                    <i class="fa-solid fa-location-dot"></i> ${mapBtnLabel}
                </button>
                <a href="tel:${item.phone}" style="flex:1;">
                    <button class="primary-btn" style="width:100%; padding: 8px;">
                        <i class="fa-solid fa-phone"></i> ${callBtnLabel}
                    </button>
                </a>
            </div>
        `;
        grid.appendChild(card);
    });
}

function focusServiceOnMap(pinId) {
    switchTab('map');
    switchSubTab('mela-map');
    
    document.getElementById('activeRouteOverlay').setAttribute('d', '');
    document.getElementById('routeDetails').classList.add('hidden');
    
    const pin = document.getElementById(pinId) || document.getElementById(pinId.replace('pin-', ''));
    if (pin) {
        pin.scrollIntoView({ behavior: 'smooth', block: 'center' });
        pin.style.transform = 'scale(1.8)';
        setTimeout(() => { pin.style.transform = 'scale(1)'; }, 1500);
        showLocalNotification(`Focused on map element.`);
    }
}


function calculateAndDrawRoute() {
    const startVal = document.getElementById('routeStart').value;
    const endVal = document.getElementById('routeEnd').value;
    
    const routeKey = `${startVal}_${endVal}`;
    const routeData = routeDatabase[routeKey];
    
    const overlay = document.getElementById('activeRouteOverlay');
    const detailsPanel = document.getElementById('routeDetails');
    
    if (routeData) {
        overlay.setAttribute('d', routeData.d);
        document.getElementById('routeDistVal').textContent = routeData.distance;
        document.getElementById('routeTimeVal').textContent = routeData.time;
        document.getElementById('routeCrossingsVal').textContent = routeData.crossings;
        
        let directionText = i18n[currentLanguage].route_desc_sample;
        document.getElementById('routeDirectionsText').textContent = directionText;
        
        detailsPanel.classList.remove('hidden');
        speakText(`Route loaded. Distance: ${routeData.distance}. Walking time: ${routeData.time}.`);
    } else {
        overlay.setAttribute('d', '');
        detailsPanel.classList.add('hidden');
    }
}

// ==========================================
// CITY-TO-MELA TRANSIT CONNECTOR ROUTER
// ==========================================
function calculateCityTransit() {
    const origin = document.getElementById('transitStart').value;
    const dest = document.getElementById('transitEnd').value;
    const resultsPanel = document.getElementById('transitResults');
    const stepsList = document.getElementById('transitDirectionsSteps');
    
    const originData = transitRoutes[origin];
    if (!originData || !originData[dest]) {
        document.getElementById('transitModeVal').textContent = "Free Shuttle Bus";
        document.getElementById('transitFareVal').textContent = "Free";
        document.getElementById('transitTimeVal').textContent = "25 mins";
        
        stepsList.innerHTML = `
            <li>Exit the hub terminal towards the Mela bus bays.</li>
            <li>Board the Mela Special Shuttle bus directly to ${dest.toUpperCase()} entry gate.</li>
            <li>Proceed through security checkpoints.</li>
        `;
        resultsPanel.classList.remove('hidden');
        return;
    }

    const route = originData[dest];
    
    document.getElementById('transitModeVal').textContent = currentLanguage === 'hi' ? route.modeHi : route.modeEn;
    document.getElementById('transitFareVal').textContent = currentLanguage === 'hi' ? route.fareHi : route.fareEn;
    document.getElementById('transitTimeVal').textContent = currentLanguage === 'hi' ? route.timeHi : route.timeEn;
    
    stepsList.innerHTML = '';
    const steps = route.steps[currentLanguage] || route.steps['en'] || route.steps['hi'];
    steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });

    resultsPanel.classList.remove('hidden');
    speakText(`Transit route calculated. Mode: ${route.modeEn}. Time: ${route.timeEn}.`);
}
function handleChatSendMessage() {
    const chatInput = document.getElementById('chatInput');
    const query = chatInput.value.trim();
    if (!query) return;

    appendChatMessage(query, 'user');
    chatInput.value = '';
    
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        const responseData = queryChatbotNLP(query);
        appendChatMessage(responseData.response, 'bot', responseData.action);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        speakText(responseData.response);
    }, 800);
}

function appendChatMessage(text, sender, action = null) {
    const chatMessages = document.getElementById('chatMessages');
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${sender}-msg`;
    
    let btnHtml = '';
    if (action === 'show_medical') {
        btnHtml = `<button class="primary-btn" onclick="focusServiceOnMap('pin-medical')" style="margin-top:10px; padding:6px 12px; font-size:11px;">
            <i class="fa-solid fa-location-dot"></i> Show Medical on Map
        </button>`;
    } else if (action === 'show_sangam') {
        btnHtml = `<button class="primary-btn" onclick="focusServiceOnMap('pin-sangam')" style="margin-top:10px; padding:6px 12px; font-size:11px;">
            <i class="fa-solid fa-location-dot"></i> Show Sangam on Map
        </button>`;
    }
    
    msgDiv.innerHTML = `
        <div class="msg-content">
            <p>${text}</p>
            ${btnHtml}
        </div>
        <span class="msg-time">${time}</span>
    `;
    chatMessages.appendChild(msgDiv);
}

function queryChatbotNLP(query) {
    const q = query.toLowerCase();
    const db = chatbotDatabase[currentLanguage] || chatbotDatabase['en'];
    
    for (let item of db) {
        for (let k of item.keys) {
            if (q.includes(k.toLowerCase())) {
                return { response: item.response, action: item.action || null };
            }
        }
    }
    
    // fallbacks for other languages using English dictionary if key not found
    if (currentLanguage !== 'en' && currentLanguage !== 'hi') {
        const fallbackDb = chatbotDatabase['en'];
        for (let item of fallbackDb) {
            for (let k of item.keys) {
                if (q.includes(k.toLowerCase())) {
                    return { response: item.response, action: item.action || null };
                }
            }
        }
    }
    
    return { response: fallbackResponses[currentLanguage] || fallbackResponses['en'], action: null };
}


function setupVoiceEngine() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
        speechRecognition = new SpeechRecognition();
        speechRecognition.continuous = false;
        
        speechRecognition.onstart = () => {
            isListening = true;
            document.getElementById('voiceBtn').classList.add('active');
            document.getElementById('voiceWave').classList.add('show');
        };
        
        speechRecognition.onend = () => {
            isListening = false;
            document.getElementById('voiceBtn').classList.remove('active');
            document.getElementById('voiceWave').classList.remove('show');
        };
        
        speechRecognition.onresult = (event) => {
            const resultText = event.results[0][0].transcript;
            document.getElementById('chatInput').value = resultText;
            handleChatSendMessage();
        };
        
        speechRecognition.onerror = (e) => {
            console.error(e.error);
            isListening = false;
            document.getElementById('voiceBtn').classList.remove('active');
            document.getElementById('voiceWave').classList.remove('show');
        };
    }
}

function toggleVoiceInput() {
    if (!speechRecognition) {
        alert("Speech recognition is not supported in this browser. Please use Chrome.");
        return;
    }
    
    if (isListening) {
        speechRecognition.stop();
    } else {
        const localeMap = { en: 'en-US', hi: 'hi-IN', bn: 'bn-IN', te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', mr: 'mr-IN' };
        speechRecognition.lang = localeMap[currentLanguage] || 'en-US';
        speechRecognition.start();
    }
}

function speakText(text) {
    if (!isTextToSpeechEnabled || !('speechSynthesis' in window)) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const localeMap = { en: 'en-US', hi: 'hi-IN', bn: 'bn-IN', te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', mr: 'mr-IN' };
    utterance.lang = localeMap[currentLanguage] || 'en-US';
    
    const voices = window.speechSynthesis.getVoices();
    const matchingVoice = voices.find(voice => voice.lang.includes(localeMap[currentLanguage]));
    if (matchingVoice) {
        utterance.voice = matchingVoice;
    }
    window.speechSynthesis.speak(utterance);
}

// ==========================================
// SOS & SIREN CONTROL
// ==========================================
function toggleSafetySiren() {
    const audio = document.getElementById('sirenAudio');
    const sirenBtn = document.getElementById('sirenBtn');
    
    if (isSirenPlaying) {
        audio.pause();
        audio.currentTime = 0;
        isSirenPlaying = false;
        sirenBtn.classList.remove('active');
        sirenBtn.querySelector('span').textContent = i18n[currentLanguage].play_siren;
    } else {
        audio.play().then(() => {
            isSirenPlaying = true;
            sirenBtn.classList.add('active');
            sirenBtn.querySelector('span').textContent = i18n[currentLanguage].stop_siren;
        }).catch(e => {
            alert("Please interact with the screen first to enable safety audio.");
        });
    }
}

function triggerEmergencySOS() {
    const sosToast = document.getElementById('sosToast');
    sosToast.classList.remove('hidden');
    
    if (!isSirenPlaying) toggleSafetySiren();
    
    const lat = (25.4284 + (Math.random() - 0.5) * 0.005).toFixed(6);
    const lng = (81.8902 + (Math.random() - 0.5) * 0.005).toFixed(6);
    
    document.getElementById('sosToastCoords').textContent = `Transmitting Location: Lat ${lat}, Lng ${lng} (Sector 4 Akhara Camp)`;
    speakText("Distress beacon transmitted. Assistance teams are responding.");
    
    setTimeout(() => {
        sosToast.classList.add('hidden');
        showLocalNotification("Distress beacon broadcasted successfully.");
    }, 6000);
}

// ==========================================
// REGISTRY SEARCH LOOKUP
// ==========================================
function performFamilySearch() {
    const input = document.getElementById('familySearchInput');
    const query = input.value.trim().toLowerCase();
    const resultsContainer = document.getElementById('familySearchResults');
    
    if (!query) return;
    
    resultsContainer.classList.remove('hidden');
    resultsContainer.innerHTML = '';

    const matches = familyDatabase.filter(item => item.name.includes(query));

    if (matches.length > 0) {
        const titleEl = document.createElement('p');
        titleEl.className = 'bold text-primary';
        titleEl.textContent = i18n[currentLanguage].family_found_msg;
        resultsContainer.appendChild(titleEl);
        
        matches.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'search-res-item';
            
            const statusLabel = currentLanguage === 'hi' ? item.statusHi : item.statusEn;
            const locationLabel = currentLanguage === 'hi' ? item.locHi : item.locEn;
            const nameCased = item.name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            
            itemDiv.innerHTML = `
                <div>
                    <strong>${nameCased}</strong>
                    <span style="display:block; color:var(--text-secondary); font-size:10px; margin-top:2px;">
                        Loc: ${locationLabel} (Reported: ${item.time})
                    </span>
                </div>
                <span class="status status-reunited">${statusLabel}</span>
            `;
            resultsContainer.appendChild(itemDiv);
        });
    } else {
        resultsContainer.innerHTML = `<p class="text-secondary" style="font-size:11px;">${i18n[currentLanguage].family_not_found}</p>`;
    }
}

function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
}
