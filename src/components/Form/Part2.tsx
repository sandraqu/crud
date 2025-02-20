import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUpdatePerson } from "../../hooks/useUpdatePerson";
import { useQueryClient } from "@tanstack/react-query";
import { PersonDto } from "../../api/customers";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const phoneRegex = /^\d{10}$/; // Basic 10-digit phone number validation

const Part2 = () => {
  const queryClient = useQueryClient();
  const cachedNewPerson = queryClient.getQueryData(["newPerson"]) as PersonDto;
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  console.log("cachedNewPerson", typeof cachedNewPerson, cachedNewPerson);
  const { mutate: updatePersonMutation, error } = useUpdatePerson(
    cachedNewPerson as PersonDto
  );

  const isEmailValid = email === "" || email.match(emailRegex) !== null;
  const isPhoneValid =
    phone === "" || phone.replace(/-/g, "").match(phoneRegex) !== null;
  const isFormValid = isEmailValid && isPhoneValid;

  const navigate = useNavigate();
  const handleSubmit = () => {
    const personData: PersonDto = {
      ...cachedNewPerson,
      ...(email && email.match(emailRegex)
        ? {
            emails: (cachedNewPerson.emails || []).concat({
              id: cachedNewPerson.id,
              typeId: cachedNewPerson.typeId,
              email,
            }),
          }
        : {}),
      ...(phone && phone.replace(/-/g, "").match(phoneRegex)
        ? {
            phones: (cachedNewPerson.phones || []).concat([
              {
                id: cachedNewPerson.id,
                typeId: cachedNewPerson.typeId,
                number: phone,
              },
            ]),
          }
        : {}),
    };

    updatePersonMutation(personData);

    if (!error) {
      navigate("/");
    }
  };

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
      <h1 style={{ textAlign: "center" }}>Add Person: Part 2 of 2</h1>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          //   error={!email.match(emailRegex)}
          //   helperText={!email.match(emailRegex) && "Invalid email address"}
        />
        <TextField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          //   error={!phone.match(phoneRegex)}
          //   helperText={
          //     !phone.match(phoneRegex) && "Invalid phone number (10 digits)"
          //   }
        />
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
          Complete
        </Button>
      </Box>
    </Box>
  );
};

export default Part2;
