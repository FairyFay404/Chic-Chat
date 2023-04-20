import React from 'react'

export default function Inbox() {
  return (
    <>
        <div className="w-[690px] h-[128px] flex justify-between items-center border-b-2 border-b-[#2FBCE8] hover:bg-[#2FBCE8] hover:bg-opacity-40 auto-rows-auto">
            <div className="flex flex-row items-center">
                <img src="/Profile.png" className='ms-[38px] me-[25px] w-[107px] h-[107px]' />
                <div className="flex flex-col items-start gap-[5px]">
                    <div className=" flex items-center">
                        <span className='text-[32px] font-medium font-Rubik leading-[38px]'>Aom</span>
                        <p className='text-[20px] ms-[300px] font-Rubik font-normal leading-[120%] text-[#072653] opacity-50'>Just now</p>
                    </div>
                    <div className="flex flex-row items-center gap-[310px]">
                        <div className="text-[20px] text-[#072653] font-Rubik font-medium  leading-[24px] opacity-50">You: ...</div>
                        <label className='w-[35px] h-[35px] rounded-[50px] bg-[#FF3F3F] flex justify-center items-center text-[20px] text-white font-medium ms-[25px]' >1</label>    
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
