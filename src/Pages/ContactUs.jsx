import React from 'react'
import Heading from '../Component/custom_ui/Heading'

const ContactUs = () => {
    return (
        <div className='max-w-[1240px] flex flex-col items-center justify-center m-auto md:pb-[100px]'>
            <Heading title={"Hit You Something "} />


            <div className='flex md:flex-row flex-col w-full  justify-between pt-20'>
                <div className='flex flex-col gap-14 md:w-[50%]'>
                    <div className='flex gap-10'>
                        <input type="text" placeholder='Name ' className=' p-4 border-b-2 outline-0 w-[50%]' />
                        <input type="text" placeholder='Email ' className=' p-4 border-b-2 outline-0 w-[50%]' />
                    </div>
                    <textarea className=' p-4 border-b-2 outline-0' placeholder='Write Something' name="" rows={4} id=""></textarea>
                </div>
                <div className='flex flex-col items-center gap-4 justify-center md:w-[50%]' >
                    <div className=' flex flex-col gap-[2px]'>
                        <h5 className='md:text-[20px] text-gray-400'>Email</h5>
                        <h3 className='text-[24px]'>info@yourcounsellor.in</h3>
                    </div>
                    <div className=' flex flex-col gap-[2px]'>
                        <h5 className='md:text-[20px] text-gray-400'>Phone</h5>
                        <h3 className='text-[24px]'>info@yourcounsellor.in</h3>
                        <h3></h3>
                    </div>
                    <div className=' flex flex-col gap-[2px]'>
                        <h5 className='md:text-[20px] text-gray-400'>Address</h5>
                        <h3 className='text-[24px]'>info@yourcounsellor.in</h3>
                        <h3></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs