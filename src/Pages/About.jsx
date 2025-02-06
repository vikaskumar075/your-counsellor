import React from 'react'

const PersonalCare = () => {
  return (
    <div className=' md:max-w-[1420px] sm:max-w-[720px] w-full m-auto gap-7 text-[16px] md:py-[100px]'>
      <div className='w-full grid grid-cols-2 md:grid-cols-3 md:gap-3 items-center'>

        {/* two image col section  */}
        <div className=' grid md:p-0 p-[24px]'>
          <img className='rounded-[5px] ' src="/img_4.jpg" alt="" />

          <img className='rounded-[5px] mt-[1.5rem]' src="/img_7.png" alt="" />

        </div>
        {/* single image large  */}
        <div className='flex justify-center items-center px-[15px] mt-4 md:p-0 p-[24px]'>
          <img className='rounded-[5px]' src="/img_5.jpg" alt="" />
        </div>

        {/* content */}
        <div className='p-[24px] grid md:col-span-1 col-span-2'>
          <h1 className='text-[44px] font-bold text-white leading-tight mb-[8px]'>
            Personal care & healthy living
          </h1>
          <p className='mt-[24px] mb-[48px] text-gray-200 '>
            We provide best leading medicle
            service Nulla perferendis veniam deleniti ipsum officia dolores repellat laudantium obcaecati neque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PersonalCare