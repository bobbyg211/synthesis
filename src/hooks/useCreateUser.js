import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

export default function useCreateUser(values) {
  const queryClient = useQueryClient();

  return useMutation(
    (e) => {
      e.preventDefault();
      return axios
        .post("/users", new FormData(e.target))
        .then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
}
