import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../baseURL';

export default function Signin() {
    const navigate = useNavigate();
    const urlAuth = baseURL + "/api/login/authen"
    const {pathname} = useLocation()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [textError, setTextError] = useState("Meaw");
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    useEffect(() => {
        const key = sessionStorage.getItem("WVJ7NSg5Pqa8fYNcstKz");
        console.log(key);

        axios.post(urlAuth,{            
        },{
            headers: {
                'Authorization': `Basic ${sessionStorage.getItem("token-access")}`
            }
        }).then(
            (res) => {
                if(res.data.status == "success"){
                    if(location.pathname == "/"){
                        navigate("/home")
                    }
                }else if(res.data.message == "jwt expired"){
                    sessionStorage.removeItem("token-access")
                    navigate("/")
                }else{

                }
            }
        )


    },[])

    function toRegister() {
        navigate("/register");
    }

    const setErrorDefault = () =>{
        setErrorEmail(false)
        setErrorPassword(false)
    }

    async function handleSignin() {
        const urlSignin = baseURL + "/api/login"
        // POST request for check password is correct ? 
        const res = await axios.post(urlSignin, {
            email: email,
            password: password
        });
        
        if(res.data.status == "fail"){
             // set Default Error of each input for reset Error
            setErrorDefault();

            setError(true)
            if(res.data.message == "Email not found"){
                setErrorEmail(true);
                setTextError(res.data.message)
            }
            if(res.data.message == "Incorrect password"){
                setErrorPassword(true);
                setTextError(res.data.message);
            }

        }

        if (res.data.status == "success") {
            alert(res.data.message);
            // set any token sessionStorage
            console.log("token: " + res.data.token);
            sessionStorage.setItem("token-access", res.data.token);
            sessionStorage.setItem("user-email", res.data.userInfo.email);
            sessionStorage.setItem("user-docId", res.data.userInfo.userDocId);
            navigate("/home");
        }
    
    }

    return (
        <>
            <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen ">
                <div className="w-full h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url("/Wallpaper.png")` }}>
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className="w-[850px] h-[682px] rounded-[50px] bg-gradient-to-b from-[#C9F2FF] from-0% to-[#E9FAFF] to-67%">
                            <div className="flex flex-col items-center mt-[80px]">
                                <p className="text-[#1565D8] font-Montserrat font-bold text-[52px] leading-[130%]">Sign in</p>
                                <p className="text-[#072653] font-Rubik font-normal leading-[19px] mt-[8px]">Welcome to ChicChat ! Let's talk !</p>
                                <p className="after:content-['*'] after:ml-0.5 after:text-red-500
                                    text-[#000000] font-Rubik font-medium text-[18px] leading-[120%] self-start ml-[108px] mt-[39px]
                                ">Email</p>
                                <input type="text" className={`${errorEmail ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE]"} w-[680px] h-[76px] pl-[28px] pr-[30px] rounded-[20px] shadow_1 mt-[11px] 
                                    text-[#072653] font-Rubik font-medium border-[0px]  focus:outline-0
                                    `} placeholder="Enter your email" onChange={e => setEmail(e.target.value)} autoFocus />
                                <p className="after:content-['*'] after:ml-0.5 after:text-red-500
                                    text-[#000000] font-Rubik font-medium text-[18px] leading-[120%] self-start ml-[108px] mt-[28px]
                                    ">Password</p>
                                <input type="password" className={`${errorPassword ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE]"} w-[680px] h-[76px] pl-[28px] pr-[30px] rounded-[20px] shadow_1 mt-[11px] 
                                    text-[#072653] font-Rubik font-medium border-[0px]  focus:outline-0
                                    `} placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
                                <div className={`self-start ml-[113px] mt-[27px] ${error ? "" : "hidden"}`}>
                                    <label id='alert-text' className='text-start text-red-700 '><img src="/error-icon.png" className='inline' /> {textError}</label>
                                </div>
                                <button className={` ${error ? "mt-[29px]" : "mt-[73px]"} w-[170px] h-[59px] rounded-[50px]   bg-gradient-to-b from-[#072653] from-3% via-[#1565D8] via-40% to-[#2FBCE8] to-96%
                                    text-[#FFFFFF] font-Montserrat font-semibold text-[20px] leading-[24px] cursor-pointer
                                     hover:border-[#178AAE] transition duration-300 ease-in-out hover:scale-110
                                    `} onClick={handleSignin}>Sign in</button>
                                <p className="mt-[20px] text-[#696F79] font-Rubik font-normal text-[14px]">I don’t have an account? <span className="text-[#1565D8] underline cursor-pointer" onClick={toRegister}>Register </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
