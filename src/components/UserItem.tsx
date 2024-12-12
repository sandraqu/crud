import { useState } from "react";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { PersonDto } from "../api/customers";
import { useQueryClient } from "@tanstack/react-query";
// import useDeleteUser from "../hooks/useDeleteUser";
import axios from "axios";

const UserItem = ({ user, refetch }: { user: PersonDto; refetch: any }) => {
  const queryClient = useQueryClient();
  //   const { mutate: deleteUserMutation } = useDeleteUser();
  const { firstName, lastName, dob, id } = user;
  const [isEditingDob, setIsEditingDob] = useState(false);
  const [isAreYouSure, setIsAreYouSure] = useState(false);
  const [editedDob, setEditedDob] = useState(dob);

  const handleSaveDob = async (user: any) => {
    // PUT /api/v1/users/:id - Update an existing user

    // try {
    //   const response = await axios.put(
    //     `http://localhost:3000/api/v1/users/${user.id}`
    //   );
    //   // I'm getting a 204 no content
    //   if (response.status === 200) {
    //     refetch();
    //   }
    //   console.log("User updated successfully:", response.data);
    // } catch (error) {
    //   console.error("Error updating user:", error);
    // }

    // This part seems to work but it's 24hrs off
    const updatedUser = { ...user, dob: editedDob };
    queryClient.setQueryData(["users"], (oldUsers: PersonDto[]) => {
      const newUsers = oldUsers.map((u) =>
        u.id === user.id ? updatedUser : u
      );
      return newUsers;
    });
    setIsEditingDob(false);
  };

  const handleAreYouSure = () => {
    setIsAreYouSure(true);
  };

  const handleDelete = (userId: number) => {
    // I have a type error, number is not assignable to void
    // deleteUser(userId);
    setIsAreYouSure(false);
  };

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={firstName + " " + lastName} src="#" />
        </ListItemAvatar>
        <ListItemText
          sx={{ alignItems: "flex-start", flex: 3 }}
          primary={firstName + " " + lastName}
          secondary={
            <>
              {isEditingDob ? (
                <input
                  type="date"
                  value={editedDob}
                  onChange={(e) => setEditedDob(e.target.value)}
                />
              ) : (
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
              )}
            </>
          }
        />
        <ListItemButton>
          {isEditingDob ? (
            <Button
              onClick={() => handleSaveDob(user)}
              color="primary"
              variant="contained"
            >
              Save Changes
            </Button>
          ) : (
            <Button
              onClick={() => setIsEditingDob(true)}
              color="primary"
              variant="contained"
            >
              Edit
            </Button>
          )}
        </ListItemButton>
        <ListItemButton>
          {!isAreYouSure ? (
            <Button
              onClick={handleAreYouSure}
              color="error"
              variant="contained"
            >
              Delete
            </Button>
          ) : (
            <Button
              onClick={() => handleDelete(id)}
              color="error"
              variant="contained"
            >
              Confirm Delete
            </Button>
          )}
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default UserItem;
