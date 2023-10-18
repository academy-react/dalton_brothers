import React from 'react'

import { MyCourse } from '../PanelCourses/Component/MyCourse/MyCourse'
import {allCourseData } from '../../../Core/Services/data'


const PanelCoursesList = () => {
  return (
    <div className=' w-full h-full flex flex-col pt-7 px-2'>
    <div className=' w-full h-[100px] flex justify-evenly items-center flex-row-reverse text-xl whitespace-nowrap'>
      <div className='w-[130px] h-[50px] text-center'> تصویر </div>
      <div className='w-[130px] h-[50px] text-center'> نام دوره </div>
      <div className='w-[130px] h-[50px] text-center'> مدرس </div>
      <div className='w-[130px] h-[50px] text-center'> ترم </div>
      <div className='w-[130px] h-[50px] text-center'> تاریخ شروع </div>
      <div className='w-[130px] h-[50px] text-center'> قیمت </div>
      <div className='w-[60px] h-[50px] text-center'>  </div>
    </div>
    <div className='w-full h-[500px] pt-3 flex flex-col gap-1'>
      {allCourseData.map((item,index) =>( 
        <MyCourse coursePic={item.coursePic} courseName={item.courseName} courseMaster={item.courseMaster} term={item.term} date={item.date} price={item.price} key={index}  />
      ))}
    </div>
    <div className='bg-red-200 w-full h-[90px] '></div>
  </div>
  )
}

export  {PanelCoursesList}