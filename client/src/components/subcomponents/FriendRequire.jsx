import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from '../../baseURL';
import forge from 'node-forge';
import { encryptDataRSA,decryptDataRSA } from '../../../usersKey';

export default function FriendRequire({ name, idRequest, defaultUser, setDataRequested, }) {

    const getPublicKeyURL = "/api/rsaKey/";
    const savePublicKey = "/api/aesKey/saveAesKey";
    const getFriendAesKeyURL = "/api/aesKey/";
    const [friendPublicKey, setFriendPublicKey] = useState("");
    const rsa = forge.pki.rsa;

    useEffect(() => {
    }, [])

    const fetchFriendPublicKey = async (friendDocId)=>{

        try {
            const res = await axios.get(baseURL+getPublicKeyURL+friendDocId);

            if(res.data.status == "success"){
                // set Pem key to state
                setFriendPublicKey(res.data.publicKey);
            }
            else {
                //can't get public key what to do 
                console.log(res.data.message);
            }
        }
        catch(err){
            console.log(err);
        }

    }

    const saveMyAesKey = async (userDocId,friendDocId,encryptedAesKey) => {
        /* fetching */
        const res = await axios.post(baseURL+savePublicKey, {
            userDocId,
            friendDocId,
            encryptedAesKey
        });

        if(res.data.status == "fail"){
            console.log(res.data.message);
            return;
        }
    }

    const getFriendAesKey = async (friendDocId,userDocId) => {
        /* fetching data */
        const res = await axios.post(baseURL+getFriendAesKeyURL,{
            userDocId,
            friendDocId
        });
        
        if(res.data.status == "success"){
            /* decrypt aes key by user's private key */
            const myDocId = sessionStorage.getItem("user-DocId");
            const privateKeyPem = localStorage.getItem("privateKey-"+myDocId);
            const friendAesKey = decryptDataRSA(res.data.aesKeyEncrypted,privateKeyPem);
            localStorage.setItem("aesKey-"+friendDocId, JSON.stringify(friendAesKey));
            return;
        }
    }

    const handleAccept = async () => {
        const urlchangeStatusRequest = baseURL + "/api/user/changeStatusRequest"
        const fetchchangeStatusRequest = async () => {
            const res = await axios.post(urlchangeStatusRequest, {
                id: defaultUser.id,
                isaccept: true,
                friendId: idRequest
            })
            setDataRequested(res.data)
        }
        await fetchchangeStatusRequest()

        /* part for get public key */
        const myDocId = sessionStorage.getItem("user-DocId");
        const myAesKeyString = localStorage.getItem("aesKey-"+myDocId);
        await fetchFriendPublicKey(idRequest);

        /* part for encrypt aesKey of user by friend's public key */
        const encryptAesKey = await encryptDataRSA(myAesKeyString, friendPublicKey);

        /* part for send encrypt aes key to firebase */
        await saveMyAesKey(myDocId,idRequest,encryptAesKey);

        /* part for get encrypt aes key of friend */
        /* & */
        /* part for decrypt aes key of friend by user-privateKey */
        await getFriendAesKey(idRequest,myDocId);

        
    }

    const handleReject = () => {
        const urlchangeStatusRequest = baseURL + "/api/user/changeStatusRequest"
        const fetchchangeStatusRequest = async () => {
            const res = await axios.post(urlchangeStatusRequest, {
                id: defaultUser.id,
                isaccept: false,
                friendId: idRequest
            })
            setDataRequested(res.data)
        }
        fetchchangeStatusRequest()
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
