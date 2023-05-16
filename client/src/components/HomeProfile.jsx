import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Friendbox from './subcomponents/Friendbox'
import AddFriend from './subcomponents/AddFriend'
import FriendPopup from './subcomponents/FriendPopup'
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons"
import axios from 'axios'
import { baseURL } from '../baseURL'

export default function HomeProfile() {
    const [username, setUsername] = useState("Eiei")
    const [password, setPassword] = useState("123456")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [email, setEmail] = useState("bob@mail.com")
    const [search, setSearch] = useState("")
    const [statusAddfriend, setStatusAddfriend] = useState(false)
    const [statusSearch, setStatusSearch] = useState(false);
    const [statusEdit, setStatusEdit] = useState(false);
    const [statusError, setStatusError] = useState(false);
    const [textError, setTextError] = useState("");   
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [noti_number, setNotiNumber] = useState(0);
    const [buttonPopup, setButtonPopup] = useState(0);

    const [defaultUser, setDefaultUser] = useState({})
    const [allconversation, setAllconversation] = useState([]) // (similarly friend)
    const [dataRequested, setDataRequested] = useState()
    const [dataSearch, setDataSearch] = useState([])

    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)

    const urlgetInfo = baseURL + "/api/user/getInfo"
    const urlupdateInfo = baseURL + "/api/user/updateInfo"
    useEffect(() => {
        const fecthData = async () => {
            const res = await axios.post(urlgetInfo, {}, {
                headers: {
                    'Authorization': `Basic ${sessionStorage.getItem("token-access")}`
                }
            })
            setDefaultUser(res.data.user) // personal information (id, username, password, )
            setUsername(res.data.user.username)
            setPassword(res.data.user.password)
            setEmail(res.data.user.email)

            // All conversation of **USER** (similarly friend)
            const urlgetConversation = baseURL + "/api/conversation/" + res.data.user.id
            const resConversation = await axios.get(urlgetConversation)
            setAllconversation(resConversation.data.conversation)
        }
        fecthData();

    }, [])

    useEffect(() => {
        if (dataRequested != undefined) {
            if (dataRequested.status == "success accept") { // add conversation when accpet only
                const changeConversationPopup = () => {
                    setAllconversation([...allconversation, { ...dataRequested.dataConversation }])
                    // console.log([...allconversation, {...dataRequested.dataConversation}])
                }
                changeConversationPopup()
            }
        }
    }, [dataRequested])

    useEffect(() => {
        console.log(allconversation)
    }, [allconversation])

    const setErrorDefault = () => {
        setErrorEmail(false)
        setErrorPassword(false)
        setErrorConfirmPassword(false)
        setErrorUsername(false)
    }

    const handleEdit = (e) => {
        e.preventDefault();
        setStatusEdit(!statusEdit)
        setStatusError(false)
        setErrorDefault()
    }

    const handleSave = (e) => {
        setErrorDefault()
        e.preventDefault();
        console.log(username + password + email)

        if (confirmpassword != password) {
            setStatusError(true)
            setTextError("Password not match. Please try again.")
            setErrorPassword(true)
            setErrorConfirmPassword(true)
        } else {
            axios.post(urlupdateInfo, {
                username: username,
                password: password,
                email: email
            }, {
                headers: {
                    'Authorization': `Basic ${sessionStorage.getItem("token-access")}`
                }
            }).then((res) => {
                if (res.data.status == "fail") {
                    // set Default Error of each input for reset Error
                    setStatusError(true)
                    if (res.data.type == "username") {
                        setErrorUsername(true)
                    } else if (res.data.type == "password") {
                        setErrorPassword(true)
                    }else if (res.data.type == "email") {
                        setErrorEmail(true)
                    }
                        setTextError(res.data.message);
                    setTextError(res.data.message)
                } else {
                    alert(res.data.message)
                    sessionStorage.removeItem("token-access")
                    sessionStorage.setItem("token-access", res.data.token);
                    location.reload()
                }
            })
        }
    }
    const changeStatus = () => {
        setStatusAddfriend(!statusAddfriend)
        setStatusSearch(false)
    }

    const handleSearch = () => {
        setStatusSearch(!statusSearch)
        const urlSearchfriend = baseURL + "/api/user/searchfriend"
        axios.post(urlSearchfriend, {
            word: search,
            friends: defaultUser.friends,
            myId: defaultUser.id
        }).then((res)=>{
            setDataSearch(res.data.search)
        })
    }

    useEffect(()=>{
        console.log(dataSearch)
    },[dataSearch])


    return (
        <>
            <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen font-Rubik">

                <div className="w-full h-screen bg-no-repeat bg-cover " style={{ backgroundImage: `url("/Wallpaper.png")` }}>
                    <Navbar />
                    <div className="h-full flex flex-row justify-center items-center pt-[100px]">
                        <div className="w-[1210px] h-[877px] rounded-l-[50px] bg-white/50 flex flex-col justify-center items-center ">
                            <div className="flex flex-col items-center">
                                <h1 className='text-[96px] text-[#1565D8] font-semibold leading-[114px]'>Welcome</h1>
                                <h2 className='text-[48px] text-[#1565D8] font-semibold leading-[57px] mb-[15px]'>to ChicChat</h2>
                                <p className='text-[24px] text-[#030F22] font-medium leading-[28px] font-Prompt opacity-50'>ถ้าตอนนี้คุณกำลังเหงาลองหาใครสักคนคุยด้วยสิ</p>
                            </div>

                            <div className="w-[1068px] mt-[52px]">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-center items-end">
                                        <img src="/friend icon.png" className='pe-[14px] ' />
                                        <h1 className='text-[40px] text-white font-semibold'>Friend</h1>
                                        <div className="relative">
                                            <button onClick={() => setButtonPopup(true)}><img src="/Notification.png" /></button>
                                            <div className={` ${noti_number != 0  ? "" : "hidden"} w-[35px] h-[35px] bg-[#FF3F3F] rounded-[50%] ms-[15px] text-white flex justify-center items-center absolute top-2 left-7`}>
                                                <h1>{noti_number}</h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-[18px] items-center">
                                        <button className={` ${statusAddfriend ? "hidden" : ""} w-[235px] h-[59px] rounded-[20px] bg-white flex items-center text-[20px] text-[#072653] font-normal`} onClick={changeStatus}>
                                            <img src="/addfriend icon.png" className='pe-[14px] ms-[32px]' /> Add friend
                                        </button>

                                        <label className={` ${statusAddfriend ? " active:translate-x-[0%]" : "hidden translate-x-[50%] transition duration-300"} relative `} >
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
                                        {
                                            allconversation?.map((conversation, i) => {
                                                return <Friendbox name={conversation.partnerInfo.username} conversationId={conversation.id} count_message={3} key={i}/>
                                            })
                                        }
                                        {/* <Friendbox name={"Meaw"} count_message={5} />
                                        <Friendbox name={"Aom"} count_message={3} />
                                        <Friendbox name={"Party"} count_message={1} /> */}
                                    </div>

                                    <div className={` ${statusSearch ? "" : "hidden"}`}>
                                        {
                                            dataSearch?.map((user,i)=>{
                                                return <AddFriend name={user.username} isFriend={false} myId={defaultUser.id} friendsId={user.id} key={i} />
                                                // return <AddFriend name={user.username} isFriend={true} />
                                            })
                                        }
                                        {/* <AddFriend name={"meaw"} isFriend={true} myId={"1234"} friendsId={"5678"} /> */}
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
                            <h1 className='text-[40px] font-medium mb-[39px]'>{defaultUser.username}</h1>
                            <div className="grid gap-[11px]">
                                <div className={`${errorUsername ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE] "} 
                                w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px] ps-[28px] font-medium text-[20px] text-[#072653] flex items-center`} >

                                    <label className='pe-[13px] text-[24px] text-[#000000] '>Username :</label>
                                    {statusEdit ?
                                        //<input type="text" className={`'bg-transparent ps-[10px] outline-0' ${errorUsername ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE] "} 
                                        // w-[680px] h-[76px] rounded-[20px] ps-[28px] pr-[30px] shadow-[0_10px_10px_rgba(0,0,0,0.25)]`} 
                                        // value={username} placeholder="Enter your new username" onChange={e => { setUsername(e.target.value) }} /> :
                                        <input type="text" className='bg-transparent ps-[10px] outline-0' value={username} placeholder="Enter your new username" onChange={e => { setUsername(e.target.value) }} /> :
                                        <label className='ps-[10px] text-[20px] text-[#07265380] '>{defaultUser.username}</label>
                                    }
                                    
                                </div>
                                <div className={`${errorPassword ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE] "} 
                                    relative w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px] ps-[28px] font-medium text-[20px] text-[#072653] flex items-center`} >
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>Password :</label>
                                    {statusEdit ?
                                        <input type={passwordVisible ? "text" : "password"} className='bg-transparent ps-[10px] outline-0 placeholder:text-[16px]' value={password} placeholder="Enter your new password" onChange={e => { setPassword(e.target.value) }} /> :
                                        <input type="password" className='bg-transparent ps-[10px] text-[#07265380] outline-0' value={defaultUser.password} placeholder="Enter your new password" onChange={e => { setPassword(e.target.value) }} disabled />
                                    }
                                    <div className={` ${statusEdit ? "flex absolute  right-[46px]"  : "hidden"}  `}  onClick={() => setPasswordVisible(!passwordVisible)}>
                                        {
                                            passwordVisible ? <EyeOutlined className='  bg-white bg-opacity-80 text-[28px]'/> : <EyeInvisibleOutlined className='  bg-white bg-opacity-80 text-[28px]'/>
                                        }
                                    </div>
                                </div>
                                <div className={` ${statusEdit ? `${errorConfirmPassword ? "border-[#FF0000] border-[3px]" : ""} relative w-[460px] h-[75px] bg-white bg-opacity-70 rounded-[20px] ps-[28px] font-medium text-[20px] text-[#072653] flex items-center`: "hidden"}`}>
                                    <div className="flex flex-row items-center">
                                        <label className='text-[24px] text-[#000000] w-[123px] '>Confirm Password</label>
                                        <label className='pe-[13px] text-[24px] text-[#000000] w-[10px] '>:</label>
                                    </div>
                                    <input type={confirmpasswordVisible ? "text" : "password"} className=' outline-none bg-transparent ps-[10px] outline-0 placeholder:text-[16px]' placeholder="Enter your new password" onChange={e => { setConfirmpassword(e.target.value) }} />
                                    <div className={` ${statusEdit ? "flex absolute  right-[46px]"  : "hidden"}  `}  onClick={() => setConfirmPasswordVisible(!confirmpasswordVisible)}>
                                        {
                                            confirmpasswordVisible ? <EyeOutlined className='  bg-white bg-opacity-80 text-[28px]'/> : <EyeInvisibleOutlined className='  bg-white bg-opacity-80 text-[28px]'/>
                                        }
                                    </div>
                                </div>
                                <div className={`w-[460px] h-[59px] bg-white bg-opacity-70 rounded-[20px]
                                ps-[28px] font-medium text-[20px] text-[#072653]
                                flex items-center ${errorEmail ? "border-[#FF0000] border-[3px]" : ""}
                                `}>
                                    <label className='pe-[13px] text-[24px] text-[#000000] '>E-mail :</label>
                                    {statusEdit ?
                                        <input type="email" className='bg-transparent ps-[10px] outline-0 ' value={email} placeholder="Enter your new email" onChange={e => { setEmail(e.target.value) }} /> :
                                        <label className='ps-[10px] text-[20px] text-[#07265380] '>{defaultUser.email}</label>
                                    }
                                </div>
                                <div className={` ${statusError ? " ms-7 flex justify-start items-center" : "hidden"}  `}>
                                    <img src="/error-icon.png" />
                                    <label className='text-[#DC1414] ms-[5.28px]'>{textError}</label>
                                </div>
                            </div>
                            {statusEdit ?
                                <div className="mt-[53px] text-[20px] text-white font-semibold font-Montserrat">
                                    <button className='bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] w-[170px] h-[59px] rounded-[50px] mx-[15px]' onClick={handleSave}>Save</button>
                                    <button className='bg-gradient-to-b from-[#DB3D3D] via-[#FC6262] to-[#FF9595] w-[170px] h-[59px] rounded-[50px]' onClick={handleEdit}>Cancel</button>
                                </div> :
                                <button onClick={handleEdit} className='w-[260px] h-[59px] rounded-[50px] mt-[53px]
                                bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8]
                                text-[20px] text-white font-semibold font-Montserrat
                                hover:border-[2px] hover:border-[#178AAE] transition duration-300 ease-in-out hover:scale-110
                                '>Edit your profile</button>
                            }
                        </div>

                    </div>
                    <FriendPopup trigger={buttonPopup} setTrigger={setButtonPopup} defaultUser={defaultUser} dataRequested={dataRequested} setDataRequested={setDataRequested} noti_number={noti_number} setNotiNumber={setNotiNumber}></FriendPopup>
                </div>

            </div>
        </>
    )
}