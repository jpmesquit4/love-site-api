import express from 'express';

import userController from './controller/userController.js'
import cardController from './controller/cardController.js'

export default function addRoutes(server) {
  server.use(userController);
  server.use(cardController)
}