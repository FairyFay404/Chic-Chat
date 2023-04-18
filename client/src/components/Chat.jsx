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
                        <div className="w-[697px] h-[877px] rounded-l-[50px] bg-white/50 flex flex-col justify-center items-center ">
                            <div className="flex flex-col items-center">


                            <form>
                                <label class="relative block">
                                    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <img src="/search-icon.png" className='pe-[14px] w-[55px] h-[39px] ms-[5px]'/>
                                    </span>
                                    <input type="text" className="w-[629px] h-[59px] pl-[70px] rounded-[20px] shadow_1 mt-[11px] 
                                    text-[#072653] font-Rubik font-normal border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                    " placeholder="Search by username" onChange={e => setUsername(e.target.value)}/>
                                </label>
                            </form>


                            


                            <div className="w-[698px] h-[718px]">

                            </div>
                                
                            </div>
                                    
                            
                            
                        </div>
                        <div className="w-[1120px] h-[877px] rounded-r-[50px] 
                        bg-white/50 border-l-2  border-l-[#1565D880] 
                        flex flex-col justify-center items-center 
                        ">


                            <div className="w-[1118px] h-[120px] bg-[#2FBCE8] ] flex justify-between items-center rounded-tr-[50px] ">
                                <div className="flex items-center ">
                                <img className='ms-[32px] w-[100px] h-[100px]' src="/MyProfile.png" alt="" />
                                <h1 className=' text-[32px] ms-[20px] font-medium text-[#000000]'>Username</h1>
                                </div>
                            </div>

                            <div className=" w-[1120px] h-[756px]">

                            </div>


                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}