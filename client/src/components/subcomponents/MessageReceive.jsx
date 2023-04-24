import React from 'react'

export default function MessageReceive({ message, time }) {
    return (
        <>
            <div>
                <div className="flex flex-row items-start ml-[38px] gap-[25px] mb-[23px]">
                    <img src="/MyProfile.png" className=' w-[75px] h-[75px]' />
                    <div className="flex flex-col gap-[10px]">
                        <p className='text-[20px] font-Prompt font-normal leading-[30.24px] color_message py-[16px] px-[20px] bg-white rounded-[20px] w-fit max-w-[420px]'>{message}</p>
                        <p className="ml-[4px] font-Rubik text-[#696F79] text-[14px] leading-[17px]">{time}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
