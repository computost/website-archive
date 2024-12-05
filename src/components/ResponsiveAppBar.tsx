import { FunctionComponent, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

import { ReactComponent as ComputostLogo } from "../assets/computost.svg";

const ResponsiveAppBar: FunctionComponent<{}> = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const data = [
    { name: "Home", ref: "/" },
    { name: "Co-op Info", ref: "/coop" },
    { name: "Services", ref: "/services" },
  ];

  const getAppBarList = () => (
    <div>
      {data.map((item, index) => (
        <Button href={item.ref} sx={{ mr: 1 }} key={index}>
          {item.name}
        </Button>
      ))}
    </div>
  );

  const getDropDownList = () => (
    <div>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListItemButton component="a" href={item.ref}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </div>
  );

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ComputostLogo
              title="Computost Consulting"
              style={{
                fill: "#fcecd1",
                height: "2em",
                marginRight: "0.75em",
              }}
            />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
            }}
          >
            Computost Consulting
          </Typography>

          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <ComputostLogo
              title="Computost Consulting"
              style={{
                fill: "#fcecd1",
                height: "2em",
                marginRight: "0.75em",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 0,
                color: "inherit",
              }}
            >
              Computost Consulting
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {getAppBarList()}
          </Box>
          <Box
            sx={{
              justifyContent: "end",
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="menu-appbar"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {getDropDownList()}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
