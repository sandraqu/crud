import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteUser = async (id) => {
  const response = await axios.delete(
    `http://localhost:3000/api/v1/users/${id}`
  );
  return response.data;
};

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userId) => deleteUser(userId),
    refetchQueriesOnFailure: ["users"],
    onSuccess: () => {
      console.log("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useDeleteUser;
