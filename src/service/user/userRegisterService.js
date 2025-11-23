import { userRegister } from "../../repository/userRepository.js";
import { authenticateUser } from "../../validation/user/userValidation.js";

export default async function userRegisterService(userObj) {
  authenticateUser(userObj);

  let id = await userRegister(userObj);
  return id;

}