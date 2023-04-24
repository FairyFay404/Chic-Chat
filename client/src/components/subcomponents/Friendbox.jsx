import React from 'react'

export default function Friendbox({name}) {
    return (
        <>
            <div className="w-[1053px] h-[77px] flex justify-between items-center border-b-2 border-b-[#2FBCE8]">
                <div className="flex flex-row justify-center items-center">
                    <img src="/Profile.png" className='ms-[38px] me-[25px] ' />
                    <h1 className='text-[20px] font-medium'>{name}</h1>
                </div>
                <button className='w-[176px] h-[40px] rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] text-[20px] text-white font-semibold me-[29px] font-Montserrat hover:border-[2px] hover:border-[#178AAE]'>Start Chat</button>
            </div>
        </>
    )
}
