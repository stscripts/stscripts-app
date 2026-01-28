// Firestore Database Setup Script
// Run this in Firebase Console > Firestore > Rules tab

// First, update your Firestore rules:
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all documents
    match /{document=**} {
      allow read: if true;

      // Allow write access for contacts collection
      match /contacts/{docId} {
        allow write: if true;
      }

      // Restrict write access to services, portfolio, and team (admin only)
      match /services/{docId} {
        allow write: if false; // Change to true temporarily when adding data
      }

      match /portfolio/{docId} {
        allow write: if false; // Change to true temporarily when adding data
      }

      match /team/{docId} {
        allow write: if false; // Change to true temporarily when adding data
      }
    }
  }
}
*/

// Then run this script in Firebase Console > Firestore > Data tab
// Click on "Start collection" and manually add these documents:

console.log("=== FIRESTORE COLLECTIONS SETUP ===");

// ==========================================
// COLLECTION: services
// ==========================================
console.log("\n1. Create 'services' collection with these documents:");

const servicesData = [
  {
    id: "service_001",
    title: "تصميم المواقع الإلكترونية",
    description: "نقوم بتصميم وتطوير مواقع إلكترونية عصرية وسريعة ومتجاوبة مع جميع الأجهزة باستخدام أحدث التقنيات",
    icon: "globe",
    features: [
      "تصميم متجاوب مع جميع الأجهزة",
      "سرعة عالية في التحميل",
      "تحسين محركات البحث SEO",
      "لوحة تحكم سهلة الاستخدام",
      "استضافة مجانية لسنة واحدة"
    ],
    order: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "service_002",
    title: "تطوير تطبيقات الموبايل",
    description: "تطوير تطبيقات الهواتف الذكية لأنظمة iOS و Android بأحدث التقنيات والأدوات العصرية",
    icon: "iphone",
    features: [
      "تطبيقات iOS و Android أصلية",
      "واجهات مستخدم عصرية وسهلة",
      "أداء سريع ومستقر",
      "دعم للإشعارات الفورية",
      "ربط مع قواعد البيانات"
    ],
    order: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "service_003",
    title: "المتاجر الإلكترونية",
    description: "إنشاء متاجر إلكترونية شاملة مع أنظمة الدفع والشحن والإدارة المتقدمة",
    icon: "cart",
    features: [
      "بوابات دفع آمنة ومتعددة",
      "إدارة المنتجات والمخزون",
      "نظام الشحن والتوصيل",
      "تقارير المبيعات التفصيلية",
      "دعم العملات المتعددة"
    ],
    order: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "service_004",
    title: "تصميم الهوية التجارية",
    description: "تصميم شعارات وهوية بصرية متكاملة للشركات والمؤسسات مع دليل استخدام شامل",
    icon: "paintbrush",
    features: [
      "تصميم الشعارات الاحترافية",
      "بطاقات العمل والمراسلات",
      "الأوراق الرسمية والفواتير",
      "دليل الهوية البصرية",
      "تصميم مواد التسويق"
    ],
    order: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "service_005",
    title: "تصميم UI/UX",
    description: "تصميم تجربة مستخدم مميزة وواجهات تفاعلية احترافية تضمن رضا العملاء",
    icon: "pencil.and.outline",
    features: [
      "دراسة تجربة المستخدم UX",
      "النماذج الأولية والتفاعلية",
      "اختبار قابلية الاستخدام",
      "تصميم واجهات متجاوبة",
      "أدلة التصميم المفصلة"
    ],
    order: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "service_006",
    title: "الصيانة والتطوير",
    description: "خدمات الصيانة والتحديث المستمر للمواقع والتطبيقات مع دعم فني متواصل",
    icon: "wrench.and.screwdriver",
    features: [
      "صيانة دورية ومنتظمة",
      "تحديثات أمنية مستمرة",
      "نسخ احتياطية تلقائية",
      "دعم فني 24/7",
      "تقارير الأداء الشهرية"
    ],
    order: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

console.log("Services data:", JSON.stringify(servicesData, null, 2));

// ==========================================
// COLLECTION: portfolio
// ==========================================
console.log("\n2. Create 'portfolio' collection with these documents:");

const portfolioData = [
  {
    id: "project_001",
    title: "متجر الأزياء العصرية",
    description: "متجر إلكتروني شامل للأزياء النسائية والرجالية مع نظام دفع آمن ولوحة تحكم متقدمة لإدارة المنتجات والطلبات",
    imageURL: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    category: "متجر إلكتروني",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe Payment", "AWS"],
    clientName: "شركة الأناقة للأزياء",
    projectDate: "2024-01-15",
    projectURL: "https://fashion-store-demo.com",
    features: [
      "واجهة عصرية ومتجاوبة",
      "نظام دفع آمن متعدد الوسائل",
      "إدارة المخزون التلقائية",
      "نظام التقييمات والمراجعات"
    ],
    order: 1,
    status: "completed",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "project_002",
    title: "تطبيق توصيل الطعام",
    description: "تطبيق موبايل لطلب وتوصيل الطعام مع تتبع الطلبات في الوقت الفعلي ونظام تقييم المطاعم",
    imageURL: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
    category: "تطبيق موبايل",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe", "FCM"],
    clientName: "شركة وجبتي للتوصيل",
    projectDate: "2024-02-20",
    projectURL: "https://food-delivery-app.com",
    features: [
      "تتبع الطلبات المباشر",
      "خرائط تفاعلية للتوصيل",
      "نظام تقييم المطاعم",
      "إشعارات فورية"
    ],
    order: 2,
    status: "completed",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "project_003",
    title: "موقع شركة استشارات",
    description: "موقع إلكتروني احترافي لشركة استشارات مع نظام حجز المواعيد وإدارة العملاء",
    imageURL: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    category: "موقع إلكتروني",
    technologies: ["WordPress", "PHP", "MySQL", "Calendar API", "PayPal"],
    clientName: "مجموعة الخبراء للاستشارات",
    projectDate: "2024-03-10",
    projectURL: "https://experts-consulting.com",
    features: [
      "نظام حجز المواعيد الذكي",
      "إدارة ملفات العملاء",
      "تقارير الأداء التفصيلية",
      "بوابة العملاء الخاصة"
    ],
    order: 3,
    status: "completed",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "project_004",
    title: "تطبيق إدارة المهام",
    description: "تطبيق ويب لإدارة المهام والمشاريع مع فريق العمل وتتبع التقدم والإنتاجية",
    imageURL: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    category: "تطبيق ويب",
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis", "WebSocket"],
    clientName: "شركة المشاريع الذكية",
    projectDate: "2024-04-05",
    projectURL: "https://smart-tasks.com",
    features: [
      "إدارة الفرق والمشاريع",
      "تتبع الوقت والإنتاجية",
      "تقارير الأداء المرئية",
      "التعاون المباشر بين الأعضاء"
    ],
    order: 4,
    status: "completed",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "project_005",
    title: "هوية بصرية لمطعم",
    description: "تصميم هوية بصرية متكاملة لسلسلة مطاعم مع الشعار والقوائم والمواد التسويقية",
    imageURL: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    category: "هوية بصرية",
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
    clientName: "مطاعم الذوق الأصيل",
    projectDate: "2024-05-12",
    projectURL: "https://authentic-taste.com",
    features: [
      "شعار احترافي متعدد الاستخدامات",
      "قوائم طعام تفاعلية",
      "مواد تسويقية شاملة",
      "دليل الهوية البصرية"
    ],
    order: 5,
    status: "completed",
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "project_006",
    title: "منصة تعليمية",
    description: "منصة تعليمية تفاعلية مع نظام إدارة الكورسات والطلاب والاختبارات الإلكترونية",
    imageURL: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    category: "منصة تعليمية",
    technologies: ["Angular", "Spring Boot", "MySQL", "Video.js", "WebRTC"],
    clientName: "أكاديمية المستقبل التعليمية",
    projectDate: "2024-06-18",
    projectURL: "https://future-academy.com",
    features: [
      "فصول افتراضية تفاعلية",
      "نظام الاختبارات الذكي",
      "تتبع تقدم الطلاب",
      "مكتبة المحتوى الرقمي"
    ],
    order: 6,
    status: "completed",
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

console.log("Portfolio data:", JSON.stringify(portfolioData, null, 2));

// ==========================================
// COLLECTION: team
// ==========================================
console.log("\n3. Create 'team' collection with these documents:");

const teamData = [
  {
    id: "team_001",
    name: "أحمد محمد الشريف",
    position: "مدير المشاريع التقنية",
    bio: "خبرة أكثر من 8 سنوات في إدارة المشاريع التقنية وقيادة الفرق متعددة التخصصات في تطوير الحلول الرقمية المبتكرة",
    imageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    skills: [
      "إدارة المشاريع التقنية",
      "التخطيط الاستراتيجي",
      "قيادة الفرق",
      "إدارة الجودة",
      "Agile & Scrum"
    ],
    experience: "8+ سنوات",
    education: "ماجستير إدارة أعمال",
    email: "ahmed@designstudio.com",
    linkedin: "https://linkedin.com/in/ahmed-alshareef",
    order: 1,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "team_002",
    name: "فاطمة أحمد النور",
    position: "مصممة UI/UX رئيسية",
    bio: "متخصصة في تصميم تجربة المستخدم والواجهات التفاعلية العصرية مع خبرة عميقة في البحث التسويقي وسلوك المستخدمين",
    imageURL: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400&h=400&fit=crop",
    skills: [
      "تصميم UI/UX",
      "Figma",
      "Adobe Creative Suite",
      "User Research",
      "Prototyping",
      "Design Systems"
    ],
    experience: "6+ سنوات",
    education: "بكالوريوس تصميم جرافيكي",
    email: "fatima@designstudio.com",
    behance: "https://behance.net/fatima-alnoor",
    order: 2,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "team_003",
    name: "خالد سالم التميمي",
    position: "مطور Frontend أول",
    bio: "مطور متخصص في تقنيات الواجهة الأمامية والتطبيقات التفاعلية مع خبرة واسعة في أحدث الأطر والمكتبات البرمجية",
    imageURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    skills: [
      "React.js",
      "Vue.js",
      "JavaScript/TypeScript",
      "HTML5/CSS3",
      "Responsive Design",
      "Performance Optimization"
    ],
    experience: "5+ سنوات",
    education: "بكالوريوس علوم حاسوب",
    email: "khalid@designstudio.com",
    github: "https://github.com/khalid-tamimi",
    order: 3,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "team_004",
    name: "مريم علي الخضراء",
    position: "مطورة Backend أولى",
    bio: "متخصصة في تطوير الخوادم وقواعد البيانات والأنظمة المعقدة مع خبرة في البنية السحابية والأمان الرقمي",
    imageURL: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    skills: [
      "Node.js",
      "Python/Django",
      "MongoDB/PostgreSQL",
      "AWS/Azure",
      "API Development",
      "System Architecture"
    ],
    experience: "7+ سنوات",
    education: "ماجستير هندسة برمجيات",
    email: "mariam@designstudio.com",
    linkedin: "https://linkedin.com/in/mariam-alkhadraa",
    order: 4,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "team_005",
    name: "محمد عبدالرحمن القحطاني",
    position: "مطور تطبيقات الموبايل",
    bio: "خبير في تطوير تطبيقات iOS و Android مع تركيز على الأداء العالي وتجربة المستخدم المميزة",
    imageURL: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    skills: [
      "Swift/iOS",
      "Kotlin/Android",
      "Flutter",
      "React Native",
      "Mobile UI/UX",
      "App Store Optimization"
    ],
    experience: "4+ سنوات",
    education: "بكالوريوس هندسة حاسوب",
    email: "mohammed@designstudio.com",
    github: "https://github.com/m-alqahtani",
    order: 5,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "team_006",
    name: "نورا سعد المالكي",
    position: "مختصة التسويق الرقمي",
    bio: "خبيرة في التسويق الرقمي والمحتوى مع تركيز على نمو الأعمال والوصول للجمهور المستهدف بفعالية عالية",
    imageURL: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    skills: [
      "Digital Marketing",
      "Content Strategy",
      "SEO/SEM",
      "Social Media Management",
      "Analytics",
      "Brand Management"
    ],
    experience: "5+ سنوات",
    education: "بكالوريوس إدارة أعمال",
    email: "nora@designstudio.com",
    linkedin: "https://linkedin.com/in/nora-almalki",
    order: 6,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

console.log("Team data:", JSON.stringify(teamData, null, 2));

// ==========================================
// COLLECTION: company_info
// ==========================================
console.log("\n4. Create 'company_info' collection with this document:");

const companyInfo = {
  id: "main_info",
  companyName: "شركة سوبر تكنو",
  companyNameEn: "Digital Design Studio",
  tagline: "نحن نبني المستقبل الرقمي",
  taglineEn: "We Build The Digital Future",
  description: "شركة رائدة في مجال التصميم والتطوير الرقمي، نقدم حلولاً مبتكرة ومتكاملة للشركات والمؤسسات",
  vision: "أن نكون الشركة الرائدة في المنطقة لتقديم الحلول الرقمية المبتكرة",
  mission: "نسعى لتمكين عملائنا من النجاح في العالم الرقمي من خلال تقديم خدمات عالية الجودة ومبتكرة",
  founded: "2020",
  employees: "25+",
  projectsCompleted: "150+",
  clientsSatisfied: "100+",
  yearsOfExperience: "4+",
  contact: {
    phone: "+966 50 123 4567",
    whatsapp: "+966 50 123 4567",
    email: "info@designstudio.sa",
    website: "https://designstudio.sa",
    address: {
      ar: "الرياض، المملكة العربية السعودية",
      en: "Riyadh, Saudi Arabia"
    }
  },
  socialMedia: {
    twitter: "https://twitter.com/designstudio_sa",
    instagram: "https://instagram.com/designstudio_sa",
    linkedin: "https://linkedin.com/company/designstudio-sa",
    behance: "https://behance.net/designstudio-sa"
  },
  workingHours: {
    ar: "الأحد - الخميس: 9:00 ص - 6:00 م",
    en: "Sunday - Thursday: 9:00 AM - 6:00 PM"
  },
  certifications: [
    "Google Partner",
    "AWS Certified",
    "Adobe Certified Expert"
  ],
  awards: [
    "أفضل شركة ناشئة في التكنولوجيا 2023",
    "جائزة التميز في التصميم 2024"
  ],
  createdAt: new Date(),
  updatedAt: new Date()
};

console.log("Company info:", JSON.stringify(companyInfo, null, 2));

console.log("\n=== SETUP COMPLETE ===");
console.log("Now manually create these collections in your Firestore console!");
console.log("1. Go to Firebase Console > Firestore Database");
console.log("2. Click 'Start collection'");
console.log("3. Create each collection with the data above");
console.log("4. Remember to update your security rules!");

// Helper function to format data for manual entry
function formatForFirestore(data) {
  return JSON.stringify(data, null, 2);
}