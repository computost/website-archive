import { Box, Container, List, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageHeader from "../components/PageHeader";
import ContentSection from "../components/ContentSection";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Co-op Info</title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <PageHeader title={"Co-op Info"} />
            <Stack spacing={5}>
              <ContentSection
                title={"Why a Co-op of Sofware Consultants?"}
                content={`The founding members of Computost have spent the majority of
                their professional careers in the software consulting
                industry. In consulting it's not difficult to determine how
                much the company values you. Most often you know the rate that
                is being billed for your time. You know how much time you are
                billing and what you are being paid. It's a straightforward
                calculation to determine the percentage being distributed to
                you. Most of the time it's not where you would want it to be.
                In a standard company there's no knowing how the remainder of
                the profits you earned are being used. This is one of the
                problems Computost aims to fix as a cooperative.`}
              />
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
