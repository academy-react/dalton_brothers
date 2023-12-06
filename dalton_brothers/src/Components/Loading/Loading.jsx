import React from 'react'

import loading from "../../assets/Images/loading.svg"
import logo from "../../assets/Images/logo.png"
import darkModelogo from "../../assets/Images/mode-logo.png"



const Loading = () => {
  return (
    <div className='w-[400px] h-[250px] bg-mode-50 dark:bg-mode-800 m-auto flex gap-6 justify-center flex-col items-center rounded-3xl'>

        <div className='w-[70px] h-[70px] ' > <img src={logo} alt="" />  </div>
        <div className='w-[90px] h-[80px] ' > <img src={loading} alt="" />  </div>

    </div>
  )
}

export default Loading