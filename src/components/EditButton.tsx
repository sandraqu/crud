import { useEffect } from "react";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { PersonDto } from "../api/customers";

type EditButtonProps = {
  user: PersonDto;
  editedDob: string | undefined;
  isEditingDob: boolean;
  setIsEditingDob: (isEditingDob: boolean) => void;
  setError: (error: string | null) => void;
  // typically you add some room for custom props
};
const EditButton = ({
  user,
  editedDob,
  isEditingDob,
  setIsEditingDob,
  setError,
}: EditButtonProps) => {
  const { mutate: updateUserMutation, error: updateError } =
    useUpdateUser(user);
  const handleUpdateUser = (user: PersonDto) => {
    setIsEditingDob(false);
    user.dob = editedDob;
    updateUserMutation(user);
  };

  useEffect(() => {
    if (updateError) {
      setError("Could not save");
    }
  }, [updateError]);

  return (
    <>
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
    </>
  );
};

export default EditButton;
