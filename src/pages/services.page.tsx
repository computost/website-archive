import { Box, Container, Link, List, Stack, Typography } from "@mui/material";
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
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
