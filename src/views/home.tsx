import { Box, Button, Typography } from "@mui/material";
import PersonList from "../components/PersonList";
import { useNavigate } from "react-router-dom";
export function HomeView() {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: "center" }}>
      <h1>'Ssup!</h1>
      <Typography sx={{ textDecoration: "green wavy underline overline" }}>
        Do your thing! Remember to ask questions!
      </Typography>
      <Box
        sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 2, mb: 2 }}
      >
        <Button
          variant="contained"
          sx={{ width: "200px" }}
          onClick={() => navigate("/form/1")}
        >
          Add Person
        </Button>
      </Box>
      <PersonList />
    </Box>
  );
}
