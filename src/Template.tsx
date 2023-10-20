import { FunctionComponent, PropsWithChildren, useState } from "react";
import { ReactComponent as ComputostLogo } from "./assets/computost.svg";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import { Book, Menu, Home, People, BusinessCenter } from "@mui/icons-material";

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
  const data = [
    { name: "Home", icon: <Home />, ref: "/" },
    { name: "Blog", icon: <Book />, ref: "/blog" },
    { name: "Co-op Info", icon: <People />, ref: "/coop" },
    { name: "Services", icon: <BusinessCenter />, ref: "/services" },
  ];
  const [open, setOpen] = useState(false);
  const getList = () => (
    <div onClick={() => setOpen(false)}>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemButton component="a" href={item.ref}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Paper
          elevation={3}
          sx={{ minHeight: "-webkit-fill-available", borderRadius: 0 }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <ComputostLogo
                  title="Computost Consulting"
                  style={{
                    fill: "#fcecd1",
                    height: "2em",
                    marginRight: "0.75em",
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
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Menu />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
              {getList()}
            </Drawer>
          </Box>
          <main style={{ padding: 8 }}>{children}</main>
          <Container sx={{ textAlign: "center", padding: "0.5em" }}>
            <p>
              Contact us at{" "}
              <Link href="mailto:consulting@computost.com">
                consulting@computost.com
              </Link>
            </p>
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  );
};
