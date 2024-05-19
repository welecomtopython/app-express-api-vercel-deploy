fetch("https://app-isuues-nextjs2.vercel.app/")
  .then((response) => response.json()) // تحويل الاستجابة إلى JSON
  .then((data) => console.log(data)) // التعامل مع البيانات
  .catch((error) => console.error("Error:", error)); // التعامل مع الأخطاء
