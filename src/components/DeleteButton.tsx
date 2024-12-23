import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import useDeletePerson from "../hooks/useDeletePerson";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";

interface DeleteButtonProps {
  personId: number;
  setIsEditingDob: (value: boolean) => void;
  setError: (error: string | null) => void;
  // typically you add some room for custom props
}
const DeleteButton = ({
  personId,
  setIsEditingDob,
  setError,
}: DeleteButtonProps) => {
  const { mutate: deletePersonMutation, error: deleteError } =
    useDeletePerson(personId);
  const [isAreYouSure, setIsAreYouSure] = useState<boolean>(false);

  const handleAreYouSure = () => {
    setIsAreYouSure(true);
  };

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();

    setIsEditingDob(false);
    setIsAreYouSure(false);
    deletePersonMutation(personId);
  };

  useEffect(() => {
    if (deleteError) {
      setError("Could not delete");
    }
  }, [deleteError]);

  return (
    <>
      {deleteError && <Alert>Could not delete</Alert>}
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
          <Button onClick={handleAreYouSure} color="error" variant="contained">
            Delete
          </Button>
        ) : (
          <Button
            onClick={(e) => handleDelete(e)}
            color="error"
            variant="contained"
          >
            Confirm Delete
          </Button>
        )}
      </ListItemButton>
    </>
  );
};

export default DeleteButton;
