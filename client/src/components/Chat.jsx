import React, { useState } from 'react'
import Navbar from './Navbar'
import Inbox from './subcomponents/Inbox'
import MessageReceive from './subcomponents/MessageReceive'
import MessageSend from './subcomponents/MessageSend'
import Message from './Message'


export default function Chat() {
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("")
    const [message, setMesaage] = useState("")

    const handleEdit = (e) => {
        e.preventDefault();
        setError(true);
    }
    return (
        <>
            <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen font-Rubik">
                <div className="w-full h-screen bg-no-repeat bg-cover " style={{ backgroundImage: `url("/Wallpaper.png")` }}>
                    <Navbar />
                    <div className="h-full">
                        <div className="flex flex-row h-full justify-center items-center pt-[100px]">{/*  */}

                            {/*Left side "Friend"*/}
                            <div className="w-[700px] h-[877px] rounded-l-[50px] bg-white/50">
                                <div className="flex flex-col items-center bg-white bg-opacity-50 rounded-l-[40px]">
                                    <div className="w-full h-[159px] border-b-2 border-b-[#2FBCE8] flex flex-row justify-center items-center">
                                        <div>
                                            <label class="relative block">
                                                <span class="absolute inset-y-9 left-0 flex items-center pl-3">
                                                    <img src="/search-icon.png" className='pe-[14px] w-[55px] h-[39px] ms-[5px]' />
                                                </span>
                                                <input type="text" className="w-[629px] h-[59px] pl-[70px] rounded-[20px] shadow_1 mt-[11px] 
                                                    text-[#072653] font-Rubik font-normal border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                                    " placeholder="Search by username" onChange={e => setSearch(e.target.value)} />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="w-[700px] h-[718px] overflow-y-scroll">
                                        <Inbox person={"Party"} lastmessage={"Hello broo"} lastsender={"me"} count_message={20} time={"just now"} />
                                        <Inbox person={"Party"} lastmessage={"Hello broo"} lastsender={"me"} count_message={20} time={"just now"} />
                                        <Inbox person={"Party"} lastmessage={"Hello broo"} lastsender={"me"} count_message={20} time={"just now"} />
                                        <Inbox person={"Party"} lastmessage={"Hello broo"} lastsender={"me"} count_message={20} time={"just now"} />
                                        <Inbox person={"Party"} lastmessage={"Hello broo"} lastsender={"me"} count_message={20} time={"just now"} />
                                        <Inbox person={"Party"} lastmessage={"Hello broo"} lastsender={"me"} count_message={20} time={"just now"} />
                                        <Inbox person={"Party"} lastmessage={"Hello broo"} lastsender={"me"} count_message={20} time={"just now"} />
                                        <Inbox person={"Party"} lastmessage={"Hello broo"} lastsender={"me"} count_message={20} time={"just now"} />
                                    </div>
                                </div>
                            </div>

                            {/*Right side "Chat"*/}
                            <div className="w-[1120px] h-[877px] rounded-r-[50px] 
                                bg-white/50 border-l-2  border-l-[#1565D880] 
                                flex flex-col justify-center items-center ">

                                {/*Navbar UserName*/}
                                <div className="w-[1118px] h-[120px] bg-[#2FBCE8] ] flex justify-between items-center rounded-tr-[50px] shadow_1 t-[11px]">
                                    <div className="flex items-center">
                                        <img className='ms-[32px] w-[100px] h-[100px]' src="/MyProfile.png" alt="" />
                                        <h1 className=' text-[32px] ms-[20px] font-medium text-[#000000]'>Username</h1>
                                    </div>
                                </div>

                                {/*Message*/}
                                <div className=" w-[1118px] h-[650px] overflow-y-scroll pt-[25px]">
                                    <MessageReceive message={"ว่าไงเมี้ยว กฟกฟกหสฟากสาส่หฟดา่ฟหสวก่ดหสฟาก่ดาสห่กดส่ฟหกดาส่ฟหสก่ดฟหส่กดสหา่กดส่หกฟดสา่ฟหกสด่หฟกสด่หฟกสด่หฟสาก่ดสฟหกดสหก่ดหส่ดหฟสาก่ดหาสฟ่"} time={"Apr 8, 2023, 8.08 AM"} />
                                    <MessageSend message={"มีเรื่องอยากถามสักเรื่อง "} time={"Apr 8, 2023, 8.10 AM"}/>
                                    <MessageSend message={"มีเรื่องอยากถามสักเรื่อง "} time={"Apr 8, 2023, 8.10 AM"}/>
                                    <MessageSend message={"มีเรื่องอยากถามสักเรื่อง "} time={"Apr 8, 2023, 8.10 AM"}/>
                                    <MessageReceive message={"ว่าไงเมี้ยว กฟกฟกหสฟากสาส่หฟดา่ฟหสวก่ดหสฟาก่ดาสห่กดส่ฟหกดาส่ฟหสก่ดฟหส่กดสหา่กดส่หกฟดสา่ฟหกสด่หฟกสด่หฟกสด่หฟสาก่ดสฟหกดสหก่ดหส่ดหฟสาก่ดหาสฟ่"} time={"Apr 8, 2023, 8.08 AM"} />
                                    <MessageReceive message={"ว่าไงเมี้ยว กฟกฟกหสฟากสาส่หฟดา่ฟหสวก่ดหสฟาก่ดาสห่กดส่ฟหกดาส่ฟหสก่ดฟหส่กดสหา่กดส่หกฟดสา่ฟหกสด่หฟกสด่หฟกสด่หฟสาก่ดสฟหกดสหก่ดหส่ดหฟสาก่ดหาสฟ่"} time={"Apr 8, 2023, 8.08 AM"} />
                                </div>

                                {/*Text input*/}
                                <div className=" w-[1118px] h-[107px] bg-white bg-opacity-50 rounded-br-[40px] flex flex-row justify-center items-center">
                                    <div className="">
                                        <dev>
                                            <label class="relative flex flex-row justify-center items-center ">
                                                <button><img src="/add icon.png" className=' w-[61px] h-[61px]' /></button>
                                                <input type="text" className="w-[880px] h-[59px] ms-[20px] pl-[50px] rounded-[20px]
                                                text-[#072653] font-Rubik font-normal border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                                " placeholder="Aa" onChange={e => setMesaage(e.target.value)} />
                                                <button><img src="/send icon.png" className='w-[53px] h-[53px] ms-[20px]' /></button>
                                            </label>
                                        </dev>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}