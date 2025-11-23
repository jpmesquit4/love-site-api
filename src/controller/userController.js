import { allCardsThisUser, InfosUser, InsertCardsUser } from "../repository/userRepository.js";
import allUsersService from "../service/user/allUsersService.js";
import userLoginService from "../service/user/userLoginService.js";
import userRegisterService from "../service/user/userRegisterService.js";

import { Router } from "express";

const endpoints = Router();

endpoints.get('/user', async (req, resp) => {

  try {
    
    let x = await allUsersService();

    resp.status(200).send(x);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/user/:id', async (req, resp) => {

  try {
    
    let id = req.params.id;

    let x = await InfosUser(id);

    resp.status(200).send(x[0]);

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.post('/user', async (req, resp) => {

  try {
    
    let userObj = req.body;
    let id = await userRegisterService(userObj);

    resp.send({
      id: id
    })

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.post('/user/login', async (req, resp) => {
  
  try {
    
    let userObj = req.body;
    let x = await userLoginService(userObj);

    resp.status(200).send(x[0]);

  }
  catch (err) {
    logError(err);
    resp.status(401).send(criarErro(err));
  }
})

endpoints.get('/user/userCard/:id', async (req, resp) => {
  
  try {
    
    let id = req.params.id;
    let x = await allCardsThisUser(id);

    resp.status(200).send(x);

  }
  catch (err) {
    logError(err);
    resp.status(401).send(criarErro(err));
  }
})

endpoints.post('/user/userCard/:id', async (req, resp) => {
  
  try {
    
    let id = req.params.id;
    let x = await InsertCardsUser(id);

    resp.status(200).send(x);

  }
  catch (err) {
    logError(err);
    resp.status(401).send(criarErro(err));
  }
})

export default endpoints;