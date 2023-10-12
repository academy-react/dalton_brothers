import React from 'react'

import { Course } from "../../../../../src/Components/Course/CourseSections/Course";
import { relatedData } from "../../../../Core/Services/data/";



const RelatedCourses = () => {
  const data = relatedData;
  return (
    <div className=' w-full'>
        <p className='text-center h-[80px] w-full font-bold text-2xl p-[30px]'> دوره های مرتبط </p>
        <div className='w-full flex justify-evenly'>
        {data.map((course, index) => (
          <Course {...course} key={index} />
        ))}
        </div>
    </div>
  )
}

export  {RelatedCourses}