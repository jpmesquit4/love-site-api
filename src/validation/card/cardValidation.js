export function authenticateCard(cardObj) {

  if (!cardObj.name)
    throw new Error("Nome da Carta obrigatório!");
  
  if (!cardObj.image_url)
    throw new Error("Url da imagem é obrigatório!");
  
  if (cardObj.disponible === undefined || cardObj.disponible === null)
    throw new Error("Informar a disponibilidade da Carta");

}

// export function authenticateEquals(userObj) {
//   if (!userObj)
//     throw new Error("Credênciais inválidas")
// }

export function authenticateEqualCard(records) {
  if (records.length > 0)
    throw new Error("Já existe essa Carta!");
  
}