import { Button, Snackbar } from "@mui/material";
import { FunctionComponent, useState } from "react";

const CookiePopup: FunctionComponent<{}> = () => {
  const [cookiePopUpOpen, setcookiePopUpOpen] = useState(true);

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setcookiePopUpOpen(false);
  };

  const action = (
    <Button size="small" onClick={handleClose}>
      X
    </Button>
  );

  return (
    <Snackbar
      ContentProps={{ sx: { color: "#f2d098", backgroundColor: "black" } }}
      open={cookiePopUpOpen}
      onClose={() => {
        setcookiePopUpOpen(false);
      }}
      message="We do not use cookies on this site!"
      action={action}
    />
  );
};
export default CookiePopup;
