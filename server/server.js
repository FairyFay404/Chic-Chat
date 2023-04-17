import bodyParser from "body-parser";
import express from "express";
import { ref, set, get } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { database } from "./firebase-config.js"

// const express = require('express')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


// Test firebase 
app.post('/api/create', (req, res) => {
    const fullname = req.body.fullname;

    try {
        console.log("Fullname : " + fullname);
        console.log("path", "users/" + fullname);
        set(ref(database, 'users/' + fullname), {
            name: fullname,
            balance: 100,
            mil: new Date().getTime(),
            datae: new Date() + ''
        })
        return res.status(200).json({
            RespCode: 200,
            RespMessage: "good",
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            RespCode: 500,
            RespMessage: err.message
        })
    }
})

app.get('/api/get', (req, res) => {
    try {
        get(ref(database, 'users'))
            .then((snapshot) => {
                console.log(snapshot.val());
                if (snapshot.exists()) {
                    return res.status(200).json({
                        status: 200,
                        message: "Access database",
                        result: snapshot.val()
                    })
                } else {
                    return res.status(200).json({
                        status: 200,
                        message: "Access database",
                        result: "Not found data"
                    })
                }
            })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

app.post('/api/createfirebase', (req, res) => {
    const fullname = req.body.fullname;
    try {
        const docRef = addDoc(collection(database, "members"), {
            fullname: fullname,
            mil: new Date().getTime(),
            datae: new Date() + ''
        });
        console.log("Document written with ID: ", docRef.id);
        return res.status(200).json({
            status: 200,
            message: "Can create"
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: err.message
        })
    }
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})