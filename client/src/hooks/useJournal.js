import axios from "axios";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

export default function useJournal(values) {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();

  return useQuery(["journal", values.id], async () => {
    const token = await getAccessTokenSilently();

    const config = {
      params: values,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return await axios
      .get(`${serverUrl}/journals/${values.id}`, config)
      .then((res) => res.data[0]);
  });
}
