import axios from "axios";
import { useQueryClient, useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

export default function useCreateUser(values) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      const token = await getAccessTokenSilently();

      return await axios
        .post(`${serverUrl}/journals/:id/entry`, values, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("entries");
      },
    }
  );
}
