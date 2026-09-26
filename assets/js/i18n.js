/**
 * News Blogs - Internationalization (i18n) Engine
 * Supports seamless switching between English and Tamil Unicode.
 * Persists selection via localStorage across all pages.
 */

(function () {
    'use strict';

    // Comprehensive English to Tamil Dictionary
    const DICTIONARY = {
        // Navigation & Menu
        "Home": "முகப்பு",
        "Home Newspaper": "செய்தித்தாள் முகப்பு",
        "Home Magazine": "இதழ் முகப்பு",
        "Home Sports": "விளையாட்டு முகப்பு",
        "Home Movie": "சினிமா முகப்பு",
        "Home Gadget": "சாதனங்கள் முகப்பு",
        "About Us": "எங்களைப் பற்றி",
        "Category": "பிரிவுகள்",
        "Categories": "பிரிவுகள்",
        "Three Column": "மூன்று பத்திகள்",
        "Three Column Sidebar": "பக்கப்பட்டையுடன் மூன்று பத்திகள்",
        "Pages": "பக்கங்கள்",
        "Shop": "அங்காடி",
        "Shop Details": "பொருள் விவரங்கள்",
        "Cart Page": "கூடைப் பக்கம்",
        "Checkout": "பணம் செலுத்துதல்",
        "Wishlist": "விருப்பப்பட்டியல்",
        "Team": "எங்கள் குழு",
        "Author": "ஆசிரியர்",
        "Error Page": "பிழைப் பக்கம்",
        "Blog": "வலைப்பதிவு",
        "Blog Standard": "நிலையான வலைப்பதிவு",
        "Blog Masonary": "மேசன்ரி வலைப்பதிவு",
        "Blog List": "வலைப்பதிவு பட்டியல்",
        "Blog Details": "வலைப்பதிவு விவரங்கள்",
        "Blog Details Video": "வீடியோ வலைப்பதிவு",
        "Blog Details Audio": "ஆடியோ வலைப்பதிவு",
        "Blog Details Nosidebar": "பக்கப்பட்டையற்ற வலைப்பதிவு",
        "Blog Details Full Image": "முழுப் பட வலைப்பதிவு",
        "Contact": "தொடர்புக்கு",
        "Contact Us": "எங்களைத் தொடர்பு கொள்ள",

        // Header & Topbar
        "Privacy Policy": "தனியுரிமைக் கொள்கை",
        "Terms & Conditions": "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
        "Terms & Policy": "விதிமுறைகள் மற்றும் கொள்கை",
        "Dark Mode": "இரவுப் பயன்முறை",
        "Light Mode": "பகல் பயன்முறை",
        "Login / register": "உள்நுழைவு / பதிவு",
        "Login": "உள்நுழைக",
        "Register": "பதிவு செய்க",
        "Breaking News :": "முக்கியச் செய்திகள் :",
        "Breaking News": "முக்கியச் செய்திகள்",
        "Language": "மொழி",
        "Language:": "மொழி:",

        // Common UI & Widgets
        "Shopping cart": "வாங்கு கூடை",
        "View cart": "கூடையைக் காண்க",
        "Subtotal:": "துணை மொத்தம்:",
        "Subtotal": "துணை மொத்தம்",
        "Recent Posts": "சமீபத்திய பதிவுகள்",
        "Popular Tags": "பிரபலமான குறிச்சொற்கள்",
        "Subscribe": "குழுசேரவும்",
        "Read More": "மேலும் படிக்க",
        "View Details": "விவரங்களைக் காண்க",
        "Add to Cart": "கூடையில் சேர்க்க",
        "Add To Cart": "கூடையில் சேர்க்க",
        "In stock": "கையிருப்பில் உள்ளது",
        "Out of stock": "கையிருப்பில் இல்லை",
        "Product Name": "பொருளின் பெயர்",
        "Product": "பொருள்",
        "Unit Price": "அலகு விலை",
        "Date Added": "சேர்க்கப்பட்ட தேதி",
        "Stock Status": "இருப்பு நிலை",
        "Quantity": "அளவு",
        "Total": "மொத்தம்",
        "Share on": "பகிரவும்",
        "Comments": "கருத்துகள்",
        "Leave a Reply": "உங்கள் கருத்தைப் பதிவு செய்க",
        "Post Comment": "கருத்தை இடுக",
        "Related Posts": "தொடர்புடைய பதிவுகள்",
        "Previous Post": "முந்தைய பதிவு",
        "Next Post": "அடுத்த பதிவு",
        "Search": "தேடுக",
        "Filter": "வடிகட்டு",
        "Quick View": "விரைவுக் காட்சி",
        "Faq": "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        "FAQ": "அடிக்கடி கேட்கப்படும் கேள்விகள்",

        // Section Headings
        "Today Post": "இன்றைய பதிவு",
        "Popular News": "பிரபலமான செய்திகள்",
        "Popular": "பிரபலமானவை",
        "Trending news": "ட்ரெண்டிங் செய்திகள்",
        "Trending News": "ட்ரெண்டிங் செய்திகள்",
        "Featured News": "சிறப்புச் செய்திகள்",
        "Top Stories": "முக்கியக் கதைகள்",
        "Latest News": "சமீபத்திய செய்திகள்",
        "Video Post": "வீடியோ பதிவுகள்",
        "Audio Post": "ஆடியோ பதிவுகள்",
        "Shop Products": "அங்காடிப் பொருட்கள்",
        "Billing Details": "கட்டண விவரங்கள்",
        "Your Order": "உங்கள் ஆர்டர்",
        "Order Summary": "ஆர்டர் சுருக்கம்",
        "Wishlist Products": "விருப்பப்பட்டியல் பொருட்கள்",
        "Get In Touch": "எங்களுடன் தொடர்புகொள்ள",
        "Send Message": "செய்தி அனுப்புக",
        "Page Not Found": "பக்கம் காணப்படவில்லை",
        "Back to Home": "முகப்பிற்குத் திரும்பு",
        "Cancel Preloader": "ஏற்றுவதை ரத்துசெய்",
        "Skip": "தவிர்",
        "LIVE NEWS & MEDIA NETWORK": "நேரலை செய்திகள் & ஊடக வலைப்பின்னல்",
        "Loading latest news...": "சமீபத்திய செய்திகள் ஏற்றப்படுகின்றன...",
        "Fetching updates...": "செய்திகள் புதுப்பிக்கப்படுகின்றன...",

        // News Categories
        "Political": "அரசியல்",
        "Politics": "அரசியல்",
        "Business": "வணிகம்",
        "Health": "சுகாதாரம்",
        "Technology": "தொழில்நுட்பம்",
        "Sports": "விளையாட்டு",
        "Entertainment": "பொழுதுபோக்கு",
        "Music": "இசை",
        "Food": "உணவு",
        "Travels": "பயணம்",
        "Travel": "பயணம்",
        "Fashions": "பேஷன்",
        "Fashion": "பேஷன்",
        "Animal": "விலங்குகள்",
        "Weather": "வானிலை",
        "Movies": "திரைப்படங்கள்",
        "Movie": "திரைப்படம்",
        "Boxing": "குத்துச்சண்டை",
        "Paragliding": "பாரா கிளைடிங்",
        "Basketball": "கூடைப்பந்து",
        "Busketball": "கூடைப்பந்து",
        "Tennis": "டென்னிஸ்",
        "Kayaking": "கயாகிங்",
        "Skating": "ஸ்கேட்டிங்",
        "Hocky": "ஹாக்கி",
        "Hockey": "ஹாக்கி",
        "Bike Racing": "பைக் பந்தயம்",
        "Car Racing": "கார் பந்தயம்",
        "Handball": "கைப்பந்து",
        "Volleyball": "கைப்பந்து",
        "Swimming": "நீச்சல்",
        "Mountain Ski": "பனிச்சறுக்கு",
        "Mountain Sky": "மலை வானம்",
        "Gadget": "சாதனங்கள்",
        "Smartwatch": "ஸ்மார்ட்வாட்ச்",

        // Form Fields & Placeholders
        "Enter Email": "மின்னஞ்சலை உள்ளிடவும்",
        "What are you looking for?": "நீங்கள் என்ன தேடுகிறீர்கள்?",
        "Your Name": "உங்கள் பெயர்",
        "Email Address": "மின்னஞ்சல் முகவரி",
        "Phone Number": "தொலைபேசி எண்",
        "Subject": "பொருள்",
        "Write Your Message": "உங்கள் செய்தியை எழுதுங்கள்",
        "First Name": "முதல் பெயர்",
        "Last Name": "கடைசி பெயர்",
        "Company Name": "நிறுவனத்தின் பெயர்",
        "Street Address": "தெரு முகவரி",
        "Town / City": "நகரம்",
        "State / County": "மாநிலம்",
        "Postcode / ZIP": "அஞ்சல் குறியீடு",
        "Order Notes": "ஆர்டர் குறிப்புகள்",

        // Shop Products
        "Car Safety Seat": "கார் பாதுகாப்பு இருக்கை",
        "Bus Safety Hammer": "பேருந்து பாதுகாப்பு சுத்தி",
        "Car Steering Wheel": "கார் ஸ்டீயரிங் வீல்",
        "Transponder Car Key": "டிரான்ஸ்பாண்டர் கார் சாவி",
        "Safety Hand Glove": "பாதுகாப்பு கையுறை",
        "Smartwatch Series 3": "ஸ்மார்ட்வாட்ச் சீரிஸ் 3",

        // Long Descriptions & Notices
        "Sign up to get update about us. Don't be hasitate your email is safe.": "எங்களைப் பற்றிய புதிய தகவல்களைப் பெற பதிவு செய்யுங்கள். உங்கள் மின்னஞ்சல் பாதுகாப்பானது.",
        "I don't want to see this popup again.": "இந்த அறிவிப்பை மீண்டும் காட்ட வேண்டாம்.",
        "I have read and accept the": "நான் படித்து ஏற்றுக்கொள்கிறேன்:",
        "Magazines cover a wide subjects, including not limited to fashion, lifestyle, health, politics, business, Entertainment, sports, science,": "எங்கள் இதழ்கள் ஃபேஷன், வாழ்க்கை முறை, நலம், அரசியல், வணிகம், பொழுதுபோக்கு, விளையாட்டு, அறிவியல் உள்ளிட்ட பல துறைகளை உள்ளடக்கியது.",
        "All Rights Reserved.": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

        // Article Headlines
        "Relaxation redefined, your beach resort sanctuary.": "மறுவரையறை செய்யப்பட்ட அமைதி, உங்கள் கடற்கரை ஓய்வு புகலிடம்.",
        "From health to fashion, lifestyle news curated.": "ஆரோக்கியம் முதல் பேஷன் வரை, சிறந்த வாழ்க்கை முறை செய்திகள்.",
        "Sun, sand, and luxury at our resort": "எங்கள் ஓய்வு விடுதியில் சூரியன், மணல் மற்றும் ஆடம்பரம்",
        "Fitness: Your journey to Better, stronger you.": "உடற்தகுதி: வலிமையான, ஆரோக்கியமான உங்களுக்கான சிறந்த பயணம்.",
        "Embrace the game Ignite your sporting": "விளையாட்டைத் தழுவுங்கள், உங்கள் விளையாட்டுத் திறனைத் தூண்டுங்கள்",
        "Revolutionizing lives Through technology": "தொழில்நுட்பத்தின் மூலம் மனித வாழ்க்கையில் புதிய புரட்சி",
        "Enjoy the Virtual Reality embrace the": "மெய்நிகர் உலகத்தை மகிழ்ச்சியோடு அனுபவித்து மகிழுங்கள்",
        "Equality and justice for Every citizen": "ஒவ்வொரு குடிமகனுக்கும் சமத்துவமும் நீதியும் நிலைக்கட்டும்",
        "Key eyes on the latest update of technology": "தொழில்நுட்பத்தின் புதிய மாற்றங்களில் ஒரு கூரிய பார்வை",
        "Boxing: Strength skill triumph Find your greatness.": "குத்துச்சண்டை: வலிமை, திறமை மற்றும் வெற்றி - உங்கள் திறனை உணருங்கள்.",
        "Find your wings, chase the horizon, and heights with paragliding.": "பாரா கிளைடிங் மூலம் உங்கள் சிறகுகளை விரித்து வானில் பறந்திடுங்கள்.",
        "Bound by the Love of the Game: Tales from the Sports Arena": "விளையாட்டின் மீதான அன்பால் இணைந்த விளையாட்டு அரங்கக் கதைகள்",
        "Basketball Bliss Stories from the Hardwood Court Block Area": "கூடைப்பந்து விளையாட்டு மைதானத்தின் உற்சாகக் கதைகள்",
        "Mountain Majesty: Where Fashion Trends and Confidence Soar!": "மலைகளின் கம்பீரம்: புதிய பேஷன் மற்றும் தன்னம்பிக்கை உயரும் இடம்!",
        "Leadership for the people by the people": "மக்களுக்காக மக்களால் முன்னெடுக்கப்படும் சிறந்த தலைமைத்துவம்",
        "Find serenity, glide with grace kayak your way.": "அமைதியைக் கண்டறியுங்கள், கயாகிங் மூலம் அழகாகப் பயணித்திடுங்கள்.",
        "Glide in where skating and fashion converge!": "ஸ்கேட்டிங்கும் பேஷனும் இணையும் இடத்தில் சறுக்கி மகிழுங்கள்!",
        "Push boundaries, rewrite the rules of sports": "எல்லைகளைத் தாண்டுங்கள், விளையாட்டின் விதிகளை மாற்றி எழுதுங்கள்",
        "Feel the rush, embrace The intensity of hockey.": "ஹாக்கி விளையாட்டின் வேகத்தையும் தீவிரத்தையும் உணருங்கள்.",
        "Feel the rush, embrace the intensity of hockey.": "ஹாக்கி விளையாட்டின் வேகத்தையும் தீவிரத்தையும் உணருங்கள்.",
        "Feel the exhilaration, Make memories on skis": "பனிச்சறுக்கில் சிலிர்ப்பை உணர்ந்து இனிய நினைவுகளை உருவாக்குங்கள்",
        "The art of teamwork, precision, and victory, where Champions emerge.": "கூட்டு முயற்சி, துல்லியம் மற்றும் வெற்றி - சாம்பியன்கள் உருவாகும் களம்.",
        "From serve to block, embrace volleyballs energy.": "செர்வ் முதல் பிளாக் வரை, கைப்பந்தாட்டத்தின் ஆற்றலைத் தழுவுங்கள்.",
        "Handball uniting skill and passion in the game": "கைப்பந்து விளையாட்டில் திறமையும் ஆர்வமும் இணையும் களம்",
        "Bike Where speed, freedom, & connection intertwine.": "வேகமும் சுதந்திரமும் சங்கமிக்கும் பைக் சவாரி.",
        "Relaxation redefined, your beach resort sanctuary": "மறுவரையறை செய்யப்பட்ட அமைதி, உங்கள் கடற்கரை ஓய்வு புகலிடம்",
        "Fashion-forward Where Trends & confidence": "பேஷன் உலகம்: புதுமை மற்றும் தன்னம்பிக்கை மிளிரும் இடம்",
        "Embrace the bump, spike victory volleyball style.": "கைப்பந்தாட்டத்தில் உத்வேகத்துடன் விளையாடி வெற்றியை ஈட்டுங்கள்.",
        "Carve your path, conquer the snowy slopes.": "பனிச்சரிவுகளை வென்று உங்கள் வெற்றியை நிலைநாட்டுங்கள்.",
        "Tread water, aim high, play with water polo pride": "தண்ணீரில் சாதிப்போம், வாட்டர் போலோவில் பெருமை பெறுவோம்"
    };

    // Build reverse map for restoring original English text
    const REVERSE_DICT = {};
    Object.keys(DICTIONARY).forEach(function (key) {
        REVERSE_DICT[DICTIONARY[key]] = key;
    });

    const STORAGE_KEY = "news_blogs_lang";
    let currentLang = "en";

    /**
     * Translates a single text string
     */
    function translateString(str, toLang) {
        if (!str) return str;
        const trimmed = str.trim();

        if (toLang === "ta") {
            if (DICTIONARY[trimmed]) {
                return str.replace(trimmed, DICTIONARY[trimmed]);
            }
            // Check for By - Eye Catch Media
            if (trimmed === "By - Eye Catch Media" || trimmed === "By - I CATCH தமிழ்" || trimmed === "By - Tnews") return "ஆசிரியர் - Eye Catch Media";
            return str;
        } else {
            // Revert to English
            if (REVERSE_DICT[trimmed]) {
                return str.replace(trimmed, REVERSE_DICT[trimmed]);
            }
            if (trimmed === "ஆசிரியர் - Eye Catch Media" || trimmed === "ஆசிரியர் - I CATCH தமிழ்" || trimmed === "ஆசிரியர் - Tnews") return "By - Eye Catch Media";
            return str;
        }
    }

    /**
     * Walks the DOM to translate visible text nodes and inputs
     */
    function translateDOM(targetLang) {
        // Translate text nodes inside specific content tags
        const selector = "h1, h2, h3, h4, h5, h6, p, a, span, button, label, li, th, td, strong, ins, del, bdi, time";
        const elements = document.querySelectorAll(selector);

        elements.forEach(function (el) {
            // Skip script, style, code, and language switcher buttons themselves
            if (el.closest('.lang-switcher-wrap') || el.closest('.mobile-lang-box') || el.classList.contains('lang-btn')) {
                return;
            }

            // Iterate over child text nodes to avoid destroying child elements (icons, badges, etc.)
            el.childNodes.forEach(function (node) {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.nodeValue;
                    if (!text || !text.trim()) return;

                    // Cache original English text on the node if not present
                    if (!node.__origEnText) {
                        node.__origEnText = text;
                    }

                    if (targetLang === "ta") {
                        const trimmed = text.trim();
                        if (DICTIONARY[trimmed]) {
                            node.nodeValue = text.replace(trimmed, DICTIONARY[trimmed]);
                        }
                    } else {
                        // Restore English
                        if (node.__origEnText) {
                            node.nodeValue = node.__origEnText;
                        } else {
                            const trimmed = text.trim();
                            if (REVERSE_DICT[trimmed]) {
                                node.nodeValue = text.replace(trimmed, REVERSE_DICT[trimmed]);
                            }
                        }
                    }
                }
            });
        });

        // Translate Form Placeholders & Inputs
        const inputs = document.querySelectorAll("input, textarea");
        inputs.forEach(function (input) {
            const ph = input.getAttribute("placeholder");
            if (ph) {
                if (!input.__origPlaceholder) {
                    input.__origPlaceholder = ph;
                }
                if (targetLang === "ta") {
                    const trimmed = ph.trim();
                    if (DICTIONARY[trimmed]) {
                        input.setAttribute("placeholder", DICTIONARY[trimmed]);
                    }
                } else {
                    input.setAttribute("placeholder", input.__origPlaceholder);
                }
            }
        });

        // Translate specific data-i18n attributes if present
        const customI18n = document.querySelectorAll("[data-i18n]");
        customI18n.forEach(function (el) {
            const key = el.getAttribute("data-i18n");
            if (targetLang === "ta" && DICTIONARY[key]) {
                el.textContent = DICTIONARY[key];
            } else if (targetLang === "en") {
                el.textContent = key;
            }
        });
    }

    /**
     * Updates UI buttons active state
     */
    function updateSwitcherButtons(lang) {
        const btns = document.querySelectorAll(".lang-btn");
        btns.forEach(function (btn) {
            const btnLang = btn.getAttribute("data-lang");
            if (btnLang === lang) {
                btn.classList.add("active");
                btn.setAttribute("aria-pressed", "true");
            } else {
                btn.classList.remove("active");
                btn.setAttribute("aria-pressed", "false");
            }
        });
    }

    /**
     * Sets site language ('en' or 'ta')
     */
    window.setSiteLanguage = function (lang) {
        if (lang !== "en" && lang !== "ta") return;
        currentLang = lang;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            console.warn("localStorage unavailable for language preference:", e);
        }

        // Set HTML lang attribute and body class
        document.documentElement.setAttribute("lang", lang);
        if (lang === "ta") {
            document.body.classList.add("lang-ta");
        } else {
            document.body.classList.remove("lang-ta");
        }

        updateSwitcherButtons(lang);
        translateDOM(lang);

        // Dispatch language change event for other components if needed
        window.dispatchEvent(new CustomEvent("siteLanguageChange", { detail: { language: lang } }));
    };

    /**
     * Binds click events to language switcher buttons
     */
    function bindLanguageButtons() {
        document.addEventListener("click", function (e) {
            const btn = e.target.closest(".lang-btn");
            if (btn) {
                e.preventDefault();
                const targetLang = btn.getAttribute("data-lang");
                if (targetLang && targetLang !== currentLang) {
                    window.setSiteLanguage(targetLang);
                }
            }
        });
    }

    /**
     * Initialize on DOM ready
     */
    function init() {
        // Read persisted language or default to 'en'
        let saved = "en";
        try {
            saved = localStorage.getItem(STORAGE_KEY) || "en";
        } catch (e) {
            saved = "en";
        }

        bindLanguageButtons();
        updateSwitcherButtons(saved);

        if (saved === "ta") {
            window.setSiteLanguage("ta");
        } else {
            document.documentElement.setAttribute("lang", "en");
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
