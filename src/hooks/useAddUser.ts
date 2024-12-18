import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PersonDto } from "../api/customers";
import axios from "axios";

type NewPerson = Omit<PersonDto, "id">;

type AddUser = (user: NewPerson) => Promise<PersonDto>;
const addUser: AddUser = async (user) => {
  const response = await axios.post(`http://localhost:3000/api/v1/users`, user);
  return response.data;
};

export const useAddUser = (user: NewPerson) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (user: NewPerson) => addUser(user),
    onSuccess: (newUser) => {
      console.log("User updated successfully");

      // Update the query cache with the newly created user
      queryClient.setQueryData(
        ["users"],
        (oldUsers: PersonDto[] | undefined) => {
          if (oldUsers) {
            return [...oldUsers, newUser];
          }
          console.log("newUser", newUser);
          return [newUser];
        }
      );

      queryClient.setQueryData(["newUser"], newUser);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
