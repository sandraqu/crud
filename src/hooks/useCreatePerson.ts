import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { PersonDto } from "../api/customers";
import axios from "axios";

type NewPersonDto = Omit<PersonDto, "id">;

type CreatePerson = (person: NewPersonDto) => Promise<PersonDto>;

type UseCreatePerson = (
  person: NewPersonDto
) => UseMutationResult<PersonDto, unknown, NewPersonDto>;

const createPerson: CreatePerson = async (person) => {
  const response = await axios.post(
    `http://localhost:3000/api/v1/persons`,
    person
  );
  return response.data;
};

export const useCreatePerson: UseCreatePerson = (person) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (person: NewPersonDto) => createPerson(person),
    onSuccess: (newPerson) => {
      // Update the query cache with the newly created person
      queryClient.setQueryData(
        ["persons"],
        (newPersonList: PersonDto[] | undefined) => {
          if (newPersonList) {
            return [...newPersonList, newPerson];
          }

          return [newPerson];
        }
      );

      queryClient.setQueryData(["newPerson"], newPerson);
    },
    onError: (error) => {
      // log error to Sentry or like
    },
  });
};
