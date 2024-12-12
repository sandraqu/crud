import List from "@mui/material/List";
import useUsers from "../hooks/useUsers";
import { PersonDto } from "../api/customers";
import UserItem from "./UserItem";

const Users = () => {
  // GET /api/v1/users - Get a list of users
  // POST /api/v1/users - Create a new user

  const { users, isLoading, isError, refetch } = useUsers("/api/v1/users");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {users.map(
        (user: PersonDto, index: string): JSX.Element => (
          <UserItem key={index} user={user} refetch={refetch} />
        )
      )}
    </List>
  );
};

export default Users;
