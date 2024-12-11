import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import useUsers from "../hooks/useUsers";

const Users = () => {
  // GET /api/v1/users - Get a list of users
  // POST /api/v1/users - Create a new user
  // PUT /api/v1/users/:id - Update an existing user
  // DELETE /api/v1/users/:id - Delete an existing user

  const { users, isLoading, isError } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {users.map(
        (
          users: { firstName: string; lastName: string; dob: string },
          index: string
        ): JSX.Element => {
          const { firstName, lastName, dob } = users;
          return (
            <React.Fragment key={index + firstName + lastName + dob}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={firstName + " " + lastName} src="#" />
                </ListItemAvatar>
                <ListItemText
                  primary={firstName + " " + lastName}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {dob}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          );
        }
      )}
    </List>
  );
};

export default Users;
