import { BASE_URL } from "./Environment";

const baseURL = BASE_URL.development;

class Endpoints {
  static posts = baseURL + "/posts";
}

export default Endpoints;
