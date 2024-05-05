import express from "express";
const app = express();
import { createServer } from "http";
import { Server } from "socket.io";


const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`User Connected:${socket.id}`);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));