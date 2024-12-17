import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PersonDto } from "../api/customers";
import axios from "axios";

type UpdateUser = (user: PersonDto) => Promise<PersonDto>;
const updateUser: UpdateUser = async (user) => {
  const response = await axios.put(
    `http://localhost:3000/api/v1/users/${user.id}`,
    user
  );
  return response.data;
};

export const useUpdateUser = (user: PersonDto) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: PersonDto) => updateUser(user),
    onSuccess: () => {
      console.log("User updated successfully");
      queryClient.setQueryData(["users"], (prevUsers: PersonDto[]) =>
        prevUsers.map((u) => (u.id === user.id ? user : u))
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
