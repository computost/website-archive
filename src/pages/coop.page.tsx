import {
  Box,
  Container,
  List,
  Stack,
} from "@mui/material";
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
            <Stack spacing={3}>
              <ContentSection
                title={"Why a Co-op of Software Consultants?"}
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
              <ContentSection
                title={"Our Co-op Principles"}
                content={`There are an infinite number of ways to run a cooperative. 
                We have chosen the following principles to run Computost by:`}
              />
              <ContentSection
                subTitle={`One Member One Vote`}
                content={`Every member has the same voting weight.`}
              />
              <ContentSection
                subTitle={`Member Managed`}
                content={`Every member is required to vote on each decision or proposal. 
                Any member can raise a proposal to vote on.`}
              />
              <ContentSection
                subTitle={`No Hierarchy`}
                content={`There are no managers. All members have the same level and authority 
                and autonomy.`}
              />
              <ContentSection
                subTitle={`Patronage Based Compensation`}
                content={`Every member receives the same base salary, decided by members. 
                In addition to salary, surplus is distributed to members on a cadence 
                decided by members. The percentage of surplus distributed to members is equal to 
                their patronage, which is currently defined as hours worked in the time period.`}
              />
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
