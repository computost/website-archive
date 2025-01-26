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
                industry. Consulting can be difficult for some as the hourly 
                rate is often known by the developer. Knowing the billed rate and pay rate can 
                lead some to wonder where the difference is going. Usually, the developers 
                entering billable hours are far removed from the discussion of where the profits 
                generated from their effort is allocated. This is one of the core 
                problems Computost aims to fix as a cooperative. The projects Computost takes and how 
                profit is distributed are decided by the members.`}
              />
              <ContentSection
                content={`We strive to create an environment where developers 
                have the chance to do positive, meaningful, work and are compensated 
                fairly based on their patronage.`}
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
                content={`There are no managers. All members have the same level of authority 
                and autonomy.`}
              />
              <ContentSection
                subTitle={`Shared Profits and Losses`}
                content={`Surplus from billable work is divided based on patronage, which is 
                  defined by billable hours worked in a period of time. If times are busy and there is 
                  a lot of work, we all share the benefits based on our contribution.`}
              />
              <ContentSection
                content={`On the other hand, if billable work is in limited supply, it will be felt by all 
                  and provide incentive for all members to contribute to the cooperative.`}
              />
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
