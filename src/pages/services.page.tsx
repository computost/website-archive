import {
  Box,
  Container,
  Divider,
  Link,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Services</title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Services
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
                  Standard Consulting Services
                </Typography>
                <Typography variant="body1">
                  Computost provides software consulting services at an hourly
                  rate. For details on our hourly rates, please reach out to{" "}
                  <Link href="mailto:consulting@computost.com">
                    consulting@computost.com
                  </Link>
                </Typography>
              </Container>
              <Container>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700 }}
                  color="primary.light"
                >
                  Mission Driven Consulting Services
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginBottom: "1em" }}
                >
                  Not all projects that provide value to the greater community have the capital 
                  to hire a team of developers to build and support their product. Computost has a special type of 
                  service called "Mission Driven" which gives projects, that we see as highly beneficial to the 
                  community, with low or non existent funding an opportunity to be created and provide value.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginBottom: "1em" }}
                >
                  If Computost members collectively agree to take on a Mission Driven project, we will work 
                  with the client to make their product a reality. An hourly rate will be decided upon. Hours 
                  spent will be tracked. After the product is created, if the product generates revenue, payments 
                  over time will be made to eventually pay off the effort spent to create the product. 
                </Typography>
              </Container>
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
