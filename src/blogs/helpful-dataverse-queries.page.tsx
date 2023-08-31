import {
  Box,
  Container,
  Divider,
  List,
  Stack,
  Typography,
} from "@mui/material";
import xml from "highlight.js/lib/languages/xml";
import { Helmet } from "react-helmet-async";
import CodeBlock from "../components/CodeBlock";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Helpful Dataverse Queries</title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Helpful Dataverse Queries
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
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  Purpose
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", marginBottom: "1em" }}
                >
                  Low code / no code solutions continue to be the primary focus
                  of the PowerPlatform product team. These tools are great but
                  new developers may not know how these components relate to
                  entities and fields in the Dataverse database. Many of the
                  tricks used over the past 10+ years by crm developers are
                  still applicable to new low code / no code content.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  At the end of the day, everything PowerPlatform related is
                  stored in the database and if it's the database, we can write
                  fetch to get it.
                </Typography>
              </Container>
              <Container sx={{ justifyItems: "center" }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  Get a Flow that contains some string
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Flows are stored in the database under the name "workflow". If
                  the org you are working in contains hundreds of flows, and you
                  want to get all Flows that have an action that contains a
                  certain string, you can use the following fetch to do so.
                </Typography>
              </Container>
              <Container>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  Get the state of a Flow trigger by name
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  As we saw in the previous example, we can leverage the
                  workflow entity to get the states of all of our Flows.
                </Typography>
                <CodeBlock
                  code={`
                    <fetch mapping="logical" top="1" distinct="false" >
                      <entity name="savedquery" >
                        <attribute name="name" />
                        <filter type="and" >
                          <condition attribute="name" operator="like" value="%Account%" />
                        </filter>
                      </entity>
                    </fetch>`}
                  language={xml}
                  languageName="xml"
                />
              </Container>
              <Container>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  Get Flow trigger record by name
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  When you create a Flow or modify a Flow's trigger,
                  PowerAutomate will modify the org's callbackregistration
                  table. If you are updating a Flow trigger, PowerAutomate will
                  attempt to delete an existing callbackregistration record and
                  then create a new record. However, it's possible for the
                  Trigger to
                </Typography>
              </Container>
              <Container>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  Get who last modified a web resource
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Web Resources are stored in the database under the name
                  "webresource".
                </Typography>
              </Container>
              <Container>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, textAlign: "center" }}
                >
                  Get the name of a view by view id
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Views are stored in the database under the name "savedquery".
                </Typography>
              </Container>
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
