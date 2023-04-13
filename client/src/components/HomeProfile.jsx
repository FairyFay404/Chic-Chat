import React,{useState} from 'react'

export default function HomeProfile() {
    

    return (
        <>
        <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen font-Rubik">
                
                <div className="w-full h-screen bg-no-repeat bg-cover " style={{backgroundImage: `url("/Wallpaper.png")`}}>
                    <div className="w-[1920px] h-[100px] bg-white ] flex justify-between items-center">
                        <div className="flex items-center ">
                            <img className='ms-[56px]' src="/ChicChatLOGO.png" alt="" />
                            <h1 className=' text-[30px] font-semibold text-[#1565D8]'>ChicChat</h1>
                        </div>
                        <button className='me-[51px] w-[170px] h-[59px] rounded-[50px] bg-gradient-to-b from-[#DB3D3D] via-[#FC6262] to-[#FF9595] font-semibold text-[20px] text-white font-Montserrat hover:border-[2px] hover:border-[#f02e2e]'>Log out</button>
                    </div>
                    <div className="h-[983px] flex flex-row justify-center items-center  ">
                        <div className="w-[1210px] h-[877px] rounded-l-[50px] bg-white/50 flex flex-col justify-center items-center ">
                            <div className="flex flex-col items-center">
                                <h1 className='text-[96px] text-[#1565D8] font-semibold leading-[114px]'>Welcome </h1>
                                <h2 className='text-[48px] text-[#1565D8] font-semibold leading-[57px]'>to ChicChat</h2>
                                <p className='text-[24px] text-[#030F22] font-medium leading-[28px] font-Prompt'>ถ้าตอนนี้คุณกำลังเหงาลองหาใครสักคนคุณด้วยสิ</p>
                            </div>
                            
                            <div className="w-[1068px] mt-[52px]">
                                <div className=" flex justify-between ">
                                    <div className="flex flex-row justify-center items-end">
                                        <img src="/friend icon.png" className='pe-[14px] '/>
                                        <h1 className='text-[40px] text-white font-semibold'>Friend</h1>
                                    </div>
                                    <button className='w-[235px] h-[59px] rounded-[20px] bg-white flex items-center text-[20px] text-[#072653] font-normal'><img src="/addfriend icon.png" className='pe-[14px] ms-[32px]' /> Add friend</button>
                                </div>
                                <div className=" w-[1063px] h-[386px] rounded-[20px] bg-white mt-[22px] opacity-70">
                                    <div className="w-[1063px] h-[77px] flex justify-between items-center border-b-2 border-b-[#2FBCE8]">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] '/>
                                            <h1 className='text-[20px] font-medium'>Aom</h1>
                                        </div>
                                        <button className='w-[176px] h-[40px] rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] text-[20px] text-white font-semibold me-[29px] font-Montserrat hover:border-[2px] hover:border-[#178AAE]'>Start Chat</button>
                                    </div>
                                    <div className="w-[1063px] h-[77px] flex justify-between items-center border-b-2 border-b-[#2FBCE8]">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] '/>
                                            <h1 className='text-[20px] font-medium'>Party</h1>
                                            <label className='w-[35px] h-[35px] rounded-[50px] bg-[#FF3F3F] flex justify-center items-center text-[20px] text-white font-medium ms-[25px]' >1</label>
                                        </div>
                                        <button className='w-[176px] h-[40px] rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] text-[20px] text-white font-semibold  me-[29px] font-Montserrat hover:border-[2px] hover:border-[#178AAE]'>Start Chat</button>
                                    </div>
                                    <div className="w-[1063px] h-[77px] flex justify-between items-center border-b-2 border-b-[#2FBCE8]">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] '/>
                                            <h1 className='text-[20px] font-medium'>Meaw</h1>
                                        </div>
                                        <button className='w-[176px] h-[40px] rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] text-[20px] text-white font-semibold  me-[29px] font-Montserrat hover:border-[2px] hover:border-[#178AAE]'>Start Chat</button>
                                    </div>
                                    <div className="w-[1063px] h-[77px] flex justify-between items-center border-b-2 border-b-[#2FBCE8]">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] '/>
                                            <h1 className='text-[20px] font-medium'>EEEEEarn</h1>
                                            <label className='w-[35px] h-[35px] rounded-[50px] bg-[#FF3F3F] flex justify-center items-center text-[20px] text-white font-medium ms-[25px]'>2</label>
                                        </div>
                                        <button className='w-[176px] h-[40px] rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] text-[20px] text-white font-semibold  me-[29px] font-Montserrat hover:border-[2px] hover:border-[#178AAE]'>Start Chat</button>
                                    </div>
                                    <div className="w-[1063px] h-[77px] flex justify-between items-center ">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] '/>
                                            <h1 className='text-[20px] font-medium'>Fay</h1>
                                        </div>
                                        <button className='w-[176px] h-[40px] rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] text-[20px] text-white font-semibold me-[29px] font-Montserrat hover:border-[2px] hover:border-[#178AAE]'>Start Chat</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[608px] h-[877px] rounded-r-[50px] bg-white/50 border-l-2  border-l-[#1565D880] ">
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}