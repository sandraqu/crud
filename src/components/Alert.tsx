import { Alert as MuiAlert } from "@mui/material";
import Fade from "@mui/material/Fade";
import { useState, ReactNode } from "react";

type AlertProps = {
  children: ReactNode;
};

const Alert = ({ children }: AlertProps) => {
  const [alertVisibility, setAlertVisibility] = useState(true);

  return (
    <Fade
      in={alertVisibility} //Write the needed condition here to make it appear
      timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
      addEndListener={() => {
        setTimeout(() => {
          setAlertVisibility(false);
        }, 2000);
      }}
    >
      <MuiAlert severity="error" variant="filled" sx={{ width: "400px" }}>
        {children}
      </MuiAlert>
    </Fade>
  );
};

export default Alert;
