import React, { useState } from 'react'

export default function Message () {
    return(
        <>

        {/*Message from my account*/}
        <div dir="rtl">
            <div className="flex justify-between items-center auto-rows-auto">
                <div className="flex">
                <img src="/MyProfile.png" className='ms-[38px] me-[25px] w-[75px] h-[75px]' />
                    <div className="flex flex-col items-start gap-[5px]">
                        <div className=" flex items-center">
                            <div className='p-4 bg-white rounded-[20px]'>
                            <span className='text-[20px] font-Rubik font-normal leading-[120%] text-[#072653] opacity-50'>โย่ว</span>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>  
        </div>

        {/*Message from friend*/}
        <div dir="ltr">
            <div className="flex justify-between items-center auto-rows-auto">
                <div className="flex">
                <img src="/MyProfile.png" className='ms-[38px] me-[25px] w-[75px] h-[75px]' />
                    <div className="flex flex-col items-start gap-[5px]">
                        <div className=" flex items-center">
                            <div className='p-4 bg-white rounded-[20px]'>
                            <span className='text-[20px] font-Rubik font-normal leading-[120%] text-[#072653] opacity-50'>และนี่คือเสียงจากเด็กวัด</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>  

        <div dir="ltr">
            <div className="flex justify-between items-center auto-rows-auto">
                <div className="flex">
                <img src="/Profile.png" className='ms-[38px] me-[25px] w-[75px] h-[75px]'/>
                    <div className="flex flex-col items-start gap-[5px]">
                        <div className=" flex justify-between items-center">
                            <div className='p-4 bg-white rounded-[20px]'>
                            <img className='w-[300px] h-[300px]' src="/Cat.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>  

        <div className="flex flex-row justify-center items-center mt-5">
            <div className="text-[16px] font-Rubik font-normal leading-[120%] text-[#072653] opacity-50">Apr 8, 2023, 8.08 AM</div>
        </div> 

        </>
    )
}