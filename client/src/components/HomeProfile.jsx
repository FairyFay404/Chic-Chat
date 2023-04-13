import React,{useState} from 'react'
import Navbar from './Navbar'

export default function HomeProfile() {
    const [error,setError] = useState(false)

    const handleEdit = (e)=>{
        e.preventDefault();
        setError(true);
    }
    return (
        <>
        <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen font-Rubik">
                
                <div className="w-full h-screen bg-no-repeat bg-cover " style={{backgroundImage: `url("/Wallpaper.png")`}}>
                    <Navbar/>
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
                                <div className=" w-[1063px] h-[386px] rounded-[20px] bg-white mt-[22px] bg-opacity-70">
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
                        <div className="w-[608px] h-[877px] rounded-r-[50px] 
                        bg-white/50 border-l-2  border-l-[#1565D880] 
                        flex flex-col justify-center items-center
                        ">
                            <h1 className='text-[50px] text-[#1565D8] font-semibold'>Profile</h1>
                            <img src="/MyProfile.png" alt="" />
                            <h1 className='text-[40px] font-medium mb-[39px]'>Eiei</h1>
                            <div className="grid gap-[11px]">
                                <div className="w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center
                                ">
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>Password:</label>
                                    {error?<input type="password" name="" id="" className='bg-transparent ps-[10px] outline-0'/>:<p className='opacity-50'>*************</p>}
                                </div>
                                <div className="w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center
                                ">
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>First name:</label>
                                    {error?<input type="text" name="" id="" className='bg-transparent ps-[10px] outline-0'/>:<p className='opacity-50'>Eiei</p>}
                                </div>
                                <div className="w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center
                                ">
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>Last name:</label>
                                    {error?<input type="text" name="" id="" className='bg-transparent ps-[10px] outline-0'/>:<p className='opacity-50'>Eiei</p>}
                                </div>
                                <div className="w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center
                                ">
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>E-mail:</label>
                                    {error?<input type="email" name="" id="" className='bg-transparent ps-[10px] outline-0'/>:<p className='opacity-50'>eieiza555@gmail.com</p>}
                                </div>
                                <div className="w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center
                                ">
                                    <label className=' pe-[13px] text-[24px] text-[#000000] '>Phone number :</label>
                                    {error?<input type="text" name="" id="" className='bg-transparent ps-[10px] outline-0 w-[220px]'/>:<p className='opacity-50'>093-999-9999</p>}
                                </div>
                            </div>
                            <button onClick={handleEdit} className='w-[260px] h-[59px] rounded-[50px] mt-[53px]
                            bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8]
                            text-[20px] text-white font-semibold font-Montserrat
                            hover:border-[2px] hover:border-[#178AAE] transition duration-300 ease-in-out hover:scale-110
                            '>Edit your profile</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}