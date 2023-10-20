import {
  Box,
  Container,
  Divider,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Co-op Info</title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Co-op Info
            </Typography>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ marginBottom: "1em" }}
            />
            <Stack spacing={5}>
              <Container>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700 }}
                  color="primary.light"
                >
                  Why a Co-op of Sofware Consultants?
                </Typography>
                <Typography variant="body1">
                The founding members of Computost have spent the majority of 
                their professional careers in the software consulting industry. 
                In consulting it's not difficult to determine how much the company 
                values you. Most often you know the rate that is being billed for 
                your time. You know how much time you are billing and what you are 
                being paid. It's a straightforward calculation to determine the 
                percentage being distributed to you. Most of the time it's not 
                where you would want it to be. In a standard company there's no 
                knowing how the remainder of the profits you earned are being used. 
                This is one of the problems Computost aims to fix as a cooperative.
                </Typography>
              </Container>
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
