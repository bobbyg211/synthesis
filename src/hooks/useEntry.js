import axios from "axios";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

export default function useEntry(jid, eid) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(["entry", eid], async () => {
    const token = await getAccessTokenSilently();

    return await axios
      .get(`${serverUrl}/journals/${jid}/entry/${eid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data[0]);
  });
}
