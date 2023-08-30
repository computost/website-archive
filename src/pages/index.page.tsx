import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  Stack,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

export const Page = () => (
  <>
    <Helmet>
      <title>Computost Consulting - Home</title>
    </Helmet>
    <Box>
      <List>
        <Container sx={{ marginBottom: "2em" }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            About Us
          </Typography>
          <Divider
            orientation="horizontal"
            flexItem
            sx={{ marginBottom: "1em" }}
          />
          <Typography paragraph variant="body1">
            We are a small team of software engineering consultants who
            specialize in Power Platform and Azure technologies. Our team
            members have an average of 15 years of experience working with Power
            Platform and Microsoft technologies. In our careers, we have helped
            build large, enterprise projects or provide guidance to small teams
            with simple goals.
          </Typography>
        </Container>
        <Container sx={{ marginBottom: "2em" }}>
          <Grid container direction={"row"} wrap={"wrap"} justifyContent="center">
            <Grid item sx={{ marginBottom: "2em" }}>
              <Container maxWidth="xs">
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Our Principals
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ marginBottom: "1em" }}
                />
                <Stack direction={"column"} spacing={1}>
                  <Container>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, textAlign: "center" }}
                    >
                      Quality
                    </Typography>
                    <Typography variant="body1">
                      If anything is worth doing, it's worth doing right. No job
                      is finished until it meets our standards of documentation,
                      styling, testing, and deployability.
                    </Typography>
                  </Container>
                  <Container>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, textAlign: "center" }}
                    >
                      Communication
                    </Typography>
                    <Typography variant="body1">
                      We code in an open kitchen. Everything we make, our
                      customers have access to it at all times.
                    </Typography>
                  </Container>
                  <Container>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, textAlign: "center" }}
                    >
                      Maintainability
                    </Typography>
                    <Typography variant="body1">
                      As solution architects, we build everything with support
                      in mind.
                    </Typography>
                  </Container>
                  <Container>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, textAlign: "center" }}
                    >
                      Flexibility
                    </Typography>
                    <Typography variant="body1">
                      Your technical solutions should grow with your business.
                      We deliver value in frequent, small intervals, continuing
                      to reassess what you need after each delivery.
                    </Typography>
                  </Container>
                </Stack>
              </Container>
            </Grid>
            <Grid item sx={{ marginBottom: "2em"}}>
              <Container fixed maxWidth="xs">
                <Typography variant="h4">
                  Technologies
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ marginBottom: "1em" }}
                />
                <Stack direction={"column"} spacing={2}>
                  <Stack direction={"column"}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, textAlign: "center" }}
                    >
                      Power Platform
                    </Typography>
                    <Stack direction={"column"} spacing={1}>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Power Apps
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Power Automate
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Power Pages
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, textAlign: "center" }}
                    >
                      Azure
                    </Typography>
                    <Stack direction={"column"} spacing={1}>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Data Factory
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Function Apps
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Service Bus
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        SQL
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack direction={"column"}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, textAlign: "center" }}
                    >
                      DevOps
                    </Typography>
                    <Stack direction={"column"} spacing={1}>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Azure DevOps
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        GitHub
                      </Typography>
                      <Typography variant="body1" sx={{ textAlign: "center" }}>
                        GitLab
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Container>
            </Grid>
            <Grid item sx={{ marginBottom: "2em" }}>
              <Container maxWidth="xs">
                <Typography variant="h4" sx={{ textAlign: "center" }}>
                  Projects
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ marginBottom: "1em" }}
                />
                <Container>
                  <Typography
                    paragraph
                    variant="body1"
                    sx={{ marginBottom: "0.5em" }}
                  >
                    While we work with customers, we often innovate tools that
                    can provide value for the larger software development
                    community. Below are some of the tools we have created and
                    actively maintain:
                  </Typography>
                </Container>
                <ul>
                  <li>
                    <Link href="https://github.com/computost/pac-fetch">
                      pac-fetch
                    </Link>
                  </li>
                </ul>
              </Container>
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ textAlign: "center" }}>
          <p>
            Contact us at{" "}
            <a href="mailto:consulting@computost.com">
              consulting@computost.com
            </a>
          </p>
        </Container>
      </List>
    </Box>
  </>
);
