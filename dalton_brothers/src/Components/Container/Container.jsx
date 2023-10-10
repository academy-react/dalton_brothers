import React from 'react'

const Container = ({children}) => {
  return (
    <div className='mx-auto px-0.5 sm:px-2 md:px-4 '>
        {children}
    </div>
  )
}

export {Container}