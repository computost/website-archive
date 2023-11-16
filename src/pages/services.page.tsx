import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import ContentSection from "../components/ContentSection";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Services</title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <PageHeader title={"Services"} />
            <Stack>
              <ContentSection
                title={"Standard Consulting Services"}
                children={
                  <Typography variant="body1">
                    Computost provides software consulting services at an hourly
                    rate. For details on our hourly rates, please reach out to{" "}
                    <Link href="mailto:consulting@computost.com">
                      consulting@computost.com
                    </Link>
                  </Typography>
                }
              />
              <ContentSection
                title={"Mission Driven Consulting Services"}
                content={`Not all projects that provide value to the greater community
                have the capital to hire a team of developers to build and
                support their product. Computost has a special type of service
                called "Mission Driven" which gives projects, that we see as
                highly beneficial to the community, with low or non existent
                funding an opportunity to be created and provide value.`}
              />
              <ContentSection
                content={`If Computost members collectively agree to take on a Mission
                Driven project, we will work with the client to make their
                product a reality. An hourly rate will be decided upon. Hours
                spent will be tracked. After the product is created, if the
                product generates revenue, payments over time will be made to
                eventually pay off the effort spent to create the product.`}
              />
              <Paper elevation={0} sx={{ margin: "1em" }}>
                <Stack direction={"column"} justifyContent={"center"}>
                  <Typography
                    variant="h5"
                    color="primary.light"
                    sx={{ textAlign: "center", marginTop: 1, fontWeight: 700 }}
                  >
                    Service Details
                  </Typography>
                  <Divider
                    sx={{ marginBottom: 1, marginTop: 1 }}
                    variant="middle"
                  />

                  <Paper
                    elevation={1}
                    sx={{ marginLeft: 1, marginRight: 1, marginBottom: 0.5 }}
                  >
                    <ContentSection
                    containerSx={{ marginBottom: 1, marginTop: 1 }}
                      subTitle={"New Application Development"}
                      content={"Integrations to and or from new applications"}
                    />
                  </Paper>
                  <Paper
                    elevation={1}
                    sx={{ marginLeft: 1, marginRight: 1, marginBottom: 0.5 }}
                  >
                    <ContentSection
                      containerSx={{ marginBottom: 1, marginTop: 1 }}
                      subTitle={"Enhancements to Existing Applications"}
                    />
                  </Paper>
                  <Paper
                    elevation={1}
                    sx={{ marginLeft: 1, marginRight: 1, marginBottom: 0.5 }}
                  >
                    <ContentSection
                      containerSx={{ marginBottom: 1, marginTop: 1 }}
                      subTitle={"Reviews of Existing Applications"}
                    />
                  </Paper>
                  <Paper
                    elevation={1}
                    sx={{ marginLeft: 1, marginRight: 1, marginBottom: 0.5 }}
                  >
                    <ContentSection
                      containerSx={{ marginBottom: 1, marginTop: 1 }}
                      subTitle={"Deployment and Infrastructure Configuration"}
                    />
                  </Paper>
                  <Paper
                    elevation={1}
                    sx={{ marginLeft: 1, marginRight: 1, marginBottom: 0.5 }}
                  >
                    <ContentSection
                      containerSx={{ marginBottom: 1, marginTop: 1 }}
                      subTitle={"Workshops"}
                      contentSx={{ whiteSpace: "pre-wrap" }}
                      content={`Automated Deployments
Test Driven Development`}
                    />
                  </Paper>
                </Stack>
              </Paper>

              <Paper elevation={0} sx={{ margin: "1em" }}>
                <Stack direction={"column"} justifyContent={"center"}>
                  <Typography
                    variant="h5"
                    color="primary.light"
                    sx={{ textAlign: "center", marginTop: 1, fontWeight: 700 }}
                  >
                    Core Competencies
                  </Typography>
                  <Divider
                    sx={{ marginBottom: 1, marginTop: 1 }}
                    variant="middle"
                  />
                  <Grid
                    container
                    //direction={"column"}
                    //wrap={"wrap"}
                    //justifyContent="center"
                  >
                    <Grid item>
                      <ContentSection
                        title={"Lanaguages"}
                        contentSx={{ whiteSpace: "pre-wrap" }}
                        content={`C#
SQL
Javascript
Typescript
Powershell
Ruby
                `}
                      />
                    </Grid>
                    <Grid item>
                      <ContentSection
                        titleSx={{ whiteSpace: "pre-wrap" }}
                        title={`Frameworks
/ Libraries`}
                        contentSx={{ whiteSpace: "pre-wrap" }}
                        content={`Webpack
React
Vite
MaterialUI
FluentUI
                `}
                      />
                    </Grid>
                    <Grid item>
                      <ContentSection
                        title={"Microsoft"}
                        contentSx={{ whiteSpace: "pre-wrap" }}
                        content={`Power Platform
Azure DevOps
API Management
Microsoft SQL Server
Azure Function App
Azure Cosmos
Kusto
Azure Data Factory
Synapse
Data Lake
Data Bricks
Azure Web Apps 
Azure Kubernetes Service (AKS)
SSIS
SSRS
                `}
                      />
                    </Grid>
                    <Grid item>
                      <ContentSection
                        title={"Github"}
                        contentSx={{ whiteSpace: "pre-wrap" }}
                        content={`Github Workflows
Actions`}
                      />
                    </Grid>
                    <Grid item>
                      <ContentSection
                        title={"Google"}
                        contentSx={{ whiteSpace: "pre-wrap" }}
                        content={`Firebase
Google Cloud Storage
                `}
                      />
                    </Grid>
                  </Grid>
                </Stack>
              </Paper>
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
