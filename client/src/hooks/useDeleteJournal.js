import axios from "axios";
import { useQueryClient, useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

export default function useDeleteJournal(values) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  return useMutation(
    async () => {
      const token = await getAccessTokenSilently();
      console.log(values);

      return await axios
        .delete(
          `${serverUrl}/journals`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          { data: values }
        )
        .then((res) => res.data);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("journals");
      },
    }
  );
}
