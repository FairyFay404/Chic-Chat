import bodyParser from "body-parser";
import express from "express";
import { ref, set, get } from "firebase/database";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { database } from "./firebase-config.js"
import conversationRoute from './routes/conversation.js';
import registerRoute from './routes/register.js';
import loginRoute from './routes/login.js';
import cors from 'cors';



// const express = require('express')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// add route 
app.use('/api/conversation', conversationRoute);
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);

// declare port for server running
app.listen(3000, () => {
    console.log('Start server at port 3000.')
})