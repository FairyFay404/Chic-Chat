import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { baseURL } from '../baseURL';
import forge from 'node-forge';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState('');

    const [error, setError] = useState(false);
    const [textError, setTextError] = useState("");
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorConfirmPassword, setErrorConfirmPassword] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)


    const navigate = useNavigate();

    const generatedUserKey = () => {

        /* RANDOM AES KEY [32 bytes = 256 bits key] */
        const aesKey = forge.random.getBytesSync(32);
        /* create cipher object in cbc mode AES Encryption */
        const cipher = forge.cipher.createCipher('AES-CBC', aesKey);
        /* craete iv (initialization vector) by start() */
        const iv = forge.random.getBytesSync(16);

        return { cipher: cipher, aesKey: aesKey, iv: iv };
    }

    const setErrorDefault = () => {
        setErrorEmail(false)
        setErrorPassword(false)
        setErrorConfirmPassword(false)
        setErrorUsername(false)
    }

    const handleSubmit = async (e) => {
        const urlRegister = baseURL + "/api/register"
        e.preventDefault();
        if (username.trim().length == 0 || password.trim().length == 0 || confirmPassword.trim().length == 0 || email.trim().length == 0) {
            setError(true);
            setTextError("Please fill out all");
        } else if (password.trim() != confirmPassword.trim()) { // Password != confirmPassword
            setError(true);
            setTextError("Password and Confirm password don't match");
            setErrorPassword(true)
            setErrorConfirmPassword(true)
        }
        else {
            const res = await axios.post(urlRegister, {
                username: username,
                password: password,
                email: email,
            });

            if (res.data.status == "fail") {
                // set Default Error of each input for reset Error
                setErrorDefault();

                setError(true);
                if (res.data.type == "username") {
                    setErrorUsername(true)
                } else if (res.data.type == "password") {
                    setErrorPassword(true)
                }else if (res.data.type == "email") {
                    setErrorEmail(true)
                }
                setTextError(res.data.message);
            }
            if (res.data.status == "success") {
                let userKeyObjString = JSON.stringify(generatedUserKey());
                localStorage.setItem(res.data.userId, userKeyObjString);
                alert(res.data.message)
                navigate("/");
            }
        }
    }


    return (
        <>
            <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen">
                <div className="w-full h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url("/Wallpaper.png")` }}>
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className="w-[850px] h-[931px] rounded-[50px] bg-gradient-to-b from-[#C9F2FF] from-0% to-[#E9FAFF] to-67% shadow-[0_20px_20px_rgba(0,0,0,0.25)]">
                            <div className="flex flex-col justify-center items-center font-Rubik">
                                <h1 className=' font-Montserrat text-[52px] font-bold text-[#1565D8] pt-[80px] pb-[28px] leading-[68px]'>Register</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col justify-center items-center gap-[28px]">
                                        <div className="username">
                                            <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[22px]'>Username</p>
                                            <input type="text" id='box_username' className={` ${errorUsername ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE] "} w-[680px] h-[76px] rounded-[20px] ps-[28px] pr-[30px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:outline-0`} autoFocus placeholder='Enter your username' onChange={e => setUsername(e.target.value)} />
                                        </div>
                                        <div className="password">
                                            <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[23px]'>Password</p>
                                            <input type="password" id='box_password' className={` ${errorPassword ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE] "} w-[680px] h-[76px] rounded-[20px] ps-[28px] pr-[30px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:outline-0`} placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <div className="Confirm password">
                                            <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[23px]'>Confirm Password</p>
                                            <input type="password" id='box_password' className={` ${errorConfirmPassword ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE] "} w-[680px] h-[76px] rounded-[20px] ps-[28px] pr-[30px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:outline-0`} placeholder='Enter your password' onChange={e => setConfirmPassword(e.target.value)} />
                                        </div>
                                        <div className="email">
                                            <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[23px]'>E-mail</p>
                                            <input type="email" id='box_email' className={` ${errorEmail ? "border-[#FF0000] border-[3px]" : "focus:border-[3px] focus:border-[#178AAE] "} w-[680px] h-[76px] rounded-[20px] ps-[28px] pr-[30px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:outline-0`} placeholder='Enter your e-mail' onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div className={`w-full ml-[22px] ${error ? "" : "hidden"}`}>
                                            <label id='alert-text' className='text-start text-red-700 '><img src="/error-icon.png" className='inline' /> {textError}</label>
                                        </div>
                                        <button type="submit" className={`${error ? "" : "mt-[50px]"} w-[170px] h-[59px] text-[20px] font-semibold text-white font-Montserrat rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] hover:border-[2px] hover:border-[#178AAE] transition duration-300 ease-in-out hover:scale-110`}>Register</button>
                                    </div>
                                </form>
                                <p className='font-normal text-[14px] text-[#696F79] pt-[20px] leading-[17px]'>Do you already have an account? <a href="/" className='text-[#1565D8] underline decoration-solid '>Log in</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}