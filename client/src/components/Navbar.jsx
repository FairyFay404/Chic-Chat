import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios"
import { baseURL } from '../baseURL';

export default function Navbar() {
    const urlAuth = baseURL + "/api/login/authen"
    const navigate = useNavigate();
    const {pathname} = useLocation()

    useEffect(()=>{
        axios.post(urlAuth,{            
        },{
            headers: {
                'Authorization': `Basic ${sessionStorage.getItem("token-access")}`
            }
        }).then(
            (res) => {
                if(res.data.status == "success"){

                }else if(res.data.message == "jwt expired"){
                    sessionStorage.removeItem("token-access")
                    navigate("/")
                }else{
                    navigate("/")
                    alert("Please login before")
                }
                console.log(res.data.message)
            }
        )
    },[])

    
    const handleLogout = () => {
        alert("logout")
        navigate('/')
        sessionStorage.removeItem("token-access")
    }

    const backToHome = () => {
        alert("back to home")
        navigate('/home')
        // 
    }

    return (
        <>
            <div className="relative">
                <div className="fixed top-0 left-0 w-full h-[100px] bg-white">
                    <div className="max-w-[1920px] mx-auto h-full">
                        <div className="flex flex-row h-full justify-between items-center">
                            <div className="flex items-center cursor-pointer" onClick={backToHome}>
                                <img className='ms-[56px]' src="/ChicChatLOGO.png" alt="" />
                                <h1 className=' text-[30px] font-semibold text-[#1565D8]'>ChicChat</h1>
                            </div>
                            <button className='me-[51px] w-[170px] h-[59px] rounded-[50px] bg-gradient-to-b from-[#DB3D3D] via-[#FC6262] to-[#FF9595] font-semibold text-[20px] text-white font-Montserrat hover:border-[2px] hover:border-[#f02e2e]' onClick={handleLogout}>Log out</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}