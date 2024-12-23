import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";
import { useCreatePerson } from "../../hooks/useCreatePerson";

interface FormValues {
  firstName: string;
  lastName: string;
  dateOfBirth: Dayjs | null;
}

const Part1 = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
  });

  const personData = {
    typeId: 5,
    firstName: formValues.firstName,
    lastName: formValues.lastName,
    legalName: `${formValues.firstName} ${formValues.lastName}`,
    dob: formValues.dateOfBirth
      ? formValues.dateOfBirth.format("YYYY-MM-DD")
      : "",
  };

  const {
    error,
    mutate: addPersonMutation,
    data: createdPerson,
  } = useCreatePerson(personData);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!formValues.firstName || !formValues.lastName) {
      // Handle validation error (e.g., display an error message)
      console.error("First name and last name are required."); // an Alert situation?
      return;
    }

    // Continue with form submission
    addPersonMutation(personData);
  };

  const isFormValid = !!formValues.firstName && !!formValues.lastName;

  useEffect(() => {
    if (createdPerson) {
      navigate("/form/2");
    }
    if (error) {
      console.log("uE error", error); // an Alert situation?
    }
  }, [createdPerson, error]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "50%",
        margin: "1rem auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Add Person: Part 1 of 2</h1>
      {/* First Row */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          id="firstname"
          label="First Name"
          variant="outlined"
          sx={{ flex: 1 }}
          value={formValues.firstName}
          onChange={(e) =>
            setFormValues({ ...formValues, firstName: e.target.value.trim() })
          }
          required
        />
        <TextField
          id="lastname"
          label="Last Name"
          variant="outlined"
          sx={{ flex: 1 }}
          value={formValues.lastName}
          onChange={(e) =>
            setFormValues({ ...formValues, lastName: e.target.value.trim() })
          }
          required
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-us">
          <DatePicker
            label="DOB"
            value={formValues.dateOfBirth}
            onChange={(newValue) =>
              setFormValues({ ...formValues, dateOfBirth: newValue })
            }
          />
        </LocalizationProvider>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="outlined"
          sx={{ flex: 1 }}
          onClick={() => navigate("/")}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ flex: 1 }}
          onClick={handleSubmit}
          disabled={!isFormValid}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default Part1;
