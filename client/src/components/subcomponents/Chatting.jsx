import React, { useEffect, useState,useRef } from 'react';
import MessageReceive from './MessageReceive';
import MessageSend from './MessageSend';
import axios from 'axios';
import { baseURL } from '../../baseURL';



/* conversation is object */
/* conversation = {
    id: string,
    members: [
        member1DocId,
        member2DocId,
    ]
} */

export default function Chatting({ name, chatIdNow, chatId, index, socket, conversation, setRealTime }) {
    const [messages, setMessages] = useState([]);
    const [newmessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [userId, setUserId] = useState("");
    const scrollRef = useRef();
    const addMessageURL = "/api/messages/add";

    useEffect(() =>{
        /* set userId */
        const userId = sessionStorage.getItem("user-docId");
        setUserId(userId);
        socket.current.on("getMessage", (data)=>{
            setArrivalMessage({
                conversationId : conversation.id,
                senderId: data.senderId,
                text: data.text,
                createAt: Date.now(),
                updateAt: Date.now()
            })
        })
        
    },[])


    /* for update message in array */
    useEffect(()=> {
        arrivalMessage && conversation?.member.includes(arrivalMessage.senderId) &&
        setMessages([...messages, arrivalMessage])

    },[arrivalMessage, chatIdNow])
 

    useEffect(() => {
        document.getElementById(index).focus();
        console.log(chatIdNow);

        const getMessage = async (chatIdNow) => {

            try {
                /* fetching message for showing in another conversation by conversationId(chatId) */
                const res = await axios.get("http://localhost:3000/api/messages/"+ chatIdNow);

                if(res.data.status == "success"){
                    setMessages(res.data.listMessages);
                    console.log(res.data.listMessages[0].createAt);
                }

            } catch (err) {
                console.log(err);
            }

        }

        getMessage(chatIdNow);

    },[chatIdNow])

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior: "smooth"});
    },[messages])



    const handleSubmit = (e)=>{

        e.preventDefault();
        
        const receiverId = conversation.member.find((user)=> user !== userId);

        socket.current.emit("sendMessage", {
            senderId: userId, 
            receiverId, 
            text: newmessage
        })

        const saveMessage = async () => {
            try {

                const message = {
                    conversationId: conversation.id,
                    text: newmessage, 
                    senderId: userId,
                }

                const res = await axios.post(baseURL + addMessageURL, message);


                if(res.data.status == "success"){
                    console.log("save message successfully");
                    setMessages([ ...messages, res.data.messageDoc]);
                    // clear input
                    setNewMessage("");
                    const newMessageInput = document.getElementById(index);
                    newMessageInput.value = "";
                }
                else {
                    console.log("can't save message ");
                }
            } catch (err) {
                console.log(err);
            }
        }
        saveMessage();

    }


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
                {messages.map((message)=> {
                    /*  check is date ?  */
                    let time; 
                    if(message.createAt instanceof Date) {
                        time = message.createAt;
                    }
                    else {
                        const timestampValue = message.createAt.seconds * 1000 + message.createAt.nanoseconds / 1000000;
                        time = new Date(timestampValue);
                        setRealTime(time)
                    }

                    if(message.senderId == userId){
                        return <div ref={scrollRef}> <MessageSend message={message.text} time={time}/> </div>
                    }
                    else{
                        return <div ref={scrollRef}> <MessageReceive message={message.text} time={time}/> </div>
                    }
                })}
            </div>

            {/*Text input*/}
            <div className=" w-[1118px] h-[107px] bg-white bg-opacity-50 rounded-br-[40px] flex flex-row justify-center items-center">
                <div className="">
                    <dev>
                        <label class="relative flex flex-row justify-center items-center ">
                            <button><img src="/add icon.png" className=' w-[61px] h-[61px]' /></button>
                            <input type="text" id={index} className="w-[880px] h-[59px] ms-[20px] pl-[50px] rounded-[20px]
                                text-[#072653] font-Rubik font-normal border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                " placeholder="Aa" onChange={e => setNewMessage(e.target.value)}/>
                            <button onClick={ handleSubmit }><img src="/send icon.png" className='w-[53px] h-[53px] ms-[20px]' /></button>
                        </label>
                    </dev>
                </div>
            </div>


        </div>
    )
}
