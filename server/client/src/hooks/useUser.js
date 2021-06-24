import axios from "axios";
import { useQueryClient, useQuery } from "react-query";

export const fetchUser = (uid) => {
  return axios.get(`/users/${uid}`).then((res) => res.data[0]);
};

export default function useUser(uid) {
  const queryClient = useQueryClient();

  return useQuery(["user", uid], () => fetchUser(uid), {
    initialData: () => {
      return queryClient
        .getQueryData("users")
        ?.find((d) => d.id === parseInt(uid));
    },
    initialDataUpdatedAt: () => {
      return queryClient.getQueryState("users")?.dataUpdatedAt;
    },
  });
}
