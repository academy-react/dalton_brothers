const courseData = [
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " عر عر", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
  { courseName: " میو میو", courseMaster: "میو میو نیگا", price: 100000 },
];
const newsData = [
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
  { topic: "هوا", author: "فرامرز", number: 12 },
];
const masterData = [
  { id: 1, master: "استاد محمد بحرالعلوم", topic: "مدیدریت پژوهشگاه" },
  { id: 2, master: "استاد حامد نظری", topic: "مدرس دوره ی دیزاین" },
  { id: 3, master: "استاد مهدی اصغری", topic: "مدرس دوره ی ری اکت" },
  { id: 4, master: "استاد محسن اسفندیاری", topic: "مدرس دوره ی ری اکت" },
];
const relatedData = [
  { courseName: " میو ", courseMaster: "میو  نیگا", price: 100000 },
  { courseName: " میو ", courseMaster: "میو  نیگا", price: 100000 },
  { courseName: " میو ", courseMaster: "میو  نیگا", price: 100000 },
]
const commentData = [
  {
    text: "خووووووووووبببب بوووووووووووود",
    userName: "سجاد",
    userLogo: "https://picsum.photos/200/300",
    reply: [],
    date: "۳۰ مرداد",
  },
  {
    text: "خوب بود",
    userName: "سجاد",
    userLogo: "https://picsum.photos/200/500",
    reply: [],
    date: "۱۰ فروردین",
  },
  {
    text: "بد بود",
    userName: "اشکان محمدی اصل",
    userLogo: "https://picsum.photos/200/400",
    reply: [],
    date: " دیروز ",
  },
]
const myCourseData = [
  {coursePic:"https://picsum.photos/200/200" , courseName: " میو ", courseMaster: "میو میو نیگا",term:"زمستان" ,date:"۱۴۰۲/۰۴/۲۹" , price: 190000 },
  {coursePic:"https://picsum.photos/200/300" , courseName: " میو میو", courseMaster: "میو میو نیگا",term:"تابستان" ,date:"۱۴۰۳/۰۸/۲۰" , price: 300000 },
  {coursePic:"https://picsum.photos/200/400" , courseName: " میو میو", courseMaster: "میو میو نیگا",term:"بهار" ,date:"۱۴۰۱/۱۲/۱۰" , price: 400000 },

];
const allCourseData = [
  {coursePic:"https://picsum.photos/200/200" , courseName: " میو ", courseMaster: "میو میو نیگا",term:"زمستان" ,date:"۱۴۰۲/۰۴/۲۹" , price: 190000 },
  {coursePic:"https://picsum.photos/200/300" , courseName: " میو میو", courseMaster: "میو میو نیگا",term:"تابستان" ,date:"۱۴۰۳/۰۸/۲۰" , price: 300000 },
  {coursePic:"https://picsum.photos/200/400" , courseName: " میو میو", courseMaster: "میو میو ",term:"بهار" ,date:"۱۴۰۱/۱۲/۱۰" , price: 980000 },
  {coursePic:"https://picsum.photos/200/500" , courseName: " ها میو", courseMaster: "میو میو نیگا",term:"بهار" ,date:"۱۴۰۱/۰۷/۱۹" , price: 1000000 },
  {coursePic:"https://picsum.photos/200/600" , courseName: " ها ها ", courseMaster: "میو  نیگا",term:"هاا" ,date:"۱۴۰۱/۰۲/۰۳" , price: 480000 },


];


export { courseData, newsData, masterData, relatedData, commentData, myCourseData, allCourseData};
