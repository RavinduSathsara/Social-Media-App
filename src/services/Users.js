import axios from "axios";
import Endpoints from "./Endpoints";

export const getUser = async (id) => {
  const results = await axios.get(`${Endpoints.users}/${id}`);
  return results;
};
