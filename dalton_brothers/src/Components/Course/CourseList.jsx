import React from 'react'

import "../../index.css"
import {Course} from './CourseSections/Course'

const CourseList = () => {
  return (
    <div className="w-100   flex flex-col gap-5 ">
      <div className="w-full h-16  flex flex-row-reverse justify-between items-center  pr-[170px] pl-[170px]">
        <div className=''>لیست دوره ها</div>
        <div className='w-[110px] h-10 bg-amber-400 flex justify-center items-center rounded-full text-sm'>مشاهده بیشتر</div>
      </div>

    <div className="w-100 h-[400px]  flex justify-center items-center gap-9 ">
      
      <Course/>
      <Course/>
      <Course/>
      <Course/>

    </div>
    </div>
  )
}

export  {CourseList}