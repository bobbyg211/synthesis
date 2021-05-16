import axios from "axios";
import { useQuery } from "react-query";

export const fetchUsers = () => {
  return axios.get("/users").then((res) => res.data);
};

export default function useUsers() {
  return useQuery("users", () => fetchUsers());
}
