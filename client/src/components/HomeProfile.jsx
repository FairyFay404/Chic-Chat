import React, { useState } from 'react'
import Navbar from './Navbar'
import Friendbox from './subcomponents/Friendbox'

export default function HomeProfile() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [email, setEmail] = useState("")
    const [statusAddfriend, setStatusAddfriend] = useState(false)
    const [statusSearch, setStatusSearch] = useState(false);

    const handleEdit = (e) => {
        // e.preventDefault();
        alert(username + password + confirmpassword + email)

    }

    const changeStatus = () => {
        setStatusAddfriend(!statusAddfriend)
        setStatusSearch(false)
    }

    const handleSearch = () => {
        setStatusSearch(!statusSearch)
    }
    return (
        <>
            <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen font-Rubik">

                <div className="w-full h-screen bg-no-repeat bg-cover " style={{ backgroundImage: `url("/Wallpaper.png")` }}>
                    <Navbar />
                    <div className="h-full flex flex-row justify-center items-center pt-[100px]">
                        <div className="w-[1210px] h-[877px] rounded-l-[50px] bg-white/50 flex flex-col justify-center items-center ">
                            <div className="flex flex-col items-center">
                                <h1 className='text-[96px] text-[#1565D8] font-semibold leading-[114px]'>Welcome </h1>
                                <h2 className='text-[48px] text-[#1565D8] font-semibold leading-[57px] mb-[15px]'>to ChicChat</h2>
                                <p className='text-[24px] text-[#030F22] font-medium leading-[28px] font-Prompt opacity-50'>ถ้าตอนนี้คุณกำลังเหงาลองหาใครสักคนคุณด้วยสิ</p>
                            </div>

                            <div className="w-[1068px] mt-[52px]">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-end">
                                        <img src="/friend icon.png" className='pe-[14px] ' />
                                        <h1 className='text-[40px] text-white font-semibold'>Friend</h1>
                                    </div>
                                    <div className="flex flex-row gap-[18px] items-center">

                                        <button className={` ${statusAddfriend ? "hidden" : ""} w-[235px] h-[59px] rounded-[20px] bg-white flex items-center text-[20px] text-[#072653] font-normal`} onClick={changeStatus}>
                                            <img src="/addfriend icon.png" className='pe-[14px] ms-[32px]' /> Add friend
                                        </button>

                                        <label className={` ${statusAddfriend ? "" : "hidden"} relative `} >
                                            <span class="absolute left-0 top-[10px] flex items-center pl-3">
                                                <img src="/search-icon.png" className='pe-[14px] w-[55px] h-[39px] ms-[5px]' />
                                            </span>
                                            <input type="text" className="w-[527px] h-[59px] pl-[70px] rounded-[20px] shadow_1 
                                                    text-[#072653] font-Rubik font-normal border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                                    " placeholder="Search by username" onChange={e => setSearch(e.target.value)} />
                                        </label>
                                        <button className={` ${statusAddfriend ? "" : "hidden"} w-[123px] h-[59px] rounded-[50px] bg-gradient-to-b from-[#072653] from-[2.81%] via-[#1565D8] via-[40.29%] to-[#2FBCE8] to-[96.26%] 
                                        text-[20px] text-[#FFFFFF] font-Montserrat font-semibold leading-[24px]`} onClick={handleSearch}>
                                            Search
                                        </button>
                                        <div className={` ${statusAddfriend ? "" : "hidden"} w-[45px] h-[45px] rounded-[50px] flex flex-row justify-center items-center bg-white cursor-pointer`} onClick={changeStatus}>
                                            <img src="/cross_icon.svg" alt="Cross icon" className="w-[27px] h-[27px]" />
                                        </div>
                                    </div>

                                </div>

                                <div className="w-[1063px] h-[386px] rounded-[20px] bg-white mt-[22px] bg-opacity-70 overflow-y-scroll">
                                    <div className={` ${statusSearch ? "hidden" : ""}`}>
                                        <Friendbox name={"Meaw"} />
                                        <Friendbox name={"Aom"} />
                                        <Friendbox name={"Party"} />
                                        <Friendbox name={"JUSt"} />
                                        <Friendbox name={"JUSt"} />
                                        <Friendbox name={"JUSt"} />
                                        <Friendbox name={"JUSt"} />
                                        <Friendbox name={"JUSt"} />
                                        <Friendbox name={"JUSt"} />
                                        <Friendbox name={"JUSt"} />
                                        <Friendbox name={"JUSt"} />
                                        <Friendbox name={"JUSt"} />
                                    </div>

                                    <div className={` ${statusSearch ? "" : "hidden"}`}>
                                        <Friendbox name={"Meaw"} />
                                        <Friendbox name={"Aom"} />
                                        <Friendbox name={"Party"} />
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
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>Username :</label>
                                    <input type="text" name="" id="" className='bg-transparent ps-[10px] outline-0' placeholder="Eiei" onChange={e => { setUsername(e.target.value) }} />
                                </div>
                                <div className="w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center
                                ">
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>Password :</label>
                                    <input type="password" name="" id="" className='bg-transparent ps-[10px] outline-0' placeholder="***********" onChange={e => { setPassword(e.target.value) }} />
                                </div>
                                <div className="w-[460px] h-[75px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center
                                ">
                                    <div className="flex flex-row items-center">

                                        <label className='text-[24px] text-[#000000] w-[123px] '>Confirm Password</label>
                                        <label className='pe-[13px] text-[24px] text-[#000000] w-[10px] '>:</label>
                                    </div>
                                    <input type="password" name="" id="" className='bg-transparent ps-[10px] outline-0' placeholder="***********" onChange={e => { setConfirmpassword(e.target.value) }} />
                                </div>
                                <div className="w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center
                                ">
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>E-mail :</label>
                                    <input type="email" name="" id="" className='bg-transparent ps-[10px] outline-0 ' placeholder="eieiza555@gmail.com" onChange={e => { setEmail(e.target.value) }} />
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