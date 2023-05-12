import express from "express";
import { collection, addDoc, query, where, getDocs, doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "../firebase-config.js";
import jwt from "jsonwebtoken";
import { checkUsernameValidation, checkPasswordValidation } from "./register.js";
import CryptoJS from "crypto-js";
import { findUserDocById, findConversationById } from "../firebase_query.js"


const router = express.Router();
const privateKey = "skjfnCDC4GS65DF6545df4";
const secretAES = "d13sg5da5yg36s"

/* path for updating user information  */
router.post('/updateInfo', async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, privateKey);

        // For check current user by email(decode(token) = email) 
        const queryData = query(collection(database, "users"), where("email", "==", decoded.email)); // 
        const querySnapShot = await getDocs(queryData);
        
        // For check new email is used ?
        const queryData2 = query(collection(database, "users"), where("email", "==", req.body.email));
        const querySnapShot2 = await getDocs(queryData2);

        // For check new usename is used ?
        const queryData3 = query(collection(database, "users"), where("username", "==", req.body.username));
        const querySnapShot3 = await getDocs(queryData3);

        if (!querySnapShot.empty) { // if current email exist
            querySnapShot.forEach(async (user) => {
                const message_username = checkUsernameValidation(req.body.username)
                if (message_username != "username valid") {
                    return res.status(200).json({ status: "fail", message: message_username, type: "username" })
                }
                const message_password = checkPasswordValidation(req.body.password)
                if (message_password != "password valid") {
                    return res.status(200).json({ status: "fail", message: message_password, type: "password" })
                }
                // if not empty & new username != old username -> "username is used"
                if(!querySnapShot3.empty && req.body.username != user.data().username){
                    return res.status(200).json({ status: "fail", message: "username is used", type: "username" })
                }

                if (querySnapShot2.empty || (decoded.email == req.body.email)) { // If new email is not used
                    try {
                        const ciphertext = CryptoJS.AES.encrypt(req.body.password, secretAES).toString();
                        await setDoc(doc(database, "users", user.id), {
                            username: req.body.username,
                            password: ciphertext,
                            email: req.body.email
                        }, { merge: true })
                        // give token for authen again since there is changing email case (If email is changed -> decode token will became old email. Which it's not current )
                        // But same email still can authen again
                        const tokened = jwt.sign({ email: req.body.email }, privateKey, { expiresIn: '1h' });
                        return res.status(200).json({ status: "success", message: "Update Successful", token: tokened, decode: decoded.email })
                    } catch (err) {
                        console.log(err);
                        res.status(500).json({ status: "fail", message: err.message });
                        return;
                    }
                } else { // If email is used
                    return res.status(200).json({ status: "fail", message: "email is used", type: "email" })
                }
            })
        } else {
            return res.status(200).json({ status: "fail", message: "email " + decoded.email + " not found", type: "email" })
        }

    } catch (err) {
        return res.status(200).json({ status: "fail", message: err.message })
    }
})

router.post('/getInfo', async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, privateKey);

        // For check current user by email(decode(token) = email) 
        const queryData = query(collection(database, "users"), where("email", "==", decoded.email)); // 
        const querySnapShot = await getDocs(queryData);

        querySnapShot.forEach((user) => {
            const bytes = CryptoJS.AES.decrypt(user.data().password, secretAES);
            const plainText = bytes.toString(CryptoJS.enc.Utf8);
            return res.status(200).json({ stataus: "success", user: { id: user.id, email: user.data().email, username: user.data().username, onRequest: user.data().onRequest, password: plainText } })
        })
    } catch (err) {
        return res.status(200).json({ status: "fail", message: err.message })
    }
})

// get Username by userId 
router.get('/getUsername/:userId', async (req, res) => {
    try {
        const docRef = doc(database, "users", req.params.userId);
        const docSnap = await getDoc(docRef);
        return res.status(200).json({ status: "success", username: docSnap.data().username })
    } catch (err) {
        return res.status(200).json({ status: "fail", message: err.message })
    }
})


// get Id in onRequest by userId
router.get('/getFriendRequestId/:userId', async (req, res) => {
    try {
        // access information of current user
        const docRef = doc(database, "users", req.params.userId);
        const docSnap = await getDoc(docRef);
        return res.status(200).json({ status: "success", friendRequest: docSnap.data().onRequest })
    } catch (err) {
        return res.status(200).json({ status: "fail", message: err.message })
    }
})

router.post('/changeStatusRequest', async (req, res) => {
    try {
        const user = await findUserDocById(req.body.id)
        const docRef = doc(database, "users", user.id);
        if (req.body.isaccept == true) {
            // Add FriendId to Array friend and Delete FriendId from Array onRequest

            // Add FriendId to Array friend 
            user.friends.push(req.body.friendId)

            // Delete FriendId from Array onRequest
            user.onRequest.filter((id,i)=>{
                if(id == req.body.friendId){
                    user.onRequest.splice(i, 1);
                }
            })

            // update now
            await updateDoc(docRef, {
                friends : user.friends,
                onRequest : user.onRequest
            });

            // create conversion between I and Friend  
            const newConversation = await addDoc(collection(database, "conversation"), {
                member: [
                    req.body.id,
                    req.body.friendId
                ],
                createAt: new Date(),
                updateAt: new Date()
            });

            const dataFriend = await findUserDocById(req.body.friendId)
            const infoConversation = await findConversationById(newConversation.id)
            const dataConversation = {...infoConversation, partnerInfo : dataFriend}

            return res.json({ status: "success accept", onRequest: user.onRequest, friends: user.friends, friendId: req.body.friendId, dataConversation: dataConversation})

        } else { // if reject requestion 
            // Delete FriendId from Array onRequest
            user.onRequest.filter((id,i)=>{
                if(id == req.body.friendId){
                    user.onRequest.splice(i, 1);
                }
            })
            await updateDoc(docRef, {
                onRequest : user.onRequest
            });
            return res.json({ status: "success reject", onRequest: user.onRequest, friends: user.friends, friendId: req.body.friendId})
        }


    } catch (err) {
        return res.json({ status: "fail", message : err.message })
    }

})

export default router