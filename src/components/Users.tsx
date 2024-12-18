import List from "@mui/material/List";
import useUsers from "../hooks/useUsers";
import { PersonDto } from "../api/customers";
import UserItem from "./UserItem";

const Users = () => {
  const { users, isLoading, isError } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {users &&
        users
          .slice(0)
          .reverse()
          .map(
            (user: PersonDto, index: number): JSX.Element => (
              <UserItem key={user.firstName + index} user={user} />
            )
          )}
    </List>
  );
};

export default Users;
