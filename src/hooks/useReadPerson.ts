import { useQuery } from "@tanstack/react-query";
import { PersonDto } from "../api/customers";
import axios from "axios";

type ReadPerson = () => Promise<PersonDto[]>;
const readPerson: ReadPerson = async () => {
  const response = await axios.get(`http://localhost:3000/api/v1/persons`);
  return response.data;
};
const useReadPerson = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["persons"],
    queryFn: () => readPerson(),
    refetchOnWindowFocus: false,
  });

  return { personList: data, isLoading, isError: !!error };
};

export default useReadPerson;
