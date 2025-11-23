import { cardUpdate } from "../../repository/cardRepository.js";
import { authenticateCard } from "../../validation/card/cardValidation.js";


export default async function cardUpdateService(cardObj, id) {
  authenticateCard(cardObj);

  let resp = await cardUpdate(cardObj, id);

  if (resp != 1)
    throw new Error("Carta não pode ser alterada.");

  return resp;

}