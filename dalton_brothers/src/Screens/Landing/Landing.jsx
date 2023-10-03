import React, { Fragment } from 'react'
import { Header } from '../../Components/Header/Header'
import { CourseList } from '../../Components/Course/CourseList'
import { ArticleNews } from '../../Components/Article & News/Article & News'

const Landing = () => {
  return (
<Fragment>
<Header/>
<CourseList/>
<ArticleNews/>

</Fragment>


  )
}

export  {Landing}