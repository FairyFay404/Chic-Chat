import React,{useState} from 'react'

export default function HomeProfile() {
    

    return (
        <>
        <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen font-Rubik">
                <div className="w-full h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url("/Wallpaper.png")`}}>
                    <div className="w-[1920px] h-[100px] bg-white ] flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/ChicChatLOGO.png" alt="" />
                        <h1 className='text-[30px] font-semibold text-[#1565D8]'>ChicChat</h1>
                    </div>
                    <button className='w-[170px] h-[59px] rounded-[50px] bg-gradient-to-b from-[#DB3D3D] via-[#FC6262] to-[#FF9595] font-semibold text-[20px] text-white font-Montserrat'>Log out</button>
                    </div>
                    <div className="flex flex-row justify-center items-center h-full">
                    
                        <div className="w-[850px] h-[931px] rounded-[50px] bg-gradient-to-b from-[#C9F2FF] from-0% to-[#E9FAFF] to-67% shadow-[0_20px_20px_rgba(0,0,0,0.25)]">
                            
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}