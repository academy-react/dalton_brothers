import React, { useEffect } from "react";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

const ArticleIntroduction = ({id}) => {
  const getIntro = async () => {
    const getDiscribe = await basicGet(
      `/News/${id}`
    ) 
    const fa = (getDiscribe.detailsNewsDto.describe);

    console.log(fa);
  }
  useEffect(() => {
    getIntro()
  }, [])
  
  return (
    <div>
      <div className=" w-full mt-10 ">
        {/* //////// main title /////// */}
        <h4 className=" w-full h-[50px] text-center md:text-2xl text-xl my-5 font-bold dark:text-mode-50">
          {" "}
          متن خبر{" "}
        </h4>
        <div className=" px-[40px] py-[10px] ">
          <p className="text-lg text-right my-[10px] text-gray-800 dark:text-mode-200">
            {/* {fa} */}
          </p>
        </div>
        {/* <div className=" px-[40px] py-[10px] ">
          <h5 className=" text-xl text-right font-bold"> کاربرد های پایتون </h5>
          <p className="text-lg text-right my-[10px] text-gray-800">
            هرچند که مطالعه کل این مطلب از مجله فرادرس، در افزایش شناخت و آگاهی
            فرد از زبان پایتون، قابلیت‌های آن و چرایی انتخاب پایتون موثر است.
            افراد می‌توانند از کاربرد پایتون برای اعمال علم داده و یادگیری ماشین
            در حوزه‌های گوناگون نیز برای گرفتن ایده انجام پروژه و پژوهش‌های علمی
            استفاده کنند. شایان توجه است که در هر بخش از مطلب، تلاش شده است تا
            فیلم‌های آموزش پایتون به زبان فارسی و متناسب با آن دامنه کاربرد،
            همراه با جزئیات گوناگون شامل طول مدت دوره، مدرس، سرفصل‌های تحت پوشش
            دوره و اینکه برای چه کسانی مناسب است معرفی شوند. مخاطبان می‌توانند
            از این فیلم‌های آموزش برای فراگیری پایتون برای کاربرد مورد نظر
            خودشان استفاده کنند.
          </p>
        </div> */}
        {/* <div className=" px-[40px] py-[10px] ">
          <h5 className=" text-xl text-right font-bold"> نتیجه مقاله </h5>
          <p className="text-lg text-right my-[10px] text-gray-800">
            پایتون امروزه از محبوبیت بسیار زیادی برخوردار است و برنامه‌نویسان
            زیادی یا با آن آشنایی دارند، یا به طور کامل به آن مسلط هستند و یا در
            حال/درصدد یادگیری این زبان هستند. همین امر پایتون را به گزینه‌ای
            مناسب برای این منظور مبدل می‌کند که زبان اصلی مورد استفاده برای
            پروژه‌های بزرگ نرم‌افزاری باشد. زیرا در این پروژه‌ها تعداد زیادی
            توسعه‌دهنده مشغول به فعالیت می‌شوند و گزینش یک زبان که همه افراد به
            آن مسلط باشند یا بتوان همه نیروهای پروژه را برای کار با آن آموزش
            داد، دشوار است.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export { ArticleIntroduction };
