import { Server } from 'socket.io';


const io = new Server(8900, {

    cors: {
        origin: "http://localhost:5173",
    },
    
});


io.on("connection", (socket) =>{
    console.log("a user connected.");
})