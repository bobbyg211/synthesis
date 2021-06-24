import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

export default function useCreateUser(values) {
  const queryClient = useQueryClient();

  console.log(values);

  return useMutation(
    (e) => {
      return axios.post("/users", values).then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
      },
    }
  );
}
