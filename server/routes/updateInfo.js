import express from "express";
import { collection, addDoc, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { database } from "../firebase-config.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';



const router = express.Router();
const privateKey = "skjfnCDC4GS65DF6545df4";
const saltRounds = 10;

/* path for conversation  */
router.post('/', async (req, res) => {
    // query email in database if it exist
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, privateKey);

    // For check query current user information
    const queryData = query(collection(database, "users"), where("email", "==", decoded.email)); // new email
    const querySnapShot = await getDocs(queryData);

    // f
    const queryData2 = query(collection(database, "users"), where("email", "==", req.body.email));
    const querySnapShot2 = await getDocs(queryData2);

    querySnapShot.forEach(async (user) => {

        // If don't specify password
        if (req.body.password == undefined) {
            return res.status(200).json({ status: "fail", message: "Password not specify" })
        }

        // If don't specify email
        if (req.body.email == undefined){
            return res.status(200).json({ status: "fail", message: "Password not email" })
        }

        if (querySnapShot2.empty){ // If email is not used
            bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
                try {
                    await setDoc(doc(database, "users", user.id), {
                        username: req.body.username,
                        password: hash,
                        email: req.body.email
                    }, { merge: true })

                    // give token again because change email (If email is changed -> decode token will became old email. Which it's not current )
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
            return res.status(200).json({ status: "fail", message: "email is used"})
        }


            


    });



})

export default router