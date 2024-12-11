import React from "react";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import useUsers from "../hooks/useUsers";
import { a } from "msw/lib/glossary-de6278a9";

const Users = () => {
  // GET /api/v1/users - Get a list of users
  // POST /api/v1/users - Create a new user
  // PUT /api/v1/users/:id - Update an existing user
  // DELETE /api/v1/users/:id - Delete an existing user

  const { users, isLoading, isError } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {users.map(
        (
          users: { firstName: string; lastName: string; dob: string },
          index: string
        ): JSX.Element => {
          const { firstName, lastName, dob } = users;
          return (
            <React.Fragment key={index + firstName + lastName + dob}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={firstName + " " + lastName} src="#" />
                </ListItemAvatar>
                <ListItemText
                  sx={{ alignItems: "flex-start", flex: 3 }}
                  primary={firstName + " " + lastName}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {dob
                          ? new Date(dob)
                              .toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })
                              .toString()
                          : "dob missing"}
                      </Typography>
                    </>
                  }
                />
                <ListItemButton>
                  <Button variant="contained">Edit</Button>
                </ListItemButton>
                <ListItemButton>
                  <Button variant="contained">Delete</Button>
                </ListItemButton>
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
