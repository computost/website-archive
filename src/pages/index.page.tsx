import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Paper,
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
      <Grid container direction={"row"} wrap={"wrap"} justifyContent="center">
        <Paper variant="outlined" sx={{ margin: "1em" }}>
          <Container sx={{ padding: "1em" }}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{ textAlign: "center" }}
              color="primary"
            >
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
              members have an average of 15 years of experience working with
              Power Platform and Microsoft technologies. In our careers, we have
              provided consulting to help build large enterprise projects.
            </Typography>
          </Container>
        </Paper>
        <Grid container direction={"row"} wrap={"wrap"} justifyContent="center">
          <Grid item>
            <Paper variant="outlined" sx={{ margin: "1em" }}>
              <Container maxWidth="sm" sx={{ padding: "1em" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  color="primary"
                >
                  The Co-op Vision
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ marginBottom: "1em" }}
                />
                <Typography paragraph variant="body1">
                  Computost is a cooperative governed by a working agreement tailored to
                  maximize dividing business responsibilities and profits to its members. 
                  Our vision is to create an inclusive democratic workplace for software consultants.
                </Typography>
                <Link href="/coop">Read more about cooperatives</Link>
              </Container>
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" sx={{ margin: "1em" }}>
              <Container maxWidth="sm" sx={{ padding: "1em" }}>
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  color="primary"
                >
                  Services
                </Typography>
                <Divider
                  orientation="horizontal"
                  flexItem
                  sx={{ marginBottom: "1em" }}
                />
                <Typography paragraph variant="body1">
                Computost provides software consulting services at a competitive hourly rate. 
                All members are highly skilled and experienced developers. Our experience is primarily 
                with Microsoft products but our services are not limited to Microsoft products.
                </Typography>
                <Link href="/services">Read more about our services</Link>
              </Container>
            </Paper>
          </Grid>
        </Grid>
        <Grid container direction={"row"} wrap={"wrap"} justifyContent="center">
          <Grid item>
            <Paper variant="outlined" sx={{ margin: "1em" }}>
              <Container maxWidth="xs" sx={{ padding: "1em" }}>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  color="primary"
                >
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
                      color="primary.light"
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
                      color="primary.light"
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
                      color="primary.light"
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
                      color="primary.light"
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
            </Paper>
          </Grid>
          <Grid item>
            <Paper variant="outlined" sx={{ margin: "1em" }}>
              <Container fixed maxWidth="xs" sx={{ padding: "1em" }}>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  color="primary"
                >
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
                      color="primary.light"
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
                      color="primary.light"
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
                      color="primary.light"
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
            </Paper>
          </Grid>
          <Grid item sx={{ marginBottom: "2em" }}>
            <Paper variant="outlined" sx={{ margin: "1em" }}>
              <Container maxWidth="xs" sx={{ padding: "1em" }}>
                <Typography
                  variant="h4"
                  sx={{ textAlign: "center" }}
                  color="primary"
                >
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
                    community. Below are some of the tools we have created:
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
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  </>
);
