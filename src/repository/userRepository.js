import con from "./connection.js";
import { formatDate } from '../utils/dateTime.js';

export async function userRegister(userObj) {
  
  let comando = `
    insert into User(name, email, password) 
	           values (?, ?, ?);
  `

  let resp = await con.query(comando, [userObj.name, userObj.email, userObj.password]);
  let inf = resp[0];
  let idUser = inf.insertId;
  return idUser;

}

export async function InsertCardsUser(id) {
  let agora = formatDate();

  // Verifica se o usuário já tem cartas
  let verificar = `
    SELECT COUNT(*) as total
    FROM UserCard
    WHERE id_user = ?;
  `;
  let [res] = await con.query(verificar, [id]);

  if (res[0].total > 0) {
    console.log('Usuário já possui cartas, não será inserido novamente.');
    return; // Sai da função, sem erro
  }

  // Caso contrário, insere normalmente
  let comando = `
    INSERT INTO UserCard (id_user, id_card, is_visible, release_date)
    VALUES 
      (?, 1, false, ?),
      (?, 2, false, ?),
      (?, 3, false, ?),
      (?, 4, false, ?),
      (?, 5, false, ?),
      (?, 6, false, ?);
  `;

  let params = [id, agora, id, agora, id, agora, id, agora, id, agora, id, agora];
  let resp = await con.query(comando, params);

  console.log('Cartas inseridas com sucesso!');
  return resp[0];
}


export async function allUsers() {
  
  let comando = `
    select * from User
  `

  let [resp] = await con.query(comando, []);
  return resp;

}

export async function userLogin(userObj) {
  
  let comando = `
  select
  id_user, name, email
  from User
  where name = ?
  and
  email = ?
  and
  password = ?;
  `

  let resp = await con.query(comando, [userObj.name, userObj.email, userObj.password]);
  let inf = resp[0];
  return inf;

}

export async function allCardsThisUser(id) {
  
  let comando = `
    SELECT 
    uc.id_user,
    uc.id_card,
    uc.is_visible,
    uc.release_date,
    c.name AS card_name,
    c.image_url
    FROM UserCard uc
    JOIN Card c ON uc.id_card = c.id_card
    WHERE uc.id_user = ?;
  `

  let resp = await con.query(comando, [id]);
  return resp[0];

}

export async function InfosUser(id) {
  
  let comando = `
    select 
    id_user, name, email 
    from User 
    Where id_user = ?
  `;

  let resp = await con.query(comando, [id]);
  return resp[0];

}