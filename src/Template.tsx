import { FunctionComponent, PropsWithChildren, useState } from "react";
import { ReactComponent as ComputostLogo } from "./assets/computost.svg";
import { AppBar, Box, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon,
  ListItemText, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import { Book, Menu, Home } from "@mui/icons-material";

export const Template: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const data = [
    { name: "Home", icon: <Home />, ref: "/" },
    { name: "Blog", icon: <Book />, ref: "/blog" }
  ];
  const [open, setOpen] = useState(false);
  const getList = () => (
    <div onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemButton component="a" href={item.ref} >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
    </div>
  );
  return (
    <>
      <ThemeProvider theme={darkTheme}>
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
                sx={{ mr: 2 }}
                onClick={() => {setOpen(true)}}
              >
                <Menu />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
            {getList()}
          </Drawer>
        </Box>
      </ThemeProvider>
      <main style={{ padding: 8 }}>{children}</main>
    </>
  );
};
