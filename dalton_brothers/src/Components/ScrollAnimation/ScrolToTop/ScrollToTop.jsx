import React, { useEffect, useState } from 'react'

import { IconChevronUp } from '@tabler/icons-react'

const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = ( winScroll / height ) * 100 ;

    setScrollTop(scrolled)
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll)
  
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  return (
    <div>
      <div className='bg-gray-300 transp xl:h-20 md:h-20 h-16 fixed bottom-16 2xl:right-20 xl:right-16 md:right-9 right-2 xl:w-20 md:w-20 w-16 xl:z-10 rounded-full overflow-hidden opacity-50'>
        <div className=' bg-orange-400  h-full w-full  cursor-pointer ' style={{ height: `${scrollTop}%`}} onClick={()=> document.documentElement.scrollTop = "0"}>
          <IconChevronUp className='w-12 xl:h-20 md:h-20 h-16 text-gray-800 m-auto '/>
        </div>
      </div>
    </div>
  )
}

export  {ScrollToTop}