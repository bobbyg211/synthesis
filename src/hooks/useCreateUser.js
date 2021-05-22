import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

export default function useCreateUser(event) {
  // const queryClient = useQueryClient();
  // const {}
  // (values) => axios.post("/users", values).then((res) => res.data);
}

// export default function useCreateUser() {
//   const queryClient = useQueryClient();

//   return useMutation(
//     (values) => axios.post("/users", values).then((res) => res.data),
//     {
//       onMutate: (newUser) => {
//         const currentUsers = queryClient.getQueryData("users");

//         if (currentUsers) {
//           queryClient.setQueryData("users", (current) => [...current, newUser]);
//         }

//         return () => queryClient.setQueryData("users", currentUsers);
//       },
//     }
//   );
// }
