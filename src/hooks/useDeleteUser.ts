import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PersonDto } from "../api/customers";
import axios from "axios";

type DeleteUser = (id: Number) => Promise<PersonDto>;
const deleteUser: DeleteUser = async (id) => {
  const response = await axios.delete(
    `http://localhost:3000/api/v1/users/${id}`
  );
  return response.data;
};

const useDeleteUser = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId: number) => deleteUser(userId),
    onSuccess: () => {
      console.log("User deleted successfully");
      queryClient.setQueryData(["users"], (prevUsers: PersonDto[]) =>
        prevUsers.filter((u) => u.id !== userId)
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useDeleteUser;
