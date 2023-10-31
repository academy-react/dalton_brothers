import React from 'react'

import { Article } from '../../../ArticleSections/Article/Article'
import { relatedNews } from '../../../../../Core/Services/data'

const RelatedArticle = () => {
    const data = relatedNews
  return (
    <div className=' w-full'>
        <p className='text-center h-[80px] w-full font-bold text-2xl mb-[50px] p-[30px]'> خبر های مرتبط </p>
        <div className='w-full flex justify-evenly flex-wrap gap-9'>
        {data.map((article, index) => (
          <Article {...article} key={index} />
        ))}
        </div>
    </div>
  )
}

export  {RelatedArticle}