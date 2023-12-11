import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { courseData } from "../../../../Core/Services/data";
import {
  IconBookmarks,
  IconThumbUp,
  IconThumbDown,
  IconUserCheck,
  IconStarFilled,
  IconStar,
} from "@tabler/icons-react";
import { addSave } from "../../../../Core/Services/api/course/addSave";
import { addLike } from "../../../../Core/Services/api/course/addLike";
import reservedCourse from "../../../../Redux/reservedCourse";
import { reserveCourse } from "../../../../Core/Services/api/course/reserve";

const AboutCourse = ({
  title,
  teacherName,
  cost,
  startTime,
  courseStatusName,
  courseLevelName,
  endTime,
  imageAddress,
  capacity,
  currentRate,
  courseId,
  isUserFavorite,
  userFavoriteId,
  dissLikeCount,
  currentUserLike,
  currentUserDissLike,
  courseDetailImage,
  isCourseReseve,
  isCourseUser,
  change,
  setChange,
  // reserveCourse,
}) => {
  const [save, setSave] = useState(isUserFavorite);
  const [condition, setCondition] = useState();
  const [Like, setLike] = useState();
  const [DisLike, setDisLike] = useState();

  const token = useSelector((state) => state.token.token);

  const handleSave = async () => {
    const saveData = new FormData();

    if (token) {
      if (save == false) {
        setSave(true);
        const obj = {
          courseId: courseId,
        };
        const userSave = await addSave(obj);
        // console.log(userSave);
      } else {
        setSave(false);
        try {
          saveData.append("CourseFavoriteId", userFavoriteId);

          const saveResult = await http.delete(`/Course/DeleteCourseFavorite`, {
            data: saveData,
          });
          // console.log(saveResult);
        } catch (error) {
          toast.error(error);
        }
      }
    } else {
      toast.error("برای ذخیره دوره باید در سایت ثبت نام کنید");
    }
  };

  const handleLike = async () => {
    const data = new FormData();

    if (token) {
      if (Like == true) {
        try {
          data.append("CourseLikeId", userLikeId);

          const result = await http.delete(`/Course/DeleteCourseLike`, {
            data: data,
          });
          // console.log(result);
        } catch (error) {
          toast.error(error);
        }
        setLike(false);
      } else {
        const userLike = await addLike(
          `/Course/AddCourseLike?CourseId=${courseId}`
        );
        // console.log(userLike);
        setLike(true);
        setDisLike(false);
      }
    } else {
      toast.error("برای لایک باید در سایت ثبت نام کنید");
    }
  };

  const handleDisLike = async () => {
    const data = new FormData();

    if (token) {
      if (DisLike == true) {
        try {
          data.append("CourseLikeId", userLikeId);

          const result = await http.delete(`/Course/DeleteCourseLike`, {
            data: data,
          });
          // console.log(result);
        } catch (error) {
          toast.error(error);
        }
        setDisLike(false);
      } else {
        const userDisLike = await addLike(
          `/Course/AddCourseDissLike?CourseId=${courseId}`
        );
        // console.log(userDisLike);
        setDisLike(true);
        setLike(false);
      }
    } else {
      toast.error("برای ذیس لایک باید در سایت ثبت نام کنید");
    }
  };

  const selectedCourse = {
    courseId: courseId,
  };

  // console.log(isCourseUser, isCourseReseve);
  const handleClick = async () => {
    const result = await reserveCourse(selectedCourse);
    setChange(!change);
  };
  const getCondition = () => {
    // console.log("ok");
    if (isCourseReseve === "1") {
      if (isCourseUser === "1") {
        setCondition("تایید شده");
        return;
      }
      setCondition("در حال تایید");
    }
    if (isCourseReseve === "0") {
      setCondition("ثبت نام");
    }
  };
  useEffect(() => {
    getCondition();
  }, [isCourseReseve, isCourseUser]);

  useEffect(() => {
    if (currentUserLike == "1") {
      setLike(true);
      setDisLike(false);
    } else if (currentUserDissLike == "1") {
      setLike(false);
      setDisLike(true);
    } else {
      setLike(false);
      setDisLike(false);
    }
  }, []);

  return (
    <div className="h-[500px] bg-pallete-100 bg-opacity-20 dark:bg-mode-800 w-full mt-[100px] flex justify-center items-center px-10 pt-10 pb-5 max-2xl:flex-col-reverse max-2xl:h-auto max-2xl:gap-20   ">
      {/* ------------------------  title  & info -------------------------------------------------- */}

      {/*--------------------- title  & teacher  ------------------------------- */}
      <div className="w-3/5 max-2xl:w-full h-full flex flex-col items-end gap-10 ">
        <p className="text-end font-irSBold text-2xl text-mode-800 dark:text-mode-50">
          {title}
        </p>
        <div className="flex justify-start items-center text-mode-700 dark:text-mode-200 dark:opacity-90 flex-row-reverse gap-3  font-irSBold">
          <IconUserCheck className="text-mode-700 w-8 h-8 dark:text-mode-200  dark:opacity-90 " />
          {teacherName}
        </div>
        {/* ---------------------------------------------------- */}

        {/* capility & rate & info */}
        <div className="flex justify-center items-center flex-row-reverse  bg-white dark:bg-mode-700 w-4/5 max-2xl:w-full h-[250px] rounded-[30px] max-sm:h-auto max-sm:py-5 max-sm:flex-col max-sm:gap-5">
          <div className="w-2/5 h-full  flex flex-col justify-evenly items-center">
            <div className="bg-mode-50 dark:bg-mode-700  border-2  border-mode-50 dark:border-DarkPallete-100 dark:text-mode-200 w-28 h-28 rounded-full flex flex-col justify-center items-center gap-2 text-mode-700 font-irSans text-sm">
              <p className="text-mode-800 font-irSBold text-xl dark:text-mode-200 ">
                {" "}
                80%
              </p>
              ظرفیت پرشده
            </div>
            <p className="text-mode-700 font-irSans text-lg dark:text-mode-200">
              {currentRate}
            </p>
            <div className="flex justify-center items-center">
              <IconStarFilled className="text-pallete-100" />
              <IconStarFilled className="text-pallete-100" />
              <IconStarFilled className="text-pallete-100" />
              <IconStarFilled className="text-pallete-100" />
              <IconStar className="text-pallete-100" />
            </div>
            <p className="text-mode-700 dark:text-mode-200 font-irSans text-base flex flex-row-reverse gap-2 ">
              {" "}
              <span>{capacity}</span>نفر{" "}
            </p>
          </div>

          {/* ------------------------------------------------ */}
          {/* ----------------------------  info --------------------------------------- */}
          <div className="w-3/5 h-full flex flex-col gap-6 items-end justify-center font-irSans">
            {/* one item */}
            <div className="text-mode-700  flex flex-row-reverse dark:text-mode-200 ">
              : وضعیت
              <span className="font-irSBold mr-2 dark:text-mode-50">
                شروع نشده
              </span>{" "}
            </div>
            {/* --------------- */}
            {/* one item */}
            <div className="text-mode-700  flex flex-row-reverse dark:text-mode-200">
              : (تومان) هزینه دوره
              <span className="font-irSBold mr-2 flex dark:text-mode-50 ">
                {" "}
                500000{" "}
              </span>{" "}
            </div>
            {/* --------------- */}
            {/* one item */}
            <div className="text-mode-700  flex flex-row-reverse dark:text-mode-200">
              : تاریخ شروع دوره{" "}
              <span className="font-irSBold mr-2 dark:text-mode-50">
                1402 / 08 /03
              </span>{" "}
            </div>
            {/* --------------- */}

            {/* one item */}
            <div className="text-mode-700  flex flex-row-reverse dark:text-mode-200">
              : سطح دوره{" "}
              <span className="font-irSBold mr-2 dark:text-mode-50">
                پیشرفته
              </span>{" "}
            </div>
            {/* --------------- */}
          </div>

          {/*  -----------------------------------  */}
        </div>
      </div>

      {/*----------------------- image &  buttons ------------------------------------------------------------------------- */}
      <div className="w-2/5 max-2xl:w-full h-full  ">
        <div className="h-[70%]  flex justify-center items-center">
          {" "}
          <img
            className="w-4/5 max-2xl:w-[500px] h-full rounded-[30px] flex justify-center items-center"
            src={imageAddress != null ? imageAddress : courseDetailImage}
            alt="عکسی وجود ندارد"
          />
        </div>

        <div className="h-[30%] w-[80%] max-2xl:w-[500px] m-auto max-2xl:mt-10 max-sm:flex-col max-sm:w-auto max-sm:justify-center max-sm:gap-6 flex justify-between items-center flex-row-reverse ">
          <div className="w-full flex justify-end max-sm:justify-center">
            {condition !== "ثبت نام" && (
              <span className="text-xl px-16 py-2 rounded-[40px] text-mode-700 dark:text-white font-irSans">
                {condition}
              </span>
            )}
            {condition === "ثبت نام" && (
              <button
                className="  bg-pallete-100 dark:bg-DarkPallete-100  text-xl px-16 py-2 rounded-[40px] text-white font-irSans"
                onClick={() => handleClick()}
              >
                {condition}
              </button>
            )}
          </div>
          <div className="h-full w-full flex justify-start items-center gap-3  max-sm:justify-center">
            {save ? (
              <div
                className="w-12 h-12 dark:bg-mode-700 rounded-full flex justify-center items-center bg-gray-300 cursor-pointer"
                onClick={() => handleSave()}
              >
                <IconBookmarks className="text-mode-700 dark:text-mode-50" />
              </div>
            ) : (
              <div
                className="w-12 h-12 bg-white dark:bg-mode-700 rounded-full flex justify-center items-center  cursor-pointer"
                onClick={() => handleSave()}
              >
                <IconBookmarks className="text-mode-700 dark:text-mode-50" />
              </div>
            )}
            <div className="flex justify-center items-center gap-2">
              <div className="w-20 h-[44px] bg-white dark:bg-mode-700 rounded-l-[100px] rounded-r-[20px]  flex justify-center items-center gap-2 cursor-pointer">
                <IconThumbUp
                  className="text-mode-700 dark:text-mode-50 w-6 h-6"
                  stroke={1.8}
                />
                <p className="text-mode-700 dark:text-mode-50"> 25</p>
              </div>
              :
              <div
                className="w-20 h-[44px] bg-white dark:bg-mode-700 rounded-r-[100px] rounded-l-[20px]  flex justify-center items-center gap-2 cursor-pointer "
                onClick={() => handleDisLike()}
              >
                <IconThumbDown
                  className="text-mode-700 dark:text-mode-50 w-6 h-6 relative top-[2px]"
                  stroke={1.8}
                />
                <p className="text-mode-700 dark:text-mode-50 ">
                  {" "}
                  {dissLikeCount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutCourse };

/* <button
          className="md:px-14 md:py-4 bg-[#fcbf49] md:text-xl text-md px-11 py-3 absolute -bottom-[27px] rounded-[40px] text-white font-irSans"
          onClick={() => handleClick()}
        >
          ثبت نام
        </button>*/
