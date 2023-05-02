import React from 'react'

export default function Friendbox({name,count_message}) {
    return (
        <>
            <div className="w-[1053px] h-[77px] flex justify-between items-center border-b-2 border-b-[#2FBCE8]">
                <div className="flex flex-row justify-center items-center">
                    <img src="/Profile.png" className='ms-[38px] me-[25px] ' />
                    <h1 className='text-[20px] font-medium'>{name}</h1>
                    
                    <div className={` ${count_message ? "w-[35px] h-[35px] bg-[#FF3F3F] rounded-[50%] ms-[15px] text-white flex justify-center items-center" : "hidden"}`}>
                        <h1>{count_message}</h1>
                    </div>
                </div>
                <button className='w-[176px] h-[40px] rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] text-[20px] text-white font-semibold me-[29px] font-Montserrat hover:border-[2px] hover:border-[#178AAE]'>Start Chat</button>
            </div>
        </>
    )
}
