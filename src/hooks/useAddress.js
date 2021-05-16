import axios from "axios";
import { useQuery } from "react-query";

export const fetchAddress = (id) =>
  axios.get(`/users/address/${id}`).then((res) => res.data[0]);

export default function useAddress(id) {
  return useQuery(["address", id], () => fetchAddress(id));
}
