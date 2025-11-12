
import { LANGUAGES } from '../constants';

export const translations: Record<string, Record<string, string>> = {
  English: {
    // Header
    selectLanguage: 'Select language',
    openUserProfile: 'Open user profile',
    close: 'Close',
    accountType: 'Account Type',
    language: 'Language',
    // BottomNav
    home: 'Home',
    schedule: 'Schedule',
    consult: 'Consult',
    chat: 'Chat',
    tips: 'Tips',
    inventory: 'Inventory',
    dashboard: 'Dashboard',
    // Villager Dashboard
    welcomeMessage: 'Welcome, Sunita!',
    howCanWeHelp: 'How can we help you today?',
    teleConsult: 'Tele-Consult',
    talkToDoctor: 'Talk to a doctor now',
    clinicSchedule: 'Clinic Schedule',
    findHealthVans: 'Find nearby health vans',
    healthTips: 'Health Tips',
    getDailyHealthAdvice: 'Get daily health advice',
    healthBot: 'Health Bot',
    askHealthQuestions: 'Ask health questions',
    orderMedicine: 'Order Medicine',
    requestRefill: 'Request a refill',
    myRecords: 'My Records',
    viewHealthHistory: 'View your health history',
    requestAmbulance: 'Request Ambulance',
    forMedicalEmergencies: 'For medical emergencies',
    // Order Medicine
    orderMedicineTitle: 'Order Medicine',
    orderMedicineDescription: 'Get your medicines delivered to your doorstep.',
    searchMedicinePlaceholder: 'Search for medicines...',
    uploadPrescription: 'Upload Prescription',
    dropFilesToAttach: 'Drop files to Attach, or browse',
    specialOffers: 'Special Offers',
    paracetamolOffer: 'Flat 15% OFF',
    orsOffer: 'Buy 5 Get 1 Free',
    govtSchemes: 'Government Schemes',
    learnAboutSchemesShort: 'Learn about Govt. schemes',
    learnAboutSchemesLong: 'Learn about Govt. schemes for free/subsidized medicines.',
    placeOrder: 'Place Order',
    orderPlacedTitle: 'Order Placed!',
    orderPlacedDescription: 'Your order has been received. You will get an SMS confirmation shortly.',
    orderAnother: 'Order More Medicine',
    generatingInfo: 'Generating information...',
    govtSchemesAITitle: 'Govt. Medicine Schemes',
    // Clinic Schedule
    clinicScheduleTitle: 'Clinic Schedule',
    clinicScheduleDescription: 'Upcoming mobile health van visits.',
    setReminder: 'Set Reminder',
    // Book Appointment
    bookAppointmentTitle: 'Book Tele-Consult',
    bookAppointmentDescription: 'Describe your symptoms to connect with a doctor.',
    describeSymptomsLabel: 'Describe your symptoms',
    symptomsPlaceholder: 'e.g., I have a fever and a cough...',
    uploadPhotoLabel: 'Upload a photo (optional)',
    submitButton: 'Request Consultation',
    submittingButton: 'Submitting...',
    requestSentTitle: 'Request Sent!',
    requestSentDescription: 'A doctor will connect with you shortly. You will receive an SMS notification.',
    bookAnother: 'Book Another',
    // Ambulance Request
    ambulanceRequestTitle: 'Emergency?',
    ambulanceRequestDescription: 'Press the button below to request the nearest ambulance immediately.',
    requestAmbulanceButton: 'REQUEST AMBULANCE',
    genuineEmergenciesOnly: 'Only use for genuine medical emergencies.',
    ambulanceDispatchedTitle: 'Ambulance Dispatched!',
    ambulanceDispatchedDescription: 'The nearest ambulance is on its way.',
    eta: 'ETA',
    vehicleNo: 'Vehicle No',
    driver: 'Driver',
    smsTrackingInfo: 'You will receive an SMS with tracking details.',
    backToHome: 'Back to Home',
    // Health Tips
    healthTipsTitle: 'Health Tips',
    healthTipsDescription: 'Get simple health advice powered by AI.',
    generatingTip: 'Generating tip about {{topic}}...',
    fetchTipError: 'Failed to fetch health tip. Please try again.',
    tipTitle: '{{topic}} Tip',
    // Health Bot
    healthBotTitle: 'Health Assistant',
    healthBotDescription: 'Chat with Asha for health advice.',
    healthBotWelcome: "Hello! I'm Asha, your personal health assistant. How can I help you today? You can ask me about general health, nutrition, or first aid.",
    healthBotOffline: "Hello! I'm Asha. The health bot is currently offline, but you can still access other features of the app.",
    typing: 'Asha is typing...',
    connectionError: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
    messagePlaceholder: 'Type your message...',
    // My Records
    myRecordsTitle: 'My Health Records',
    myRecordsDescription: 'View your prescriptions, lab reports, and consultation history here.',
    comingSoonTitle: 'Feature Coming Soon!',
    comingSoonDescription: 'We are working hard to bring this feature to you. Stay tuned!',
    // Inventory
    inventoryTitle: 'Medicine Inventory',
    inventoryDescription: 'Manage stock levels for your village kiosk.',
    requestRestock: 'Request Restock',
    // Admin
    adminDashboardTitle: 'Admin Dashboard',
    adminDashboardDescription: 'Platform analytics and overview.',
    weeklyConsultations: 'Weekly Consultations'
  },
  Hindi: {
    // Header
    selectLanguage: 'भाषा चुनें',
    openUserProfile: 'उपयोगकर्ता प्रोफ़ाइल खोलें',
    close: 'बंद करें',
    accountType: 'खाता प्रकार',
    language: 'भाषा',
    // BottomNav
    home: 'होम',
    schedule: 'शेड्यूल',
    consult: 'परामर्श',
    chat: 'बातचीत',
    tips: 'टिप्स',
    inventory: 'इन्वेंटरी',
    dashboard: 'डैशबोर्ड',
    // Villager Dashboard
    welcomeMessage: 'सुनीता, आपका स्वागत है!',
    howCanWeHelp: 'आज हम आपकी मदद कैसे कर सकते हैं?',
    teleConsult: 'टेली-परामर्श',
    talkToDoctor: 'अभी डॉक्टर से बात करें',
    clinicSchedule: 'क्लिनिक शेड्यूल',
    findHealthVans: 'आस-पास स्वास्थ्य वैन खोजें',
    healthTips: 'स्वास्थ्य टिप्स',
    getDailyHealthAdvice: 'दैनिक स्वास्थ्य सलाह प्राप्त करें',
    healthBot: 'स्वास्थ्य बॉट',
    askHealthQuestions: 'स्वास्थ्य प्रश्न पूछें',
    orderMedicine: 'दवा ऑर्डर करें',
    requestRefill: 'रिफिल का अनुरोध करें',
    myRecords: 'मेरे रिकॉर्ड',
    viewHealthHistory: 'अपना स्वास्थ्य इतिहास देखें',
    requestAmbulance: 'एम्बुलेंस बुलाएं',
    forMedicalEmergencies: 'चिकित्सा आपात स्थिति के लिए',
    // Order Medicine
    orderMedicineTitle: 'दवा ऑर्डर करें',
    orderMedicineDescription: 'अपनी दवाएं अपने दरवाजे पर मंगवाएं।',
    searchMedicinePlaceholder: 'दवाएं खोजें...',
    uploadPrescription: 'प्रिस्क्रिप्शन अपलोड करें',
    dropFilesToAttach: 'फाइलें संलग्न करने के लिए यहां खींचें, या ब्राउज़ करें',
    specialOffers: 'विशेष ऑफर',
    paracetamolOffer: '15% की छूट',
    orsOffer: '5 खरीदें 1 मुफ्त पाएं',
    govtSchemes: 'सरकारी योजनाएं',
    learnAboutSchemesShort: 'सरकारी योजनाओं के बारे में जानें',
    learnAboutSchemesLong: 'मुफ्त/सब्सिडी वाली दवाओं के लिए सरकारी योजनाओं के बारे में जानें।',
    placeOrder: 'ऑर्डर दें',
    orderPlacedTitle: 'ऑर्डर हो गया!',
    orderPlacedDescription: 'आपका ऑर्डर मिल गया है। आपको जल्द ही एक एसएमएस पुष्टि मिलेगी।',
    orderAnother: 'और दवा ऑर्डर करें',
    generatingInfo: 'जानकारी तैयार की जा रही है...',
    govtSchemesAITitle: 'सरकारी दवा योजनाएं',
    // Clinic Schedule
    clinicScheduleTitle: 'क्लिनिक शेड्यूल',
    clinicScheduleDescription: 'आगामी मोबाइल स्वास्थ्य वैन विज़िट।',
    setReminder: 'रिमाइंडर सेट करें',
    // Book Appointment
    bookAppointmentTitle: 'टेली-परामर्श बुक करें',
    bookAppointmentDescription: 'डॉक्टर से जुड़ने के लिए अपने लक्षण बताएं।',
    describeSymptomsLabel: 'अपने लक्षण बताएं',
    symptomsPlaceholder: 'जैसे, मुझे बुखार और खांसी है...',
    uploadPhotoLabel: 'एक फोटो अपलोड करें (वैकल्पिक)',
    submitButton: 'परामर्श का अनुरोध करें',
    submittingButton: 'सबमिट हो रहा है...',
    requestSentTitle: 'अनुरोध भेजा गया!',
    requestSentDescription: 'एक डॉक्टर जल्द ही आपसे संपर्क करेगा। आपको एक एसएमएस सूचना मिलेगी।',
    bookAnother: 'एक और बुक करें',
    // Ambulance Request
    ambulanceRequestTitle: 'आपातकाल?',
    ambulanceRequestDescription: 'निकटतम एम्बुलेंस को तुरंत अनुरोध करने के लिए नीचे दिए गए बटन को दबाएं।',
    requestAmbulanceButton: 'एम्बुलेंस बुलाएं',
    genuineEmergenciesOnly: 'केवल वास्तविक चिकित्सा आपात स्थितियों के लिए उपयोग करें।',
    ambulanceDispatchedTitle: 'एम्बुलेंस भेज दी गई!',
    ambulanceDispatchedDescription: 'निकटतम एम्बुलेंस रास्ते में है।',
    eta: 'आगमन समय',
    vehicleNo: 'गाड़ी नंबर',
    driver: 'चालक',
    smsTrackingInfo: 'आपको ट्रैकिंग विवरण के साथ एक एसएमएस प्राप्त होगा।',
    backToHome: 'होम पर वापस जाएं',
    // Health Tips
    healthTipsTitle: 'स्वास्थ्य टिप्स',
    healthTipsDescription: 'एआई द्वारा संचालित सरल स्वास्थ्य सलाह प्राप्त करें।',
    generatingTip: '{{topic}} के बारे में टिप बना रहा हूँ...',
    fetchTipError: 'स्वास्थ्य टिप लाने में विफल। कृपया पुन: प्रयास करें।',
    tipTitle: '{{topic}} टिप',
    // Health Bot
    healthBotTitle: 'स्वास्थ्य सहायक',
    healthBotDescription: 'स्वास्थ्य सलाह के लिए आशा से चैट करें।',
    healthBotWelcome: 'नमस्ते! मैं आशा हूं, आपकी व्यक्तिगत स्वास्थ्य सहायक। आज मैं आपकी कैसे मदद कर सकती हूं? आप मुझसे सामान्य स्वास्थ्य, पोषण या प्राथमिक चिकित्सा के बारे में पूछ सकते हैं।',
    healthBotOffline: 'नमस्ते! मैं आशा हूं। स्वास्थ्य बॉट वर्तमान में ऑफ़लाइन है, लेकिन आप अभी भी ऐप की अन्य सुविधाओं का उपयोग कर सकते हैं।',
    typing: 'आशा टाइप कर रही है...',
    connectionError: 'मुझे क्षमा करें, मुझे अभी कनेक्ट होने में समस्या हो रही है। कृपया बाद में पुन: प्रयास करें।',
    messagePlaceholder: 'अपना संदेश टाइप करें...',
    // My Records
    myRecordsTitle: 'मेरे स्वास्थ्य रिकॉर्ड',
    myRecordsDescription: 'अपने नुस्खे, लैब रिपोर्ट और परामर्श इतिहास यहां देखें।',
    comingSoonTitle: 'यह सुविधा जल्द ही आ रही है!',
    comingSoonDescription: 'हम इस सुविधा को आप तक लाने के लिए कड़ी मेहनत कर रहे हैं। बने रहें!',
     // Inventory
    inventoryTitle: 'दवा इन्वेंटरी',
    inventoryDescription: 'अपने गांव के कियोस्क के लिए स्टॉक स्तरों का प्रबंधन करें।',
    requestRestock: 'पुनः स्टॉक का अनुरोध करें',
    // Admin
    adminDashboardTitle: 'एडमिन डैशबोर्ड',
    adminDashboardDescription: 'प्लेटफ़ॉर्म एनालिटिक्स और अवलोकन।',
    weeklyConsultations: 'साप्ताहिक परामर्श'
  },
};

// A simple translation function
export const getTranslator = (language: string) => {
    // Fallback to English if the language or a specific key is not found
    const lang = LANGUAGES.find(l => l.name === language)?.name || 'English';
    const primaryLangDict = translations[lang] || translations['English'];
    const fallbackDict = translations['English'];

    return (key: string, options?: { [key: string]: string | number }): string => {
        let translation = primaryLangDict[key] || fallbackDict[key] || key;
        if (options) {
            Object.keys(options).forEach(optionKey => {
                translation = translation.replace(`{{${optionKey}}}`, String(options[optionKey]));
            });
        }
        return translation;
    };
};
