import express from "express";
import { addDoc, collection, doc, getDocs, updateDoc, where, arrayUnion, arrayRemove} from "firebase/firestore";
import { database } from "../firebase-config.js";
import { findUserDocById } from "../firebase_query.js";



const router = express.Router();

/* this path is for save encrypted aes key to firebase */
/* save on fields (update)

    userDocId: string
    friendId: string,
    encryptedAesKey: string,

*/
router.post('/saveAesKey', async (req, res)=>{
    try {
        /* ref to user collection */
        const userRequestRef = doc(database, "users", req.body.userDocId);

        /* new!! : we should check this friend are in array list ? */
        const userDoc = await findUserDocById(req.body.userDocId);

        /* looping for check we have aeskey of that friend ? */
        const havingFriend = userDoc.aesKey.find((friend) => friend.friendId == req.body.friendId);
        
        console.log(havingFriend)
        /* having data in fire base */
        if(havingFriend !== undefined){
            /* remove the old data first */
            await updateDoc(userRequestRef, {
                aesKey: arrayRemove(havingFriend)
            });

        }

        /* create JSON Data */
        const aesKeyJson = {
            friendId: req.body.friendId,
            encryptedAesKey: req.body.encryptedAesKey,
        }

        /* update Aes key */
        await updateDoc(userRequestRef, {
            aesKey: arrayUnion(aesKeyJson)
        })

        /* res successful save encrypt aes key of users into firebase*/
        res.status(200).json({status: "success", message: "successful save encrypt aes key"});
        return;
        
    } catch (err) {
        /* res successful save public key of users into firebase*/
        res.status(500).json({status: "fail", message: err});
        return;
    }
})

/*
{
    userDocId: String,
    friendId: String,
} 
 */

router.post('/', async (req,res) =>{
    try {
        /* get doc id  */
        const friendDoc = await findUserDocById(req.body.friendId);

        /* get encrypt aes key from friend */
        const userEncryptedAesKey = friendDoc.aesKey.find((user)=> user.friendId == req.body.userDocId);

        /* having key */
        if(userEncryptedAesKey !== undefined){
            res.status(200).json({status: "success", message: "successfull get aes key", aesKeyEncrypted: userEncryptedAesKey.encryptedAesKey});
            return;
        }

        res.status(422).json({status: "fail", message: "don't have aes key of user!"});
        return;


    } catch (err) {
        res.status(500).json({status: "fail", message: err});
        return;
    }
})


export default router