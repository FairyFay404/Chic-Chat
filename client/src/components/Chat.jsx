import React,{useState} from 'react'
import Navbar from './Navbar'

export default function Chat() {
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
                        <div className="w-[697px] h-[877px] rounded-l-[50px] bg-white/50 ">
                            <div className="flex flex-col items-center bg-white bg-opacity-50 rounded-l-[40px]">


                            <div className="w-[698px] h-[159px] border-b-2 border-b-[#2FBCE8] flex flex-row justify-center items-center">
                            <form>
                                <label class="relative block">
                                    <span class="absolute inset-y-9 left-0 flex items-center pl-3">
                                    <img src="/search-icon.png" className='pe-[14px] w-[55px] h-[39px] ms-[5px]'/>
                                    </span>
                                    <input type="text" className="w-[629px] h-[59px] pl-[70px] rounded-[20px] shadow_1 mt-[11px] 
                                    text-[#072653] font-Rubik font-normal border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                    " placeholder="Search by username" onChange={e => setUsername(e.target.value)}/>
                                </label>
                            </form>
                            </div>

                            <div className="w-[698px] h-[718px] ">
                                    <button className="w-[700px] h-[128px] flex justify-between items-center border-b-2 border-b-[#2FBCE8] hover:bg-[#2FBCE8] hover:bg-opacity-40 auto-rows-auto">
                                        <div className="flex flex-row items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] w-[107px] h-[107px]'/>
                                                <div className=" flex justify-between items-center">
                                                <span className='text-[32px] font-medium'>Aom</span>
                                                <p className='text-[20px] ms-[300px] font-Montserrat font-normal text-[#696F79]'>Just now</p>
                                                
                                                </div>
                                                
                                            
                                        </div>
                                    </button>
                                    <button className="w-[700px] h-[128px] flex justify-between items-center border-b-2 border-b-[#2FBCE8] hover:bg-[#2FBCE8] hover:bg-opacity-40">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] w-[107px] h-[107px]'/>
                                            <h1 className='text-[32px] font-medium'>Party</h1>
                                            <label className='w-[35px] h-[35px] rounded-[50px] bg-[#FF3F3F] flex justify-center items-center text-[20px] text-white font-medium ms-[25px]' >1</label>
                                            <h2 className='text-[20px] ms-[220px] font-Montserrat font-normal text-[#696F79]'>Just now</h2>
                                        </div>
                                        
                                    </button>
                                    <button className="w-[700px] h-[128px] flex justify-between items-center border-b-2 border-b-[#2FBCE8] hover:bg-[#2FBCE8] hover:bg-opacity-40">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] w-[107px] h-[107px]'/>
                                            <h1 className='text-[32px] font-medium'>Meaw</h1>
                                        </div>
                                        
                                    </button>
                                    <button className="w-[700px] h-[128px] flex justify-between items-center border-b-2 border-b-[#2FBCE8] hover:bg-[#2FBCE8] hover:bg-opacity-40">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] w-[107px] h-[107px]'/>
                                            <h1 className='text-[32px] font-medium'>EEEEEarn</h1>
                                            <label className='w-[35px] h-[35px] rounded-[50px] bg-[#FF3F3F] flex justify-center items-center text-[20px] text-white font-medium ms-[25px]'>2</label>
                                        </div>
                                       
                                    </button>
                                    <button className="w-[700px] h-[128px] flex justify-between items-center border-b-2 border-b-[#2FBCE8] hover:bg-[#2FBCE8] hover:bg-opacity-40">
                                        <div className="flex flex-row justify-center items-center">
                                            <img src="/Profile.png" className='ms-[38px] me-[25px] w-[107px] h-[107px]'/>
                                            <h1 className='text-[32px] font-medium'>Fay</h1>
                                        </div>
                                        
                                    </button>
                            </div>
                                
                            </div>
                                    
                            
                            
                        </div>
                        <div className="w-[1120px] h-[877px] rounded-r-[50px] 
                        bg-white/50 border-l-2  border-l-[#1565D880] 
                        flex flex-col justify-center items-center 
                        ">


                            <div className="w-[1118px] h-[120px] bg-[#2FBCE8] ] flex justify-between items-center rounded-tr-[50px] shadow_1 t-[11px]">
                                <div className="flex items-center ">
                                <img className='ms-[32px] w-[100px] h-[100px]' src="/MyProfile.png" alt="" />
                                <h1 className=' text-[32px] ms-[20px] font-medium text-[#000000]'>Username</h1>
                                </div>
                            </div>

                            <div className=" w-[1120px] h-[756px]">

                            </div>
                            
                            <div className=" w-[1120px] h-[107px] bg-white bg-opacity-50 rounded-br-[40px] flex flex-row justify-center items-center">
                            <div className="">
                            <form>
                                <label class="relative block flex flex-row justify-center items-center ">
                                    <img src="/add icon.png" className=' w-[61px] h-[61px]'/>  
                                    <input type="text" className="w-[880px] h-[59px] ms-[20px] pl-[50px] rounded-[20px]
                                    text-[#072653] font-Rubik font-normal border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                    " placeholder="Aa" onChange={e => setUsername(e.target.value)}/>
                                    <img src="/send icon.png" className='w-[53px] h-[53px] ms-[20px]'/>
                                </label>
                            </form>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>     
        </>
    )
}