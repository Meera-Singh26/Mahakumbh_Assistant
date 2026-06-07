SangamSathi — Mahakumbh 2028 Pilgrim Assistant
त्रिवेणी संगम का अपना साथी — A multilingual, AI-powered companion built for the pilgrims of the Maha Kumbh Mela at Prayagraj, 2028.

 Live Demo: mahakumbhassistant.vercel.app

SangamSathi is a single-page web application that helps devotees navigate the world's largest spiritual gathering. From the next Shahi Snan countdown to one-tap SOS, every essential feature lives one tap away — in seven Indian languages.

✨ Highlights
🗺️ Smart Mela map with route planning between sectors, ghats and akharas
🚗 City-to-Mela travel planner from airports, stations and parking zones
🤖 SangamSathi AI — multilingual chatbot with voice + text support
🛕 Shahi Snan calendar with auspicious bathing dates and timings
🛺 Approved transit tariffs — e-rickshaw rates and free shuttle routes
🚨 One-tap SOS with location broadcast + emergency siren
👨‍👩‍👧 Lost & Found registry with live search across all kendras
🍚 Pilgrim services directory — ashrams, bhandaras, medical camps, toilets
🌦️ Live status feed — weather, AQI, crowd density, official advisories
🌐 7 Indian languages — English, हिंदी, বাংলা, తెలుగు, தமிழ், ગુજરાતી, मराठी
📱 Zero install — pure HTML + CSS + Vanilla JS, runs on any device
📂 Project Structure



sangamsathi/
├── index.html      # Markup: header, ticker, 6 main sections, modals
├── styles.css      # Theme tokens, glass-panel UI, responsive layout
└── app.js          # i18n engine, chatbot NLP, countdown, voice, map filters
Three files. No dependencies. No build step.

🚀 Quick Start
Option 1 — Open directly
Double-click index.html to open in your browser. Voice features require HTTPS or localhost.

Option 2 — Local server (recommended)
bash


# Python
python3 -m http.server 3000

# Node
npx serve .
Then visit http://localhost:3000.

Option 3 — Deploy to the web
Vercel

Drop the folder onto vercel.com/new/drop
Done — public URL in seconds
GitHub Pages

Push to a public repo
Settings → Pages → deploy from main branch root
Netlify, Mule Pages, Cloudflare Pages — drag-drop the folder; no config required.

🗂️ The 6 Sections
1. 🏠 Home / Dashboard
Welcome card with estimated sector, live weather + AQI, crowd density indicator, countdown to the next Shahi Snan, plus a quick-nav hub linking every other section.

2. 🤖 Sangam AI Chat
A multilingual chatbot tuned for pilgrim questions — snan timings, ritual significance, nearest ghat, transit advice. Supports voice input and text-to-speech output.

3. 🗺️ Mela Navigator
Interactive Mela map with category filters (toilets, medical, tents, food, ghats, akharas). Includes a city-to-Mela travel planner and a directory of government-approved transit tariffs (e-rickshaw ₹20-₹50, free 24×7 shuttle routes) to prevent overcharging.

4. 📅 Shahi Snan Calendar
Visual calendar of all Shahi Snan dates and other auspicious bathing days for Maha Kumbh 2028, with the spiritual significance of each tithi.

5. 🛕 Services & Stay
Filterable directory of Mela amenities — ashrams, akharas, bhandara kitchens, medical camps, sanitation blocks, premium tents and dharamshalas. Tap any item to focus it on the navigator map.

6. 🚨 SOS / Emergency
One-tap SOS that broadcasts pilgrim ID and location to the nearest control room
Emergency siren activation for crowd alerts
Direct dial helplines — 112, 108, 100, 1920, 1098, 1090
Lost & Found registry with photo-based live search across 50+ Khoya-Paya Kendras
Stampede prevention & first-aid guides
🌐 Internationalisation (i18n)
Translations live in the i18n object inside app.js. Every translatable element in index.html carries a data-i18n="key" attribute. The translatePage() function swaps text whenever the language changes.

html


<h2 data-i18n="welcome_title">Welcome to Prayagraj</h2>
To add a new language:

Add a new key to the i18n object in app.js
js


pa: { welcome_title: "ਪ੍ਰਯਾਗਰਾਜ ਵਿੱਚ ਸੁਆਗਤ", ... }
Add a <div class="lang-opt" data-lang="pa">ਪੰਜਾਬੀ</div> entry in the language dropdown
Refresh — done
🎨 Design System

Token	Use
--color-saffron
	
Primary actions, headings

--color-vermillion
	
Emergency, alerts

--color-teal
	
Chat, secondary CTAs

--color-purple
	
Calendar accents

--color-gold
	
Borders, dividers

--color-ivory
	
Page background

glass-panel
	
Frosted translucent card across UI

Typography is Outfit (Google Fonts) — modern, friendly and multi-script.

🤖 How the AI Chat Works
The chatbot is intent-based and runs entirely in the browser. Flow:

User types or speaks a query → handleChatSendMessage()
queryChatbotNLP(query) normalises text and matches against chatbotDatabase keywords (ghat, snan, transit, medical, food, lost…)
If matched, the multilingual response for the current language is returned
Otherwise a polite fallbackResponses[lang] reply is shown
If TTS is on, the reply is read aloud via SpeechSynthesisUtterance
No external LLM call is required — making it work in low-bandwidth Mela zones.

🔌 Browser APIs Used
Web Speech API — voice input (SpeechRecognition) and TTS (speechSynthesis)
Geolocation API — estimated sector detection
Notification API — local toasts for live advisories
FontAwesome 6 — icon set (CDN)
📱 Mobile Support
Mobile-first layout. Tested resolutions:

360 × 640 (entry-level Android)
414 × 896 (iPhone 11)
768 × 1024 (tablet)
Desktop ≥ 1280
Touch targets are ≥ 44 px. Glass panels collapse to a single column on narrow screens.

🛣️ Roadmap
 Offline-first PWA shell with service worker
 Real-time crowd density from Mela CCTV feeds
 BLE-beacon based indoor wayfinding inside major ghats
 Hindi/Sanskrit voice cloning for AI replies
 Volunteer-mode for sevadars (extra admin actions)
 Integration with UP Police Mela Control API
🌐 Deployment
This app is live at mahakumbhassistant.vercel.app — hosted on Vercel as a static site. Re-deploys happen automatically on every push to main.

🙏 Credits
Devanagari + multi-script font: Google Fonts — Outfit
Icons: FontAwesome 6
Inspiration: every pilgrim who has ever asked "घाट कहाँ है?" at the Mela
📜 License
This project is open for educational and devotional use. If you ship a fork to production, please credit the original team.

गंगे च यमुने चैव गोदावरि सरस्वति नर्मदे सिन्धु कावेरि जलेऽस्मिन् सन्निधिं कुरु

हर हर गंगे • Har Har Gange
