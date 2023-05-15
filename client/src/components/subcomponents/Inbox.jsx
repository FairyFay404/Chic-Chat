import React, { useState, useEffect } from 'react'

export default function Inbox({ person, lastmessage, lastsender, count_message, time, focusinbox, setFocusinbox, index, chatIdNow, setChatIdNow, chatId }) {

    const [count, setCount] = useState(count_message);

    useEffect(()=>{
        console.log("chatIdnow : " + chatIdNow)
        if(chatIdNow == chatId){
            handleIbox()
        }
    },[chatIdNow])
    
    const handleIbox = () => {
        setFocusinbox(index);
        setChatIdNow(chatId);
        setCount(0);
        // axios post count_message = 0; 
    }

    return (
        <>
            <div className={` ${focusinbox == index ? "bg-[#2FBCE8] bg-opacity-40" : ""}  w-[690px] h-[128px] flex justify-between items-center border-b-2 border-b-[#2FBCE8] hover:bg-[#2FBCE8] hover:bg-opacity-40  auto-rows-auto cursor-pointer`} onClick={handleIbox}>
                <div className="flex flex-row items-center ml-[38px] gap-[25px]">
                    <img src="/Profile.png" className=' w-[107px] h-[107px]' />
                    <div className="flex flex-row justify-between w-[528px] h-[107px]">
                        <div className="flex flex-col gap-[5px] h-full justify-center ">
                            <p className="text-[32px] font-medium font-Rubik leading-[38px]">{person}</p>
                            <div className="text-[20px] text-[#072653] font-Rubik font-medium  leading-[24px] opacity-50">{lastsender == "me" ? "You :" : ""} {lastmessage}</div>
                        </div>
                        <div className="flex flex-col gap-[5px] h-full justify-center items-end mr-[42px] ">
                            <p className='text-[20px]  font-Rubik font-normal leading-[120%] text-[#072653] opacity-50'>{time}</p>
                            <label className={`${lastsender == "me" ? "hidden" : ""} ${count == 0 ? "hidden" : ""} w-[35px] h-[35px] rounded-[50px] bg-[#FF3F3F] flex justify-center items-center text-[20px] text-white font-medium`} >{count}</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
