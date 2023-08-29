import { FunctionComponent } from "react";
import { ReactComponent as ComputostLogo } from "./assets/computost.svg";
import { HelmetServerState } from "react-helmet-async";
import { AppBar, Box, IconButton, Toolbar, Typography }  from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

export const Template: FunctionComponent<{
  contents: string;
  helmet: HelmetServerState;
}> = ({ contents, helmet }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/computost.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <>{helmet.title.toComponent()}</>
      </head>
      <body>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <ComputostLogo
                title="Computost Consulting"
                style={{ fill: "#fcecd1", height: "1em", marginRight: "0.25em" }}
              />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
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
        <main
          style={{ padding: 8 }}
          id="root"
          dangerouslySetInnerHTML={{ __html: contents }}
        />
      </body>
    </html>
  );
};
