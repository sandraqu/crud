import { useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Alert from "./Alert";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import UserText from "./UserText";
import { PersonDto } from "../api/customers";
const UserItem = ({ user }: { user: PersonDto }) => {
  const { firstName, lastName, dob, id } = user;
  const [isEditingDob, setIsEditingDob] = useState<boolean>(false);
  const [editedDob, setEditedDob] = useState<string | undefined>(dob);
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      {error && <Alert>{error}</Alert>}
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={firstName + " " + lastName} src="#" />
        </ListItemAvatar>
        <UserText
          user={user}
          editedDob={editedDob}
          isEditingDob={isEditingDob}
          setEditedDob={setEditedDob}
        />
        <EditButton
          user={user}
          editedDob={editedDob}
          isEditingDob={isEditingDob}
          setIsEditingDob={setIsEditingDob}
          setError={setError}
        />
        <DeleteButton
          userId={id}
          setIsEditingDob={setIsEditingDob}
          setError={setError}
        />
      </ListItem>
    </>
  );
};

export default UserItem;
