import axios from "axios";
import { useQueryClient, useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

export default function useEntries(id) {
  const queryClient = useQueryClient();
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(
    "entries",
    async () => {
      const token = await getAccessTokenSilently();

      return await axios
        .get(`${serverUrl}/journals/${id}/entries`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data);
    },
    {
      initialData: () => {
        return queryClient
          .getQueryData("entries")
          ?.find((d) => d.id === parseInt(id));
      },
      initialDataUpdatedAt: () => {
        return queryClient.getQueryState("entries")?.dataUpdatedAt;
      },
    }
  );
}
