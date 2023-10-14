import React from 'react'

import { Profile } from './Components/Profile/Profile'
import { PanelNavigation } from './Components/PanelNavigation/PanelNavigation'
import { PanelSearch } from './Components/PanelSearch/PanelSearch'
import { Specification } from './Components/Specification/Specification'
import { YourStock } from './Components/YourStock/YourStock'
import { Notification } from './Components/Notification/Notification'

import undrawSocial from "../../../../src/assets/Images/panel/undraw_social_thinking_re_y8cc.png";
import { MostCourses } from './Components/MostCourses/MostCourses'

const Dashboard = () => {
  return (
    <div className=' flex flex-col w-full h-[100vh] bg-[url("../../../../src/assets/Images/panel/17.png")] bg-cover bg-center '>
        {/* //////////            top of dashboard of panel               /////////  */}
        <div className=' w-full h-[55%] flex justify-between flex-row-reverse'>
            <div className='w-[310px] flex flex-col'>
                <div className='w-full h-[160px] flex justify-center items-center'>
                    <Profile/>
                </div>
                <div className='bg-white w-full h-[410px] flex flex-col items-center justify-between '>
                    <PanelNavigation/>
                </div>
            </div>
            <div className=' w-[980px] flex flex-col items-center justify-between'>
                <div className='border border-gray-600 h-[60px] w-[500px] mt-[38px] mb-[30px] rounded-[30px]'>
                    <PanelSearch />
                </div>
        {/* //////////            top and main of dashboard of panel             /////////  */}
                <div className=' w-full h-[340px] flex justify-between mt-[15px]'>
                    <div className=' w-[370px] h-[300px] mt-[10px] '>
                        <YourStock/>
                    </div>
                    <div className=' w-[580px] h-[300px] mt-[10px]'>
                        <Specification/>
                    </div>
                </div>
                <h4 className='w-full h-[50px] text-right text-2xl '> مهم ترین دوره ها </h4>
            </div>
            <div className=' w-[310px] h-[90px] flex justify-center items-center'>
                <Notification/>
            </div>
        </div>
        {/* //////////            bottom of dashboard of panel               /////////  */}
        <div className=' w-full h-[45%] flex justify-between flex-row-reverse'>
            <div className=' w-[310px]'></div>
            <div className=' w-[760px]'>
                <MostCourses />
            </div>
            <div className='pl-[50px] pt-5 w-[530px]'>
                <img src={undrawSocial} alt=''  ></img>
            </div>
        </div>

    </div>
  )
}

export  {Dashboard}