import React, { useEffect, useState } from 'react'
import FriendRequire from './FriendRequire';
import axios from 'axios';
import { baseURL } from '../../baseURL'

export default function FriendPopup({ trigger, setTrigger, defaultUser }) {
    const [friendRequest, setFriendRequest] = useState([])
    const [idRequested, setIdRequested] = useState("")

    useEffect(() => {
        if (defaultUser.id != undefined) {
            const getFriendRequestId = async () => {
                const urlGetFriendRequestId = baseURL + "/api/user/getFriendRequestId/" + defaultUser.id
                const res = await axios.get(urlGetFriendRequestId);
                res.data.friendRequest.map(async (FriendId, i) => {
                    const urlgetUsername = baseURL + "/api/user/getUsername/" + FriendId
                    const res = await axios.get(urlgetUsername);
                    setFriendRequest([...friendRequest, { FriendId: FriendId, username: res.data.username }]);
                })
            }
            getFriendRequestId()
        }
        return setFriendRequest([])
    }, [defaultUser])

    useEffect(() => {
        if (idRequested != undefined) {
            const getFriendRequestId = async () => {
                setFriendRequest(friendRequest.filter((dataFriend) => {return dataFriend.FriendId != idRequested}))
            }
            getFriendRequestId()
        }
    }, [idRequested])

    useEffect(() => {
        console.log(friendRequest)
    }, [friendRequest])

    return (trigger) ? (
        <>
            <div className=" h-full w-full top-0 left-0 bg-black/50 flex justify-center items-center absolute font-Rubik">
                <div className="relative w-[814px] h-[346px] rounded-[20px] bg-white">
                    <div className="flex justify-between items-center mx-[17px] my-[18px]">
                        <h1 className=' text-[35px] text-[#1565D8] font-semibold'>Friend requests</h1>
                        <button onClick={() => setTrigger(false)}><img src="close-icon.png" alt="" /></button>
                    </div>
                    <div className="w-full overflow-y-scroll flex flex-col items-center">
                        <div className="h-[254px] ">
                            {
                                friendRequest?.map((friend, i) => {
                                    return <FriendRequire name={friend.username} FriendId={friend.FriendId} defaultUser={defaultUser} key={i} setIdRequested={setIdRequested} />
                                })

                            }
                            {/* <FriendRequire name={"Earn"}></FriendRequire>
                            <FriendRequire name={"Aom"}></FriendRequire>
                            <FriendRequire name={"Meaw"}></FriendRequire> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    ) : <></>
}
