import axios from "axios";
import { useQuery, QueryCache } from "react-query";

const queryCache = new QueryCache({
  onError: (error) => {
    console.log(error);
  },
});

export const fetchUser = (id) =>
  axios.get(`/users/${id}`).then((res) => res.data[0]);

export default function useUser(id) {
  return useQuery(["user", id], () => fetchUser(id), {
    initialData: () => {
      console.log(queryCache);
    },
  });
}
