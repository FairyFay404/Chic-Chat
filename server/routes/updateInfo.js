import express from "express";
import { collection, addDoc, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { database } from "../firebase-config.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { checkUsernameValidation, checkPasswordValidation } from "./register.js";



const router = express.Router();
const privateKey = "skjfnCDC4GS65DF6545df4";
const saltRounds = 10;

/* path for conversation  */
router.post('/', async (req, res) => {
    // query email in database if it exist
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, privateKey);

    // For check current user by email(decode(token) = email) 
    const queryData = query(collection(database, "users"), where("email", "==", decoded.email)); // 
    const querySnapShot = await getDocs(queryData);

    // For check new email is used ?
    const queryData2 = query(collection(database, "users"), where("email", "==", req.body.email));
    const querySnapShot2 = await getDocs(queryData2);

    querySnapShot.forEach(async (user) => {
        const message_username = checkUsernameValidation(req.body.username)
        if(message_username != "username valid"){
            return res.status(200).json({status : "fail", message: message_username, type : "username"})
        }
        const message_password = checkPasswordValidation(req.body.password)
        if(message_password != "password valid"){
            return res.status(200).json({status : "fail", message: message_password, type : "password" })
        }
        if (querySnapShot2.empty){ // If email is not used
            bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
                try {
                    await setDoc(doc(database, "users", user.id), {
                        username: req.body.username,
                        password: hash,
                        email: req.body.email
                    }, { merge: true })

                    // give token for authen again since there is changing email case (If email is changed -> decode token will became old email. Which it's not current )
                    // But same email still can authen again
                    const token = jwt.sign({ email: req.body.email }, privateKey, { expiresIn: '1h' });
                    return res.status(200).json({ status: "success", message: "Update Successful", token: token })
                }
                catch (err) {
                    console.log(err);
                    res.status(500).json({ status: "fail", message: err.message });
                    return;
                }

            });
        }else{ // If email is used
            return res.status(200).json({ status: "fail", message: "email is used", type: "email"})
        }


            


    });



})

export default router