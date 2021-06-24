import axios from "axios";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";

export default function useUsers() {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const { getAccessTokenSilently } = useAuth0();

  return useQuery("users", async () => {
    const token = await getAccessTokenSilently();

    return await axios
      .get(`${serverUrl}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  });
}
