import express from "express";
import { ref, set, get } from "firebase/database";
import { collection, query, where, getDocs } from "firebase/firestore";
import { database } from "../firebase-config.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';


/* jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: '1h' }); */


const router = express.Router();
const privateKey = "skjfnCDC4GS65DF6545df4";
 
/* login request schema */

/*

{
    username: string,
    password: string
}
 
*/




/* for check user login */
/* path for login */
router.post('/', async (req, res)=> {
    try {
        const queryData = query(collection(database, "users"), where("username", "==", req.body.username));

        const querySnapShot = await  getDocs(queryData);

        if(!querySnapShot.empty){
            querySnapShot.forEach((doc)=>{
                // doc.data() is never undefined for query doc snapshots
                //console.log(doc.id, " => ", doc.data().email);
                
                // generated token
                const token = jwt.sign({username: req.body.username}, privateKey, { expiresIn: '1h' });
                const hashPassword = doc.data().password; 
                // compare password on request and hashpassword (bcrypt)
                // if match => res.status(200).json({status: "success", message: "Login Successfully", token: ""})
                bcrypt.compare(req.body.password, hashPassword, function(err, isMatch) {
                    if(isMatch){
                        res.status(200).json({status: "success", message: "Login Successfully", token: token});
                        return;
                    }
                    else{
                        res.status(200).json({status: "fail", message: "Wrong Password!!"});
                        return; 
                    }
                });

            })
        }
        else {
            res.status(422).json({status: "fail", message: "user not found"})
            return;
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: err})
    }
});



export default router