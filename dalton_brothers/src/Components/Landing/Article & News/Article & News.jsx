import React from 'react'
import { Course } from '../Course/CourseSections/Course'
import { Article } from './ArticleSections/Article'

const ArticleNews = () => {
  return (

    <div className="w-100   flex flex-col gap-5 mt-20 ">
      <div className="w-full h-16  flex flex-row-reverse justify-between items-center  pr-[170px] pl-[170px]">
        <div className=''>آخرین اخبار و مقالات</div>
        <div className='w-[110px] h-10 bg-amber-400 flex justify-center items-center rounded-full text-sm'>مشاهده بیشتر</div>
      </div>

    <div className="w-100 h-[400px]  flex justify-center items-center gap-9 ">
      
<Article/>
<Article/>
<Article/>
<Article/>

    </div>
    </div>


  )
}

export  {ArticleNews}