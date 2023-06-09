import { database } from "./firebase-config.js";
import { collection, doc, getDocs, updateDoc, where, query, getDoc} from 'firebase/firestore';




/* find doc id of user collection From email */
export const findUserDocByEmail = async (email)=>{
    const userRef = collection(database, "users");
    const queryDocId = query(userRef, where("email", "==", email));
    const queryDocIdSnapshot = await getDocs(queryDocId);

    /* if doc is not empty */
    if(!queryDocIdSnapshot.empty){
        const userRefDoc = queryDocIdSnapshot.docs.map((doc)=>({
            id: doc.id, ...doc.data()
        }));
        
        // userRefDoc is array [{ id: ... }] 
        return userRefDoc.pop();
    }
    else{ /* if doc is empty */
        return {id: null};
    }

}


export const findUserDocById = async (id) => {

    const userRef = doc(database, "users",id);
    // const queryDocId = query(userRef, where("id", "==", id));

    const queryDocIdSnapshot = await getDoc(userRef);

    
    if(queryDocIdSnapshot.exists()){
        
        // mapping value 
        const userDoc = {
            id: queryDocIdSnapshot.id, ...queryDocIdSnapshot.data()
        }

        // it return array like this {id: ..., email: ...}
        return userDoc;
    }
    else{
        return {id: null};
    }

}

export const getMessageById = async (id)=> {
    const messageRef = doc(database, "messages",id);
    const getMessage = await getDoc(messageRef);

    /* check is message exist ? */
    if(getMessage.exists()){
        
        // mapping value
        const messageDoc = {
            id: getMessage.id,
            ...getMessage.data()
        }

        // return value
        return messageDoc;
    }
    else{
        return null;
    }
}

export const findConversationById = async (id) =>{

    const userRef = doc(database, "conversation",id);
    const queryDocIdSnapshot = await getDoc(userRef);

    if(!queryDocIdSnapshot.empty){
        const conversationDoc = { id : queryDocIdSnapshot.id, ...queryDocIdSnapshot.data() } 
        
        return conversationDoc
    }else{
        return {}
    }
    
}
