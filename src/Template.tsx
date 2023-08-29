import { FunctionComponent, PropsWithChildren } from "react";
import { ReactComponent as ComputostLogo } from "./assets/computost.svg";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export const Template: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <ComputostLogo
              title="Computost Consulting"
              style={{
                fill: "#fcecd1",
                height: "1em",
                marginRight: "0.25em",
              }}
            />
            <Typography
              href="/"
              variant="h6"
              component="a"
              sx={{ color: "inherit", flexGrow: 1 }}
            >
              Computost Consulting
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <main style={{ padding: 8 }}>{children}</main>
    </>
  );
};
