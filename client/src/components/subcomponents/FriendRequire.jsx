import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from '../../baseURL';

export default function FriendRequire({ name, FriendId, defaultUser , setDataRequested}) {
    useEffect(() => {

    }, [])

    const handleAccept = () => {
        const urlchangeStatusRequest = baseURL + "/api/user/changeStatusRequest"
        const fetchchangeStatusRequest = async () => {
            const res = await axios.post(urlchangeStatusRequest, {
                id: defaultUser.id,
                isaccept: true,
                friendId: FriendId
            })
            console.log(res.data.status)
            setDataRequested(FriendId)
        }
        fetchchangeStatusRequest()
    }

    const handleReject = () => {
        const urlchangeStatusRequest = baseURL + "/api/user/changeStatusRequest"
        const fetchchangeStatusRequest = async () => {
            const res = await axios.post(urlchangeStatusRequest, {
                id: defaultUser.id,
                isaccept: false,
                friendId: FriendId
            })
            console.log(res.data.status)
        }
        fetchchangeStatusRequest()
        setDataRequested(FriendId)
    }

    return (
        <>
            <div className=" w-full h-[85px] ">
                <div className="w-[780px] border-t-2 border-t-[#2FBCE8] "></div>
                <div className="flex justify-between my-[12px] mx-[20px]">
                    <div className=" flex items-center">
                        <img src="/Profile.png" className='' />
                        <h1 className='ps-[25px] text-[20px] font-medium'>{name}</h1>
                    </div>
                    <div className=" grid grid-flow-col gap-2">
                        <button onClick={handleAccept}><img src="btn-yes.png" /></button>
                        <button onClick={handleReject}><img src="btn-no.png" /></button>
                    </div>
                </div>
            </div>
        </>
    );
}
