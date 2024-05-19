
async function  F() {
  
  
  const data = await fetch("https://app-isuues-nextjs2.vercel.app/").then(
    async (data) => {
      return await data.json();
    }
  ); // تحويل الاستجابة إلى JSON
     // التعامل مع البيانات
     console.log(data)
    .catch((error) => console.error("Error:", error)); // التعامل مع الأخطاء


}
F()