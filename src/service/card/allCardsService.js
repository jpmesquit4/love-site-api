import { allCards } from "../../repository/cardRepository.js";

export default async function allCardsService() {
  
  let resp = await allCards();
  return resp;

}