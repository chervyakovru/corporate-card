import { User } from "./user";
import { UserRequest } from "./userRequest";

export interface Data {
  users: User[],
  userRequests: UserRequest[]
}