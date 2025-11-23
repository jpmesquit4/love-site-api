import { userLogin } from "../../repository/userRepository.js";
import { authenticateEquals, authenticateUser } from "../../validation/user/userValidation.js";

export default async function userLoginService(userObj) {

  authenticateUser(userObj);
  
  let response = await userLogin(userObj);
  authenticateEquals(response[0]);
  
  return response;

}