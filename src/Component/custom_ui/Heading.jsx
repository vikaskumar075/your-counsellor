import React from 'react'

const Heading = ({ title }) => {
    return (
        <div className='md:text-[40px] font-bold relative before:absolute before:h-1 before:w-[50%] before:bg-amber-400 before:-bottom-6 after:absolute after:h-1 after:w-full after:bg-amber-800 after:left-0 after:-bottom-2'>
            {title}
            
        </div>
    )
}

export default Heading