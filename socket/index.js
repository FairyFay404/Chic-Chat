import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5173",
  }
});

let userIdList = [];

const addUserId = (userId, socketId) => {
  /* check userId is available in array */
  if(!userIdList.some((user)=>user.userId === userId)){
    userIdList.push({ userId, socketId});
  }
};

const removeUserId = (socketId)=>{
  userIdList = userIdList.filter((user)=> user.socketId !== socketId);
};

const findSocketId = (userId)=>{
  return userIdList.find((user)=> user.userId === userId);
}

io.on("connection", (socket)=>{
    /* when client connected to server */
    console.log("user connected...");
    /* add UserId & socketId of user */
    socket.on("addUser", (userId) => {
      addUserId(userId,socket.id);
      io.emit("getUser", userIdList);
    });


    /* send message and get message */
    /* server receive a message from user 1 */
    socket.on("sendMessage", ({senderId, receiverId, text})=>{
      
      /* server send message to user 2 */
      const user = findSocketId(receiverId);
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });

    })

    /* when user disconnected */
    socket.on("disconnect", ()=>{
      console.log("user disconnected...");
      removeUserId(socket.id);
    });


});


httpServer.listen(8900, () => {
    console.log("server is running on port 8900");
});