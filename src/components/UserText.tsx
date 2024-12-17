import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import { PersonDto } from "../api/customers";

type UserTextProps = {
  user: PersonDto;
  editedDob: string | undefined;
  isEditingDob: boolean;
  setEditedDob: React.Dispatch<React.SetStateAction<string | undefined>>;
};
const UserText = ({
  user,
  editedDob,
  isEditingDob,
  setEditedDob,
}: UserTextProps) => {
  const { firstName, lastName, dob } = user;

  return (
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
                borderRadius: "4px",
                border: "1px solid #bbbbbb",
                outline: "none",
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
  );
};

export default UserText;
