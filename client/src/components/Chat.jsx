import React, { useState } from 'react'
import Navbar from './Navbar'
import Inbox from './subcomponents/Inbox'
import Chatting from './subcomponents/Chatting'


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
                                <Chatting name={"Party"}/>         
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}