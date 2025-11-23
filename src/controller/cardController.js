import { Router } from "express";
import cardRegisterService from "../service/card/cardRegisterService.js";
import cardDeleteService from "../service/card/cardDeleteService.js";
import cardUpdateService from "../service/card/cardUpdateService.js";
import allCardsService from "../service/card/allCardsService.js";
import { cardRestantesRoleta, updateCardForVisible } from "../repository/cardRepository.js";

const endpoints = Router();

endpoints.get("/card", async (req, resp) => {

  try {
  
    let x = await allCardsService();

    resp.status(200).send(x)

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.post('/card', async (req, resp) => {

  try {
    
    let cardObj = req.body;
    let id = await cardRegisterService(cardObj);

    resp.send({
      id: id
    })

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.delete('/card/:id', async (req, resp) => {

  try {
    
    const { id } = req.params;

    await cardDeleteService(id);

    resp.status(200).send("Carta removida com sucesso!")

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.put('/card/:id', async (req, resp) => {

  try {
    
    const cardObj = req.body;
    const {id} = req.params;

    await cardUpdateService(cardObj, id);

    resp.status(200).send("Carta alterada com sucesso!")

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.put('/card/userCard/:idUser/:idCard', async (req, resp) => {

  try {
    
    const idUser = req.params.idUser;
    const idCard = req.params.idCard;

    let x = await updateCardForVisible(idUser, idCard);

    resp.status(200).send(x)

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

endpoints.get('/card/roleta/:idUser', async (req, resp) => {

  try {
    
    const idUser = req.params.idUser;

    let x = await cardRestantesRoleta(idUser);

    resp.status(200).send(x)

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})



export default endpoints;