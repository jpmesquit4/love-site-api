import './utils/globals.js';

import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

import addRoutes from './rotas.js';
addRoutes(server);

const PORT = process.env.PORT;

server.listen(PORT, () => console.log("API subiu na PORT " + PORT));