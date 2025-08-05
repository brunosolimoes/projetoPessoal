import Express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = Express();

const server = createServer()

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
    },
});

const PORT = 3002

server.listen(PORT, () => console.log('server running...'))