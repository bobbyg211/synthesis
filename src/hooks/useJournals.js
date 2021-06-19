import axios from "axios";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

export default function useJournals() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();
  console.log(true);

  return useQuery("journals", async () => {
    const token = await getAccessTokenSilently();

    return await axios
      .get(`${serverUrl}/journals`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  });
}
