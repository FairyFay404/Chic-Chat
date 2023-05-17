import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from '../../baseURL';
import forge, { asn1 } from 'node-forge';
import { encryptDataRSA,decryptDataRSA } from '../../../usersKey';

export default function FriendRequire({ name, idRequest, defaultUser, setDataRequested, noti_number, setNotiNumber }) {

    const getPublicKeyURL = "/api/rsaKey/";
    const savePublicKey = "/api/aesKey/saveAesKey";
    const getFriendAesKeyURL = "/api/aesKey/";
    const [friendPublicKey, setFriendPublicKey] = useState(null);
    const rsa = forge.pki.rsa;


    useEffect(()=>{
        if(friendPublicKey) {
            const myDocId = sessionStorage.getItem("user-docId");
            const myAesKeyString = localStorage.getItem("aesKey-"+myDocId);
            
            console.log(friendPublicKey);
            const encryptAesKey = encryptDataRSA(myAesKeyString, friendPublicKey);

            console.log(encryptAesKey);

            const saveMyAesKey = async (userDocId,friendId,encryptedAesKey) => {
                try {
                    /* fetching */
                    const res = await axios.post(baseURL+savePublicKey, {
                        userDocId,
                        friendId,
                        encryptedAesKey
                    });
        
                    if(res.data.status == "fail"){
                        console.log(res.data.message);
                        return;
                    }
                } catch (err) {
                    console.log(err);
                }
        
            }

            const getFriendAesKey = async (friendId,userDocId) => {
                /* fetching data */
        
                try {
        
                    const res = await axios.post(baseURL+getFriendAesKeyURL,{
                        userDocId,
                        friendId
                    });
                    
                    if(res.data.status == "success"){
                        /* decrypt aes key by user's private key */
                        const privateKeyPem = localStorage.getItem("privateKey-"+myDocId);
                        console.log(privateKeyPem);
                        const friendAesKey = decryptDataRSA(res.data.aesKeyEncrypted,privateKeyPem);
                        localStorage.setItem("friendAesKey-"+friendId, friendAesKey);
                        return;
                    }
                    
                } catch (err) {
                    console.log(err);
                }   
        
            }

            /* part for send encrypt aes key to firebase */
            saveMyAesKey(myDocId,idRequest,encryptAesKey);

            /* part for get encrypt aes key of friend */
            /* & */
            /* part for decrypt aes key of friend by user-privateKey */
            getFriendAesKey(idRequest,myDocId);
        }

    },[friendPublicKey])


    const handleAccept = () => {
        const urlchangeStatusRequest = baseURL + "/api/user/changeStatusRequest"
        const fetchchangeStatusRequest = async () => {
            const res = await axios.post(urlchangeStatusRequest, {
                id: defaultUser.id,
                isaccept: true,
                friendId: idRequest
            })
            setDataRequested(res.data)
            setNotiNumber(noti_number-1)
        }

        const fetchFriendPublicKey = async (friendDocId)=>{

            try {
                const res = await axios.get(baseURL+getPublicKeyURL+friendDocId);
    
                if(res.data.status == "success"){
                    // set Pem key to state
                    setFriendPublicKey(res.data.publicKey);
                    console.log(res.data.publicKey);
                    return;
                }
                else {
                    //can't get public key what to do 
                    console.log(res.data.message);
                    return;
                }
            }
            catch(err){
                console.log(err);
            }
    
        }
        fetchchangeStatusRequest();

        /* part for get public key */
        fetchFriendPublicKey(idRequest);

        /* part for encrypt aesKey of user by friend's public key */
        //console.log(friendPublicKey);
        // const encryptAesKey = encryptDataRSA(myAesKeyString, friendPublicKey);

        /* part for send encrypt aes key to firebase */
        // await saveMyAesKey(myDocId,idRequest,encryptAesKey);

        /* part for get encrypt aes key of friend */
        /* & */
        /* part for decrypt aes key of friend by user-privateKey */
        // await getFriendAesKey(idRequest,myDocId);

        
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
            setNotiNumber(noti_number-1)
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
