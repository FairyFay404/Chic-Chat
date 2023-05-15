import React, { useEffect, useState } from 'react'
import FriendRequire from './FriendRequire';
import axios from 'axios';
import { baseURL } from '../../baseURL'

export default function FriendPopup({ trigger, setTrigger, defaultUser, dataRequested, setDataRequested }) {
    const [friendRequest, setFriendRequest] = useState([])

    // get all onRequest for show in popup requstion be friend
    useEffect(() => {
        if (defaultUser.id != undefined) { // For prevent first setDefaultUser
            const getFriendRequestId = async () => {
                const temp = []
                await Promise.all(defaultUser.onRequest.map(async (idRequest, i) => {
                    const urlgetUsername = baseURL + "/api/user/getUsername/" + idRequest
                    const res = await axios.get(urlgetUsername);
                    console.log(res.data.username)
                    temp.push({username : res.data.username, idRequest: idRequest})
                }))
                setFriendRequest(temp);
            }
            getFriendRequestId()
        }
    }, [defaultUser])

    // Do when user change status of requstion be friend
    useEffect(() => {
        if (dataRequested != undefined) { // For prevent first setDataRequested
            
            const changeRequestPopup = async () => {
                //dataFriend.idRequest -> Doc id friend from Popup
                //dataRequested.friendId -> Doc id friend from action requestion 
                setFriendRequest(friendRequest.filter((dataFriend) => {return dataFriend.idRequest != dataRequested.friendId}))
            }
            changeRequestPopup()
        }
    }, [dataRequested])

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
                                    return <FriendRequire name={friend.username} idRequest={friend.idRequest} defaultUser={defaultUser} key={i} setDataRequested={setDataRequested} />
                                })

                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : <></>
}
