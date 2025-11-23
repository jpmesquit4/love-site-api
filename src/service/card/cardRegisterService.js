import { cardRegister } from "../../repository/cardRepository.js";
import { authenticateCard } from "../../validation/card/cardValidation.js";

export default async function cardRegisterService(cardObj) {
  authenticateCard(cardObj);

  let id = await cardRegister(cardObj);
  return id;

}