import axios from "axios";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

export default function useJournals(id) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();
  console.log(true);

  return useQuery("entries", async () => {
    const token = await getAccessTokenSilently();

    return await axios
      .get(`${serverUrl}/journals/${id}/entries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  });
}
