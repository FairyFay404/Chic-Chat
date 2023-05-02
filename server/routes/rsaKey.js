import express from 'express';
import { collection, getDocs, updateDoc, where} from "firebase/firestore";
import { database } from "../firebase-config.js";
import { update } from 'firebase/database';

const router = express.Router();


/* this api will call when user is  login  */
/* request procedure */

/* 
    {
        username: string,
        publicKey: string
    }

*/

router.post('/saveKey', async (req, res) => {
    try {
        const userRef = collection(database, "users");
        const saveUserKey = await ;
        
    } catch (err) {
        res.status(500).json({status: "failed", message: err});
        return;
    }
})

export default router