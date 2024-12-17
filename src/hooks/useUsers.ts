import { useQuery } from "@tanstack/react-query";
import { PersonDto } from "../api/customers";
import axios from "axios";

type GetUsers = () => Promise<PersonDto[]>;
const getUsers: GetUsers = async () => {
  const response = await axios.get(`http://localhost:3000/api/v1/users`);
  return response.data;
};
const useUsers = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    refetchOnWindowFocus: false,
  });

  // there is a warning I am not addressing
  // [MSW] Warning: captured a request without a matching request handler:

  return { users: data, isLoading, isError: !!error, refetch };
};

export default useUsers;
