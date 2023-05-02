import React, { useEffect, useState } from 'react'
import MessageReceive from './MessageReceive'
import MessageSend from './MessageSend'

export default function Chatting({ name, chatIdNow, chatId, index }) {
    const [message, setMesaage] = useState("")

    useEffect(() => {
        document.getElementById(index).focus();
        console.log(chatIdNow);
    },[chatIdNow])


    return (
        <div className={`${chatId == chatIdNow ? "" : "hidden" }`}>
            {/*Navbar UserName*/}
            <div className="w-[1118px] h-[120px] bg-[#2FBCE8] flex justify-between items-center rounded-tr-[50px] shadow_1 ">
                <div className="flex items-center">
                    <img className='ms-[32px] w-[100px] h-[100px]' src="/MyProfile.png" alt="" />
                    <h1 className=' text-[32px] ms-[20px] font-medium text-[#000000]'>{name}</h1>
                </div>
            </div>

            {/*Message*/}
            <div className=" w-[1118px] h-[650px] overflow-y-scroll pt-[25px]">
                <MessageReceive message={"ว่าไงเมี้ยว กฟกฟกหสฟากสาส่หฟดา่ฟหสวก่ดหสฟาก่ดาสห่กดส่ฟหกดาส่ฟหสก่ดฟหส่กดสหา่กดส่หกฟดสา่ฟหกสด่หฟกสด่หฟกสด่หฟสาก่ดสฟหกดสหก่ดหส่ดหฟสาก่ดหาสฟ่"} time={"Apr 8, 2023, 8.08 AM"} />
                <MessageSend message={"วันนี้สัน ฟกฟกฟกฟกฟกฟหกฟกฟหกฟก "} time={"Apr 8, 2023, 8.10 AM"} />
                <MessageSend message={"มีเรื่องอยากถามสักเรื่อง "} time={"Apr 8, 2023, 8.10 AM"} />
                <MessageSend message={"มีเรื่องอยากถามสักเรื่อง "} time={"Apr 8, 2023, 8.10 AM"} />
                <MessageReceive message={"ว่าไงเมี้ยว กฟกฟกหสฟากสาส่หฟดา่ฟหสวก่ดหสฟาก่ดาสห่กดส่ฟหกดาส่ฟหสก่ดฟหส่กดสหา่กดส่หกฟดสา่ฟหกสด่หฟกสด่หฟกสด่หฟสาก่ดสฟหกดสหก่ดหส่ดหฟสาก่ดหาสฟ่"} time={"Apr 8, 2023, 8.08 AM"} />
                <MessageReceive message={"ไง"} time={"Apr 8, 2023, 8.08 AM"} />
            </div>

            {/*Text input*/}
            <div className=" w-[1118px] h-[107px] bg-white bg-opacity-50 rounded-br-[40px] flex flex-row justify-center items-center">
                <div className="">
                    <dev>
                        <label class="relative flex flex-row justify-center items-center ">
                            <button><img src="/add icon.png" className=' w-[61px] h-[61px]' /></button>
                            <input type="text" id={index} className="w-[880px] h-[59px] ms-[20px] pl-[50px] rounded-[20px]
                                text-[#072653] font-Rubik font-normal border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                " placeholder="Aa" onChange={e => setMesaage(e.target.value)}/>
                            <button><img src="/send icon.png" className='w-[53px] h-[53px] ms-[20px]' /></button>
                        </label>
                    </dev>
                </div>
            </div>


        </div>
    )
}
