import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PersonDto } from "../api/customers";
import axios from "axios";

type UpdatePerson = (person: PersonDto) => Promise<PersonDto>;
const updatePerson: UpdatePerson = async (person) => {
  const response = await axios.put(
    `http://localhost:3000/api/v1/persons/${person.id}`,
    person
  );
  return response.data;
};

export const useUpdatePerson = (person: PersonDto) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (person: PersonDto) => updatePerson(person),
    onSuccess: () => {
      console.log("Person updated successfully");
      queryClient.setQueryData(["persons"], (prevPersonList: PersonDto[]) =>
        prevPersonList.map((u) => (u.id === person.id ? person : u))
      );
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
