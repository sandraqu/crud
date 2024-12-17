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
import useDeleteUser from "../hooks/useDeleteUser";
import { useUpdateUser } from "../hooks/useUpdateUser";
import Alert from "./Alert";

const UserItem = ({ user }: { user: PersonDto }) => {
  const { firstName, lastName, dob, id } = user;
  const [isEditingDob, setIsEditingDob] = useState<boolean>(false);
  const [isAreYouSure, setIsAreYouSure] = useState<boolean>(false);
  const [editedDob, setEditedDob] = useState<string | undefined>(dob);
  const { mutate: deleteUserMutation, error: deleteError } = useDeleteUser(
    user.id
  );
  const { mutate: updateUserMutation, error: updateError } =
    useUpdateUser(user);

  const handleUpdateUser = (user: PersonDto) => {
    user.dob = editedDob;
    updateUserMutation(user);
    setIsEditingDob(false);
  };

  const handleAreYouSure = () => {
    setIsAreYouSure(true);
  };

  const handleDelete = (userId: number) => {
    setIsEditingDob(false);
    setIsAreYouSure(false);
    deleteUserMutation(userId);
  };

  return (
    <>
      {updateError && <Alert>Could not save</Alert>}
      {deleteError && <Alert>Could not delete</Alert>}
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
                  style={{
                    padding: "4px 6px",
                    background: "green",
                    borderRadius: "4px",
                    border: "1px solid #666666",
                    height: "20px",
                  }}
                />
              ) : (
                <Typography
                  component="p"
                  variant="body2"
                  sx={{
                    color: "text.primary",
                    display: "inline-block",
                    lineHeight: "20px",
                    height: "30px",
                  }}
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
        <ListItemButton
          sx={{
            flex: 2,
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "transparent", // Remove hover background color
            },
          }}
        >
          {isEditingDob ? (
            <Button
              onClick={() => handleUpdateUser(user)}
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
        <ListItemButton
          sx={{
            flex: 2,
            justifyContent: "center",
            "&:hover": {
              backgroundColor: "transparent", // Remove hover background color
            },
          }}
        >
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
