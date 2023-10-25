import React from 'react'

import userImage from "../../../../../assets/Images/panel/user.png"

const Profile = () => {
  return (
    <div className=' w-[270px] h-[70px] flex justify-center items-center gap-3 font-irSBold'>
        <h3 className=' text-lg text-gray-500 '> امین قادری </h3>
        <div className='w-[60px] h-[60px] rounded-full bg-[#F1F5F9] flex justify-center items-center overflow-hidden '>
          <img className='w-[40px] h-[40px]'  src={userImage} alt="" />
        </div>

    </div>
  )
}

export  {Profile}