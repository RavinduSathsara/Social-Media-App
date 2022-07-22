import axios from "axios";
import Endpoints from "./Endpoints";

export const getAllPosts = async () => {
  const results = await axios.get(Endpoints.posts);
  return results;
};
