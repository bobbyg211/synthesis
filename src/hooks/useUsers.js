import axios from "axios";
import { useQuery } from "react-query";

export default function useUsers() {
  return useQuery("users", () => axios.get("/users").then((res) => res.data));
}
