import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PersonDto } from "../api/customers";
import axios from "axios";

type DeletePerson = (id: Number) => Promise<PersonDto>;
const deletePerson: DeletePerson = async (id) => {
  const response = await axios.delete(
    `http://localhost:3000/api/v1/persons/${id}`
  );
  return response.data;
};

const useDeletePerson = (personId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (personId: number) => deletePerson(personId),
    onSuccess: () => {
      console.log("Person deleted successfully");
      queryClient.setQueryData(["persons"], (prevPersonList: PersonDto[]) =>
        prevPersonList.filter((u) => u.id !== personId)
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export default useDeletePerson;
