import { BASE_URL } from "./Environment";

const baseURL = BASE_URL.development;

class Endpoints {
  static posts = baseURL + "/posts";

  static users = baseURL + "/users";
}

export default Endpoints;
