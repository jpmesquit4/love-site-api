export function authenticateUser(userObj) {

  if (!userObj.name)
    throw new Error("Nome do usuário obrigatório!");
  
  if (!userObj.email)
    throw new Error("Email do usuário obrigatório!");
  
  if (userObj.password.length < 6)
    throw new Error("A senha deve conter no minímo 6 dígitos");

}

export function authenticateEquals(userObj) {
  if (!userObj)
    throw new Error("Credênciais inválidas")
}

export function authenticateEqualUser(records) {
  if (records.length > 0)
    throw new Error("Já existe esse cliente!");
  
}