import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const fetcher = (url) => {
  return axios.get(url).then((res) => res.data);
};

const useUsers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetcher("http://localhost:3000/api/v1/users"),
    refetchOnWindowFocus: false,
  });

  // there is a warning I am not addressing
  // [MSW] Warning: captured a request without a matching request handler:

  return { users: data, isLoading, isError: !!error };
};

export default useUsers;
