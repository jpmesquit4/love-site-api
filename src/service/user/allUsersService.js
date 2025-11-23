import { allUsers } from "../../repository/userRepository.js";

export default async function allUsersService() {
  
  let x = await allUsers();
  return x;

}