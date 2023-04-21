import React from 'react'

export default function Inbox({person,lastmessage,lastsender,count_message,time}) {
  return (
    <>
        <div className="w-[690px] h-[128px] flex justify-between items-center border-b-2 border-b-[#2FBCE8] hover:bg-[#2FBCE8] hover:bg-opacity-40 auto-rows-auto">
            <div className="flex flex-row items-center ml-[38px] gap-[25px]">
                <img src="/Profile.png" className=' w-[107px] h-[107px]'/>
                <div className="flex flex-row justify-between w-[528px] h-[107px]">
                    <div className="flex flex-col gap-[5px] h-full justify-center ">
                        <p className="text-[32px] font-medium font-Rubik leading-[38px]">{person}</p>
                        <div className="text-[20px] text-[#072653] font-Rubik font-medium  leading-[24px] opacity-50">{lastsender == "me" ? "You" : ""} {lastmessage}</div>
                    </div>
                    <div className="flex flex-col gap-[5px] h-full justify-center items-end mr-[42px] ">
                        <p className='text-[20px]  font-Rubik font-normal leading-[120%] text-[#072653] opacity-50'>{time}</p>  
                        <label className='w-[35px] h-[35px] rounded-[50px] bg-[#FF3F3F] flex justify-center items-center text-[20px] text-white font-medium' >{count_message}</label>  
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
