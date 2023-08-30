import { Box, Container, Divider, List, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Blog Post 2</title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Blog Post 2
            </Typography>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ marginBottom: "1em" }}
            />
          </Container>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            This is where blog post 2 content will be.
          </Typography>
        </List>
      </Box>
    </>
  );
};
