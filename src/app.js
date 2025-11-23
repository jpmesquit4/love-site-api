import './utils/globals.js';

import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

import addRoutes from './rotas.js';
addRoutes(server);

const PORTA = process.env.PORTA;

server.listen(PORTA, () => console.log("API subiu na porta " + PORTA));