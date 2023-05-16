import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseURL } from '../../baseURL';
import { encryptDataRSA } from '../../../usersKey';

export default function AddFriend({name,isFriend, myId, friendsId}) {
    const [valueisFriend, setValueisFriend] = useState(isFriend);
    const [friendPublicKey, setFriendPublicKey] = useState(null);
    

    useEffect(()=>{
        if(friendPublicKey){
            /* 2. get my aesKey */
            const myAesKeyString = localStorage.getItem("aesKey-"+myId);
            /* 3. encrypted my aes with friend public key */
            const encryptedAesKey = encryptDataRSA(myAesKeyString, friendPublicKey);

            const saveMyAesKeyURL = baseURL + "/api/aesKey/saveAesKey";
            const saveMyAesKey = async (userDocId,friendId,encryptedAesKey) =>{
                const res = await axios.post(saveMyAesKeyURL,{
                    userDocId,
                    friendId,
                    encryptedAesKey
                }); 
            }

            /* 4. save encrypted aes key to firebase */
            saveMyAesKey(myId,friendsId,encryptedAesKey);
        }
    },[friendPublicKey])

    const handleAddfriend = () => {
        setValueisFriend(true)
        const urlAddfriend = baseURL + "/api/user/addFriend"
        const addFriend = async ()=>{
            try {
                const res = await axios.post(urlAddfriend, {
                    myId : myId,
                    friendId : friendsId
                });
            } catch (err) {
                console.log(err);
            }
        }
        addFriend();
        // call API update isFriend with name(document id friend)
        /* after add friend we will get my aes key and encrypt it will friend public key */
        /* and then push it in firebase  */
        /* 1. fetching public of friend */
        const getFriendPublicKeyURL = baseURL + "/api/rsaKey/";
        const getFriendPublicKey = async () => {
            /* fetching data */
            const res = await axios.get(getFriendPublicKeyURL+friendsId);
            
            if(res.data.status == "success"){
                setFriendPublicKey(res.data.publicKey);
                return;
            }
        }

        getFriendPublicKey();
    }


    return (
        <>
            <div className="w-[1053px] h-[77px] flex justify-between items-center border-b-2 border-b-[#2FBCE8]">
                <div className="flex flex-row justify-center items-center">
                    <img src="/Profile.png" className='ms-[38px] me-[25px] ' />
                    <h1 className='text-[20px] font-medium'>{name}</h1>
                </div>
                {/*status : not Friend */}
                <button className={` ${valueisFriend ? "hidden" : ""} flex flex-row justify-center items-center w-[55px] h-[40px] rounded-[50px] mr-[29px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] hover:border-[2px] hover:border-[#178AAE]`} onClick={handleAddfriend}>
                    <div className="text-[40px] text-white font-semibold  font-Montserrat">+</div>
                </button>
                {/*status : Friend already */}
                <button className={` ${valueisFriend ? "" : "hidden"} flex flex-row justify-center items-center w-[55px] h-[40px] rounded-[50px] mr-[29px] cursor-not-allowed bg-gradient-to-b from-[#696F79] via-[#696F79] to-[#C5DBE1]`}>
                    <div className="text-[40px] text-white font-semibold  font-Montserrat">+</div>
                </button>
            </div>
        </>
    )
}
