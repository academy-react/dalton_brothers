import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

// import { courseData } from "../../../Core/Services/data";
import { SimpleSlider } from "../../Common/Sliders/SimpleSlider";
import { landingCourseList } from "../../../Core/Services/api/course/courseList";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);

  const getCourses = async () => {
    const result = await landingCourseList();

    console.log(result);
    setCourseList(result);
  };

  useEffect(() => {
    getCourses();
  }, []);

  const data = [courseList[0], courseList[1], courseList[2]];
  return (
    <div className="w-100 flex flex-col gap-5 mt-10 ">
      <div className="w-[75%] h-16  flex flex-row-reverse justify-between items-center m-auto mb-10">
        <div className="mr-3 text-2xl h-28 flex justify-start items-center font-irSans text-[#fcbf49]">
          دوره ها
        </div>
        <Link
          to={"/course"}
          // onClick={() => (Document.documentElement.scrollTop = 0)}
          className="min-[500px]:w-[210px] w-[175px] h-[50px] bg-[#6c63ff] hover:cursor-pointer hover:bg-[#463fd3] flex justify-center items-center rounded-full font-irSans text-[#fff] text-l"
        >
          مشاهده ی تمام دوره ها
        </Link>
      </div>
      <div className="flex flex-row flex-wrap w-11/12 mx-auto justify-center gap-10">
        {/* {data.map((course, index) => (
          <Course {...course} key={index} />
        ))} */}
        <SimpleSlider data={courseList} item={"course"} />
      </div>
    </div>
  );
};

export { CourseList };
