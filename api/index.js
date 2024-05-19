
async function  F() {
  
  
  const data = await fetch(
    "https://app-isuues-nextjs2-ctfuzmb2t-welecomtopythons-projects.vercel.app/"
  )
   .then(async (response) =>  await response) // تحويل الاستجابة إلى JSON
    .then((data) => console.log(data)) // التعامل مع البيانات
    .catch((error) => console.error("Error:", error)); // التعامل مع الأخطاء
}
F()