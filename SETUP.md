# تطبيق شركة سوبر تكنو - DesignStudio App

تطبيق iOS عصري لشركة تصميم المواقع والتطبيقات مرتبط بقاعدة بيانات Firebase.

## المتطلبات

- Xcode 14.0 أو أحدث
- iOS 13.0 أو أحدث
- حساب Firebase
- CocoaPods

## الإعداد

### 1. تثبيت التبعيات

```bash
cd /path/to/project/stscripts
pod install
```

### 2. فتح المشروع

**مهم جداً**: افتح ملف `stscripts.xcworkspace` (وليس `.xcodeproj`)

### 3. تشغيل التطبيق

- اختر جهاز المحاكي أو iPhone
- اضغط على زر Run أو Cmd+R

### 4. إضافة Firebase (اختياري)

إذا كنت تريد إضافة Firebase لاحقاً:

1. انتقل إلى [Firebase Console](https://console.firebase.google.com/)
2. أنشئ مشروع جديد
3. أضف تطبيق iOS للمشروع
4. حمل ملف `GoogleService-Info.plist`
5. استبدل الملف الموجود في المشروع
6. أضف Firebase إلى Podfile
7. قم بتشغيل `pod install`

## الميزات

### ✅ الميزات المكتملة

- **واجهة رئيسية عصرية** مع تدرج لوني جميل
- **عرض الخدمات** في CollectionView أفقي
- **معرض الأعمال** مع صور وتفاصيل المشاريع
- **نموذج التواصل** متكامل مع Firebase
- **تصميم متجاوب** يدعم جميع أحجام الشاشات
- **نظام ألوان عصري** موحد عبر التطبيق

### 🎨 التصميم

- تدرج لوني أزرق داكن عصري
- خطوط واضحة ومقروءة
- ظلال ناعمة وحدود دقيقة
- أيقونات SF Symbols
- دعم كامل للغة العربية

### 🔧 التقنيات المستخدمة

- **UIKit** - الواجهة الأساسية
- **SnapKit** - Auto Layout المبسط
- **IQKeyboardManager** - إدارة لوحة المفاتيح
- **CocoaPods** - إدارة التبعيات

### 🔮 تقنيات مخطط إضافتها

- **Firebase Firestore** - قاعدة البيانات
- **Kingfisher** - تحميل الصور
- **Alamofire** - طلبات الشبكة

### 📱 الشاشات

1. **الشاشة الرئيسية**
   - شعار الشركة
   - نبذة تعريفية
   - عرض الخدمات
   - معرض الأعمال
   - زر التواصل

2. **شاشة التواصل**
   - نموذج معلومات العميل
   - اختيار نوع المشروع
   - رسالة مخصصة
   - إرسال للـ Firebase

## البنية

```
stscripts/
├── AppDelegate.swift          # إعداد التطبيق الأساسي
├── ViewController.swift       # الشاشة الرئيسية
├── ContactViewController.swift # شاشة التواصل
├── FirebaseManager.swift      # إدارة Firebase
├── Models.swift              # نماذج البيانات
├── DesignSystem.swift        # نظام التصميم
├── DataSeeder.swift          # البيانات التجريبية
├── ServiceCollectionViewCell.swift    # خلية الخدمات
├── PortfolioCollectionViewCell.swift  # خلية الأعمال
└── GoogleService-Info.plist  # إعدادات Firebase
```

## التخصيص

### تغيير ألوان الشركة

في `DesignSystem.swift`:
```swift
static let primary = UIColor(red: 0.2, green: 0.6, blue: 1.0, alpha: 1.0)
```

### تحديث معلومات الشركة

في `ViewController.swift`:
```swift
companyNameLabel.text = "اسم شركتك"
taglineLabel.text = "شعار شركتك"
```

### إضافة خدمات جديدة

أضف البيانات إلى مجموعة `services` في Firestore:
```json
{
  "title": "اسم الخدمة",
  "description": "وصف الخدمة",
  "icon": "اسم الأيقونة",
  "features": ["ميزة 1", "ميزة 2"],
  "order": 1
}
```

## الدعم

للحصول على المساعدة أو الإبلاغ عن المشاكل، يرجى إنشاء Issue في GitHub.

## الترخيص

هذا المشروع مفتوح المصدر تحت رخصة MIT.