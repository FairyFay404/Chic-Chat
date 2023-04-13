import React,{useState} from 'react'

export default function Navbar() {
    
    return (
        <>
            <div className="w-[1920px] h-[100px] bg-white ] flex justify-between items-center">
                <div className="flex items-center ">
                    <img className='ms-[56px]' src="/ChicChatLOGO.png" alt="" />
                    <h1 className=' text-[30px] font-semibold text-[#1565D8]'>ChicChat</h1>
                </div>
                <button className='me-[51px] w-[170px] h-[59px] rounded-[50px] bg-gradient-to-b from-[#DB3D3D] via-[#FC6262] to-[#FF9595] font-semibold text-[20px] text-white font-Montserrat hover:border-[2px] hover:border-[#f02e2e]'>Log out</button>
            </div>
        </>
    )
}