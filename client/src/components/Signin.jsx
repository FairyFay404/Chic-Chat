import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signin() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function toRegister(){
        navigate("/register");
    }

    async function handleSignin(){
        // POST request for check password is correct ? 
        const res = await axios.post('http://localhost:3000/api/login', {
            username: username,
            password: password
        });

        if(res.data.status == "success"){
            alert(res.data.message);
            // set any token localStorage
            console.log("token: "+res.data.token);
            localStorage.setItem("token-access", res.data.token);
            navigate("/home");
        }
        else{
            alert(res.data.message);
            navigate("/");
        }
        // console.log(username + password);
        
    }

    
    return (
        <>
            <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen ">
                <div className="w-full h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url("/Wallpaper.png")`}}>
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className="w-[850px] h-[682px] rounded-[50px] bg-gradient-to-b from-[#C9F2FF] from-0% to-[#E9FAFF] to-67%">
                            <div className="flex flex-col items-center mt-[80px]">
                                <p className="text-[#1565D8] font-Montserrat font-bold text-[52px] leading-[130%]">Sign in</p>
                                <p className="text-[#072653] font-Rubik font-normal leading-[19px] mt-[8px]">Welcome to ChicChat ! Let's talk !</p>
                                <p className="after:content-['*'] after:ml-0.5 after:text-red-500
                                    text-[#000000] font-Rubik font-medium text-[18px] leading-[120%] self-start ml-[108px] mt-[39px]
                                ">Username</p>
                                <input type="text" className="w-[680px] h-[76px] pl-[28px] rounded-[20px] shadow_1 mt-[11px] 
                                    text-[#072653] font-Rubik font-medium border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                    " placeholder="Enter your username" onChange={e => setUsername(e.target.value)} autoFocus/>
                                <p className="after:content-['*'] after:ml-0.5 after:text-red-500
                                    text-[#000000] font-Rubik font-medium text-[18px] leading-[120%] self-start ml-[108px] mt-[28px]
                                    ">Password</p>
                                <input type="password" className="w-[680px] h-[76px] pl-[28px] rounded-[20px] shadow_1 mt-[11px] 
                                    text-[#072653] font-Rubik font-medium border-[0px] focus:border-[3px] focus:border-[#178AAE] focus:outline-0
                                    " placeholder="Enter your password"  onChange={e => setPassword(e.target.value)}/>
                                <button className="w-[170px] h-[59px] rounded-[50px] mt-[90px] bg-gradient-to-b from-[#072653] from-3% via-[#1565D8] via-40% to-[#2FBCE8] to-96%
                                    text-[#FFFFFF] font-Montserrat font-semibold text-[20px] leading-[24px] cursor-pointer
                                     hover:border-[#178AAE] transition duration-300 ease-in-out hover:scale-110
                                    " onClick={handleSignin}>Sign in</button>
                                <p className="mt-[20px] text-[#696F79] font-Rubik font-normal text-[14px]">I don’t have an account? <span className="text-[#1565D8] underline cursor-pointer" onClick={toRegister}>Register </span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
