import security from "../../assets/Images/security.png";
import math from "../../assets/Images/math.png";
import web from "../../assets/Images/web.png";
import language from "../../assets/Images/language.png";
import it from "../../assets/Images/it.png";
import graphic from "../../assets/Images/graphic.png";
import computer from "../../assets/Images/computer.png";
import ai from "../../assets/Images/ai.png";
import WarrantyIcon from "../../assets/Images/WarrantyIcon.png";
import SupportIcon from "../../assets/Images/SupportIcon.png";
import communication from "../../assets/Images/communication.png";
import JobChances from "../../assets/Images/JobChances.png";

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
];
const CatData = [
  {
    imgPath: web,
    title: "وب",
  },
  {
    imgPath: computer,
    title: "شبکه",
  },
  {
    imgPath: it,
    title: "ای تی",
  },
  {
    imgPath: security,
    title: "امنیت",
  },
  {
    imgPath: graphic,
    title: "گرافیک",
  },
  {
    imgPath: ai,
    title: "هوش مصنوعی",
  },
  {
    imgPath: language,
    title: "زبان انگلیسی",
  },
  {
    imgPath: math,
    title: "ریاضی",
  },
];

const ServiceData = [
  {
    imgPath: WarrantyIcon,
    title: "مدرک معتبر",
  },
  {
    imgPath: SupportIcon,
    title: "فرصت های شغلی",
  },
  {
    imgPath: communication,
    title: "پشتیبانی 24 ساعته",
  },
  {
    imgPath: JobChances,
    title: "مشاوره",
  },
];

export { courseData, newsData, masterData, relatedData, CatData, ServiceData };
