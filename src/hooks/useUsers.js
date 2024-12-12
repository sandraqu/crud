import { getter } from "../helpers/api";
import { useQuery } from "@tanstack/react-query";

const useUsers = (url) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () => getter(url),
    refetchOnWindowFocus: false,
  });

  // there is a warning I am not addressing
  // [MSW] Warning: captured a request without a matching request handler:

  return { users: data, isLoading, isError: !!error, refetch };
};

export default useUsers;
