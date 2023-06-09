import express from "express";
import { ref, set, get } from "firebase/database";
import { collection, addDoc, query, where, getDocs, QuerySnapshot } from "firebase/firestore";
import { database } from "../firebase-config.js";
import { SDK_VERSION } from "firebase/app";
import CryptoJS from "crypto-js";


const router = express.Router();
const secretAES = "d13sg5da5yg36s"

export const checkUsernameValidation = (username) => {
    const isWhiteSpace = /^(?=.*\s)/;
    if (isWhiteSpace.test(username)) {
        return "username must not contain Whitespaces."
    }

    const isThai = /[ก-๛]/;
    if (isThai.test(username)) {
        return "username can't contain Thai language"
    }

    const isValidLengthAndEnglishTwoSpecialChar = /^[a-zA-Z0-9_-]{4,20}$/;
    if (!isValidLengthAndEnglishTwoSpecialChar.test(username)) {
        return "username must be 4-20 Characters Long and English character or (_) or (-)"
    }

    return "username valid"
}

export const checkPasswordValidation = (password) => {
    const isWhiteSpace = /^(?=.*\s)/;
    if (isWhiteSpace.test(password)) {
        return "password must not contain Whitespaces."
    }

    const isContainsUppercase = /^(?=.*[A-Z])/;
    if (!isContainsUppercase.test(password)) {
        return "password must have at least one Uppercase Character."
    }

    const isDigit = /^(?=.*[0-9])/;
    if (!isDigit.test(password)) {
        return "password must have at least one number."
    }

    const isThai = /[ก-๛]/;
    if (isThai.test(password)) {
        return "password can't contain Thai language"
    }

    const isValidLengthAndEnglishTwoSpecialChar = /^[a-zA-Z0-9_-]{8,20}$/;
    if (!isValidLengthAndEnglishTwoSpecialChar.test(password)) {
        return "password must be 8-20 Characters Long and English character or (_) or (-)"
    }

    return "password valid"
}

/* schema for users */
/* 
{
    id: string [generated by firebase],
    username: string,
    password: hashpassword,
    fName: string,
    lName: string,
    email: string,
    phoneNum: string,
    [profilePicture: img.file,]
    createAt: date,
    updateAt: date
}

*/

/* for create a new user */
/* path for conversation  */
router.post('/', async (req, res) => {


    // query email in database if it exist 

    const queryData = query(collection(database, "users"), where("email", "==", req.body.email));
    const querySnapShot = await getDocs(queryData);

    const queryUsername = query(collection(database, "users"), where("username", "==", req.body.username));
    const querySnapShotUsername = await getDocs(queryUsername);

    // check user are exits in database ? 

    /* if users not exist in database  */
    /* hash password and then add it in database */
    if (querySnapShot.empty) {
        if (querySnapShotUsername.empty) {
            const message_username = checkUsernameValidation(req.body.username)
            if (message_username != "username valid") {
                return res.status(200).json({ status: "fail", message: message_username, type: "username" })
            }
            const message_password = checkPasswordValidation(req.body.password)
            if (message_password != "password valid") {
                return res.status(200).json({ status: "fail", message: message_password, type: "password" })
            }

            try {
                const ciphertext = CryptoJS.AES.encrypt(req.body.password, secretAES).toString();
                const newUser = await addDoc(collection(database, "users"), {
                    email: req.body.email,
                    password: ciphertext,
                    username: req.body.username,
                    publicKey: "",
                    aesKeyEncrypted: "",
                    createAt: new Date(),
                    updateAt: new Date(),
                    proprofilePicture: "",
                    onRequest: [],
                    friends: [],
                    aesKey: [],

                });
                console.log("Documents ID of users " + newUser.id)
                res.status(200).json({ status: "success", message: "successful register", userId:newUser.id})
                return;
            } catch (err) {
                console.log(err);
                res.status(500).json({ status: "fail", message: err.message });
                return;
            }
        } else {
            res.status(200).json({ status: "fail", message: "user are exits in database", type: "username"})    
        }
    }
    else {
        res.status(200).json({ status: "fail", message: "email are exits in database", type: "email" })
        return;
    }

})

export default router