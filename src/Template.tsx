import { FunctionComponent, PropsWithChildren } from "react";
import {
  Container,
  Link,
  Paper,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import CookiePopup from "./components/CookiePopup";

export const Template: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#f2d098",
      },
      secondary: {
        main: "#f50057",
      },
      text: {
        secondary: "#fcecd1",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Paper
          elevation={3}
          sx={{ minHeight: "-webkit-fill-available", borderRadius: 0 }}
        >
          <ResponsiveAppBar />
          <main style={{ padding: 8 }}>{children}</main>
          <Container sx={{ textAlign: "center", padding: "0.5em" }}>
            <Typography variant="subtitle1" sx={{marginBottom: 1}}>
              Contact us at{" "}
              <Link href="mailto:consulting@computost.com">
                consulting@computost.com
              </Link>
            </Typography>
            <Typography variant="subtitle2">
              Copyright © 2025 Computost Consulting, LLC
            </Typography>
            <CookiePopup />
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
};
