import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import { useUpdatePerson } from "../hooks/useUpdatePerson";
import { PersonDto } from "../api/customers";

type EditButtonProps = {
  person: PersonDto;
  editedDob: string | undefined;
  isEditingDob: boolean;
  setIsEditingDob: (isEditingDob: boolean) => void;
  setError: (error: string | null) => void;
  // typically you add some room for custom props
  // but in this case, we don't need any
};
const EditButton = ({
  person,
  editedDob,
  isEditingDob,
  setIsEditingDob,
  setError,
}: EditButtonProps) => {
  const { mutate: updatePersonMutation, error: updateError } =
    useUpdatePerson(person);
  const handleUpdatePerson = (person: PersonDto) => {
    setIsEditingDob(false);
    person.dob = editedDob;
    updatePersonMutation(person);
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
            onClick={() => handleUpdatePerson(person)}
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
