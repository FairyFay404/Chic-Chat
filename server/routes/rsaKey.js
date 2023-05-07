import express, { query } from 'express';
import { collection, doc, getDocs, updateDoc, where} from "firebase/firestore";
import { database } from "../firebase-config.js";
import { update } from 'firebase/database';
import { findUserDocByEmail, findUserDocById } from "../firebase_query.js";

const router = express.Router();


/* this api will call when user is  login  */
/* request procedure */

/* 
    {
        email: string,
        publicKey: string
    }

*/

router.post('/saveKey', async (req, res) => {
    try {
        // get Document from email
        const userDoc = await findUserDocByEmail(req.body.email);

        // check is doc exist ?
        // if exist 
        if(userDoc.id != null){

            const userRequestRef = doc(database, "users", userDoc.id);
            /* add public key into doc of users  */
            await updateDoc(userRequestRef, {publicKey: req.body.publicKey});

            /* res successful save public key of users into firebase*/
            res.status(200).json({status: "success", message: "successful save public key"});
            return;

        }
        else{ // if not
            res.status(200).json({status: "fail", message: "unsuccessful save public key"});
            return;
        }

    } catch (err) {
        res.status(500).json({status: "failed", message: err});
        return;
    }
});


/* this api for get key after two users are friend */
router.get('/:docId', async (req,res) => {

    try {
        const userDoc = await findUserDocById(req.params.docId);

        /* if data exist */
        if(userDoc.id != null){
            res.status(200).json({status: "success", message: "successful get publicKey", publicKey: userDoc.publicKey});
            return; 
        }
        else {
            res.status(200).json({status: "fail", message: "User not found !"});
            return; 
        }
        

     } catch (err) {
        res.status(500).json({status: "fail", message: err});
        return;
     }
});

export default router