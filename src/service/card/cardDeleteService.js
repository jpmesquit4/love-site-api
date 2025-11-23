import { cardDelete } from "../../repository/cardRepository.js";

export default async function cardDeleteService(id) {

  let resp = await cardDelete(id);

  if (resp != 1)
    throw new Error("O Produto não pode ser removido.")

  return resp;
  
}