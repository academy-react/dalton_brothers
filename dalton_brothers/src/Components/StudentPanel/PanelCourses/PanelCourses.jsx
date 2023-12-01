import React, { useState, useEffect } from "react";
import { MyCourse } from "./Component/MyCourse/MyCourse";
import { basicGet } from "../../../Core/Services/api/course/courseList/courseList";
import { useDispatch, useSelector } from "react-redux";
import { onMoneyChange } from "../../../Redux/money";
import {
  getItem,
  setItem,
} from "../../../Core/Services/common/storage.services";


const PanelCourses = () => {
  const [courseListCount, setCourseListCount] = useState(null);
  const [courseList, setCourseList] = useState(null);
  const [reservedCourses, setReservedCourses] = useState([]);
  const [allCosts, setAllCosts] = useState("پرداخت شد");
  const payCheck = getItem("payCheck");
  const money = useSelector((state) => state.money.money);
  const dispatch = useDispatch();

  console.log(payCheck);
  const getCount = async () => {
    const count = await basicGet("/SharePanel/GetMyCoursesReserve");
    setCourseListCount(count);
    const result = await basicGet("/Home/GetCoursesWithPagination");
    setCourseList(result.courseFilterDtos);
  };

  const getCourseDetail = async () => {
    if (courseList) {
      const reservedCoursesArray = courseListCount.map((el) =>
        courseList.filter((ele) => ele.courseId === el.courseId)
      );
      const reservedCourses = reservedCoursesArray.map((el) => el[0]);
      setReservedCourses(reservedCourses);
    }
  };
  function SumCalculator() {
    if (reservedCourses && !payCheck) {
      const costArray = reservedCourses.map((el) => el.cost);
      const numbers = costArray;
      const sum = numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
      setAllCosts(sum);
    }
  }
  const handlePay = () => {
    if (money >= allCosts) {
      alert("پرداخت با موفقیت انجام شد");
      dispatch(onMoneyChange(money - allCosts));
      setAllCosts("پرداخت شد");
      setItem("payCheck", true);
    } else if (allCosts > money) {
      alert("شارژ حساب شما به اندازه ی کافی نیست");
    }
  };
  useEffect(() => {
    getCount();
  }, []);
  useEffect(() => {
    getCourseDetail();
  }, [courseList]);
  useEffect(() => {
    SumCalculator();
  }, [reservedCourses]);
  return (
    <>
      {reservedCourses.length !== 0 ? (
        <>
          <div className=" flex flex-row-reverse items-start gap-16 justify-between w-full pt-[10px]">
            <div className=" w-full h-full flex flex-col pt-7 px-2 font-irSans">
              <div className=" w-full h-[100px] flex xl:justify-evenly justify-start items-center flex-row-reverse xl:text-xl text-lg whitespace-nowrap">
                <div className="w-[80px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  تصویر
                </div>
                <div className="w-[210px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  نام دوره
                </div>
                <div className="w-[170px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  مدرس
                </div>
                <div className="w-[130px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  وضعیت
                </div>
                <div className="w-[130px] h-[50px] text-center text-gray-600 dark:text-mode-200">
                  قیمت
                </div>
                <div className="w-[150px] h-[50px] text-center text-gray-600 "></div>
              </div>
              <div className="w-full min-h-[200px]  h-[500px] overflow-scroll pt-3 flex flex-col gap-1">
                {reservedCourses.map((item, index) => (
                  <MyCourse
                    coursePic={item.tumbImageAddress}
                    courseName={item.title}
                    courseMaster={item.teacherName}
                    term={item.statusName}
                    state={item.levelName}
                    price={item.cost}
                    key={index}
                    courseId={item.courseId}
                    reserveId={courseListCount[index].reserveId}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center gap-[10px] font-irSBold text-[#636363] mt-[160px]">
              <div className=" rounded-lg w-[300px] h-[50px] flex flex-wrap flex-row-reverse gap-[5px] justify-center items-center bg-[#fff2da] dark:bg-DarkPallete-50">
                <span>مجموع</span>:<span>{allCosts}</span>
              </div>
              <button
                className="w-full h-[50px] bg-pallete-100 transition-all hover:bg-[#f59e0b] dark:bg-DarkPallete-100 text-mode-50 rounded-lg"
                onClick={handlePay}
              >
                پرداخت
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-[75vw] h-[700px] flex justify-center items-center">
          <p className="font-irSBold text-[#636363] bg-[#fff2da] w-[500px] h-[200px] flex justify-center items-center rounded-lg">
            دوره ای برای نمایش وجود ندارد برای رزرو دوره به لیست دوره ها بروید
          </p>
        </div>
      )}
    </>
  );
};

export { PanelCourses };
