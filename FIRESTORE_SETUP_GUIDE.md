# 🔥 دليل إعداد Firestore Database

## الخطوة 1: إنشاء مشروع Firebase

1. انتقل إلى [Firebase Console](https://console.firebase.google.com/)
2. انقر على "إنشاء مشروع" / "Create a project"
3. اختر اسم للمشروع مثل: `design-studio-app`
4. فعّل Google Analytics (اختياري)
5. انقر على "إنشاء المشروع"

## الخطوة 2: إعداد Firestore Database

1. في لوحة Firebase، انقر على **"Firestore Database"** من القائمة الجانبية
2. انقر على **"Create database"**
3. اختر **"Start in test mode"** (سنغير القواعد لاحقاً)
4. اختر موقع قاعدة البيانات (اختر أقرب موقع لك)
5. انقر على **"Done"**

## الخطوة 3: إنشاء المجموعات والبيانات

### 🔧 المجموعة 1: `services`

انقر على "Start collection" واكتب `services` كاسم للمجموعة

أضف هذه الوثائق:

#### الوثيقة 1: `service_001`
```json
{
  "title": "تصميم المواقع الإلكترونية",
  "description": "نقوم بتصميم وتطوير مواقع إلكترونية عصرية وسريعة ومتجاوبة مع جميع الأجهزة",
  "icon": "globe",
  "features": [
    "تصميم متجاوب مع جميع الأجهزة",
    "سرعة عالية في التحميل",
    "تحسين محركات البحث SEO",
    "لوحة تحكم سهلة الاستخدام"
  ],
  "order": 1
}
```

#### الوثيقة 2: `service_002`
```json
{
  "title": "تطوير تطبيقات الموبايل",
  "description": "تطوير تطبيقات الهواتف الذكية لأنظمة iOS و Android بأحدث التقنيات",
  "icon": "iphone",
  "features": [
    "تطبيقات iOS و Android أصلية",
    "واجهات مستخدم عصرية وسهلة",
    "أداء سريع ومستقر",
    "دعم للإشعارات الفورية"
  ],
  "order": 2
}
```

#### الوثيقة 3: `service_003`
```json
{
  "title": "المتاجر الإلكترونية",
  "description": "إنشاء متاجر إلكترونية شاملة مع أنظمة الدفع والشحن والإدارة",
  "icon": "cart",
  "features": [
    "بوابات دفع آمنة ومتعددة",
    "إدارة المنتجات والمخزون",
    "نظام الشحن والتوصيل",
    "تقارير المبيعات التفصيلية"
  ],
  "order": 3
}
```

### 📱 المجموعة 2: `portfolio`

أنشئ مجموعة جديدة باسم `portfolio`

#### الوثيقة 1: `project_001`
```json
{
  "title": "متجر الأزياء العصرية",
  "description": "متجر إلكتروني شامل للأزياء النسائية مع نظام دفع آمن ولوحة تحكم متقدمة",
  "imageURL": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
  "category": "متجر إلكتروني",
  "technologies": ["React", "Node.js", "MongoDB", "Stripe"],
  "order": 1
}
```

#### الوثيقة 2: `project_002`
```json
{
  "title": "تطبيق توصيل الطعام",
  "description": "تطبيق موبايل لطلب وتوصيل الطعام مع تتبع الطلبات في الوقت الفعلي",
  "imageURL": "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800",
  "category": "تطبيق موبايل",
  "technologies": ["Flutter", "Firebase", "Google Maps"],
  "order": 2
}
```

#### الوثيقة 3: `project_003`
```json
{
  "title": "موقع شركة استشارات",
  "description": "موقع إلكتروني احترافي لشركة استشارات مع نظام حجز المواعيد",
  "imageURL": "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800",
  "category": "موقع إلكتروني",
  "technologies": ["WordPress", "PHP", "MySQL"],
  "order": 3
}
```

### 👥 المجموعة 3: `team`

أنشئ مجموعة جديدة باسم `team`

#### الوثيقة 1: `team_001`
```json
{
  "name": "أحمد محمد الشريف",
  "position": "مدير المشاريع التقنية",
  "bio": "خبرة أكثر من 8 سنوات في إدارة المشاريع التقنية وقيادة الفرق",
  "imageURL": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  "skills": ["إدارة المشاريع", "التخطيط الاستراتيجي", "قيادة الفرق"],
  "order": 1
}
```

#### الوثيقة 2: `team_002`
```json
{
  "name": "فاطمة أحمد النور",
  "position": "مصممة UI/UX رئيسية",
  "bio": "متخصصة في تصميم تجربة المستخدم والواجهات التفاعلية العصرية",
  "imageURL": "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=400",
  "skills": ["Figma", "Adobe XD", "تصميم UI", "تجربة المستخدم"],
  "order": 2
}
```

### 📞 المجموعة 4: `contacts`

أنشئ مجموعة فارغة باسم `contacts` (ستُملأ تلقائياً من التطبيق)

### 🏢 المجموعة 5: `company_info`

أنشئ مجموعة باسم `company_info`

#### الوثيقة 1: `main_info`
```json
{
  "companyName": "شركة سوبر تكنو",
  "tagline": "نحن نبني المستقبل الرقمي",
  "description": "شركة رائدة في مجال التصميم والتطوير الرقمي",
  "contact": {
    "phone": "+966 50 123 4567",
    "email": "info@designstudio.sa",
    "address": "الرياض، المملكة العربية السعودية"
  },
  "workingHours": "الأحد - الخميس: 9:00 ص - 6:00 م"
}
```

## الخطوة 4: إعداد قواعد الأمان

انتقل إلى **"Rules"** في Firestore وضع هذه القواعد:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all documents
    match /{document=**} {
      allow read: if true;
    }

    // Allow write access to contacts only
    match /contacts/{docId} {
      allow write: if true;
    }

    // Restrict write access to other collections
    match /services/{docId} {
      allow write: if false; // Admin only
    }

    match /portfolio/{docId} {
      allow write: if false; // Admin only
    }

    match /team/{docId} {
      allow write: if false; // Admin only
    }

    match /company_info/{docId} {
      allow write: if false; // Admin only
    }
  }
}
```

انقر على **"Publish"** لحفظ القواعد.

## الخطوة 5: إعداد التطبيق

1. في Firebase Console، انقر على **"Project Settings"** (الترس)
2. انتقل إلى **"Your apps"**
3. انقر على **"Add app"** > **"iOS"**
4. ادخل Bundle ID: `com.designstudio.app`
5. ادخل اسم التطبيق: `Design Studio App`
6. انقر على **"Register app"**
7. حمل ملف `GoogleService-Info.plist`
8. ضعه في مجلد `stscripts` في Xcode

## الخطوة 6: تحديث التطبيق

الآن يمكنك إضافة Firebase إلى Podfile:

```ruby
# أضف هذه السطور إلى Podfile
pod 'Firebase/Analytics'
pod 'Firebase/Firestore'
pod 'Firebase/Auth'
```

ثم شغل:
```bash
cd /path/to/stscripts
pod install
```

## 🎉 انتهيت!

الآن لديك قاعدة بيانات Firestore جاهزة مع:
- ✅ 6 خدمات للشركة
- ✅ 6 مشاريع في معرض الأعمال
- ✅ 6 أعضاء في الفريق
- ✅ معلومات الشركة
- ✅ قواعد أمان محكمة

يمكن للتطبيق الآن قراءة البيانات من Firestore وعرضها بشكل ديناميكي! 🚀