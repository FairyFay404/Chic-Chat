import React from 'react';
import { format } from 'timeago.js';

export default function MessageSend({ message, time }) {
    return (
        <div>
            <div className="flex flex-row justify-end items-start mr-[44px] gap-[25px] mb-[23px]">
                <div className="flex flex-col items-end gap-[10px]">
                    <p className='text-[20px] font-Prompt font-normal leading-[30.24px] color_message py-[16px] px-[20px] bg-white rounded-[20px] w-fit max-w-[420px]'>{message}</p>
                    <p className="mr-[4px] font-Rubik text-[#696F79] text-[14px] leading-[17px]">{format(time)}</p>
                </div>
                <img src="/MyProfile.png" className=' w-[75px] h-[75px]' />
            </div>
        </div>
    )
}
