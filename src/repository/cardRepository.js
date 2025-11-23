import con from "./connection.js";

export async function cardRegister(cardObj) {
  
  let comando = `
    insert into Card(name, image_url, disponible) 
	     values (?, ?, ?);
  `

  let resp = await con.query(comando, [cardObj.name, cardObj.image_url, cardObj.disponible]);
  let inf = resp[0];
  let idCard = inf.insertId;
  return idCard;

}

export async function cardDelete(id) {

  let comando = `
    Delete from Card where id_Card = ?
  `
  let resp = await con.query(comando, [id]);
  return resp[0].affectedRows;

}

export async function cardUpdate(cardObj, id) {

  let comando = `
    update 	Card 
    set 	  name = ?,
		        image_url = ?,
            disponible = ?
    where 	id_card = ?
  `
  let resp = await con.query(comando, [cardObj.name, cardObj.image_url, cardObj.disponible, id]);
  return resp[0].affectedRows;

}

export async function allCards() {
  
  let comando = `
    select * from Card
  `

  let [resp] = await con.query(comando, []);
  return resp;

}

export async function updateCardForVisible(idUser, idCard) {
  
  let comando = `
    update 	UserCard 
    set 	  is_visible = true
    where 	id_user = ? and id_card = ?
  `

  let resp = await con.query(comando, [idUser, idCard]);
  return resp[0];

}

export async function cardRestantesRoleta(idUser) {
  
  let comando = `
    SELECT 
	  uc.id_card,
    uc.is_visible
    FROM UserCard uc
    JOIN Card c ON uc.id_card = c.id_card
    WHERE uc.id_user = ?
  `

  let resp = await con.query(comando, [idUser]);
  return resp[0];

}
