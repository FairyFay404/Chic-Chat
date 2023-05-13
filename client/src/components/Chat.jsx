import React, { useEffect, useState, useRef } from 'react'
import Navbar from './Navbar'
import Inbox from './subcomponents/Inbox'
import Chatting from './subcomponents/Chatting'
import { io } from "socket.io-client";
import axios from 'axios';
import { useLocation } from "react-router-dom";

export default function Chat() {
    const [friendListId, setFriendListId] = useState([]);
    const [chatInfo, setChatInfo] = useState([]);
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("")
    const [focusinbox, setFocusinbox] = useState(-1)
    const [chatIdNow, setChatIdNow] = useState();
    const socket = useRef();
    const [userId, setUserId] = useState(null);

    const location = useLocation();

    /* first time when this page is rendering */
    useEffect(() => {

        socket.current = io("http://localhost:8900");

        /* check first is user-docId exist ? */
        if (sessionStorage.getItem("user-docId") != null) {

            const userDocId = sessionStorage.getItem("user-docId");
            setUserId(userDocId);

            /* get conversation */
            const getConversation = async (userDocId) => {
                try {
                    const res = await axios.get("http://localhost:3000/api/conversation/"+ userDocId);
                    setChatInfo(res.data.conversation);

                } catch (error) {
                    console.log(error);
                }

            }
            /* get conversation of user */
            getConversation(userDocId);
            if (location.state != null)
                setChatIdNow(location.state.conversationId)
        }

    }, []);

    /* fetching friend data to show in inbox */
    useEffect(() => {

        /* get length of friend for fetching data */
        const friendCount = chatInfo.length;
        const userDocId = sessionStorage.getItem("user-docId");

        /* have friend */
        if (friendCount != 0) {
            const friendIdList = chatInfo.map((element) => {
                return element.member.find((user) => user != userDocId)
            });

            const getFriendInfo = axios.get()
        }

    }, [chatInfo])

    useEffect(() => {

        if (userId != null) {
            socket.current.emit("addUser", userId);
        }

        socket.current.on("getUser", users => {
            // console.log(users);
        });

    }, [userId]);


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
                                        {chatInfo.map((element,index) => (
                                            <Inbox person={element.partnerInfo.username} lastmessage={"Hello broo"} lastsender={"a"} count_message={20} time={"just now"} focusinbox={focusinbox} setFocusinbox={setFocusinbox} index={index} chatIdNow={chatIdNow} setChatIdNow={setChatIdNow} chatId = {element.id} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/*Right side "Chat"*/}
                            <div className="w-[1120px] h-[877px] rounded-r-[50px] 
                                bg-white/50 border-l-2  border-l-[#1565D880] 
                                flex flex-col justify-center items-center ">
                                    {chatInfo.map((e,index)=> (
                                        <Chatting name={e.partnerInfo.username} chatIdNow={chatIdNow} chatId = {e.id} index={index} socket={socket} conversation={e}/>
                                    ))}        
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}