import {
  Box,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>
          Computost Consulting - Building an integrated e-commerce site
        </title>
        {/* TODO add a description for SEO */}
        <meta name="description" content="describe me" />
      </Helmet>
      <Container sx={{ marginBottom: "2em" }} component="article">
        <Typography variant="h4" color="primary">
          Building a scalable e-commerce site backed by Dataverse
        </Typography>
        <Typography variant="subtitle1" component="h5" color="primary">
          Exploring real time service integration
        </Typography>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{ marginBottom: "1em" }}
        />
        <Typography variant="subtitle2" component="address">
          Written By <span rel="author">Dalton Mackey</span> and{" "}
          <span rel="author">Joshua Hogsett</span>
        </Typography>
        <Stack spacing={3}>
          <Box component="nav">
            <Typography variant="h6" color="primary.light">
              Table of Contents
            </Typography>
            <List component="ol">
              <ListItem>
                <Link href="#introduction">Part 1 - Introduction</Link>
              </ListItem>
              <ListItem>
                <Link href="#requirements">Requirements</Link>
              </ListItem>
              <ListItem>
                <Link href="#goals">Our Goals</Link>
              </ListItem>
              <ListItem>
                <Link href="#design-considerations">Design Considerations</Link>
              </ListItem>
              <ListItem>
                <Link href="#first-and-third-party-solution-options">
                  First and Third Party Solution Options
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#initial-design">Initial Design Decisions</Link>
              </ListItem>
            </List>
          </Box>
          <Box component="section" id="introduction">
            <Typography variant="h6" color="primary.light">
              Part 1 - Introduction
            </Typography>
            <Typography variant="body1">
              We recently worked with a client that wanted to create a new
              e-commerce site that integrates seamlessly with their CRM and ERP
              systems. This multi-part blog series will cover several of the
              complexities and solutions involved with data integration, our
              approach to setting up a clean developer experience, and how we
              used DevOps to glue everything together.
            </Typography>
          </Box>
          <Box component="section" id="requirements">
            <Typography variant="h6" color="primary.light">
              Requirements
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              This project required us to develop a fully functional e-commerce
              site using Dataverse and Business Central as data sources. Below
              are the high level core features and desired website
              functionality.
            </Typography>
            <Typography variant="body1">
              Requirements for Core Functionality
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 3 }}>
              <ListItem sx={{ display: "list-item" }}>
                Read data from Dataverse and Business Central
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Write data to Dataverse
              </ListItem>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                Restful API for website related data and actions
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    Public access is not required now but is planned for the
                    future
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                Modification of Product Hierarchy
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    The Product hierarchy in Dataverse is not the desired
                    hierarchy for the site
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Custom pricing model based on user
              </ListItem>
            </List>
            <Typography variant="body1">
              Requirements for Website Functionality
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 3 }}>
              <ListItem sx={{ display: "list-item" }}>
                Feature rich product search and filtering for anonymous and
                logged in users
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Real time product inventory values shown on the site
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Full cart and ordering functionality for logged in users
              </ListItem>
            </List>
          </Box>
          <Box component="section" id="goals">
            <Typography variant="h6" color="primary.light">
              Our Goals
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Along with the business requirements, we, as the designers and
              developers, had our own requirements for this project.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              One of our primary goals is to set up a positive developer
              experience. We wanted the ability to develop, run, and test the
              entire application locally including emulating production
              infrastructure. Anyone familiar with Dataverse or Business Central
              will know testing and local development is near impossible with
              these technologies. Running the application locally meant we
              couldn’t use any low code / no code tools, which we were all in
              agreement that was for the best.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We wanted to use the infrastructure-as-code approach. The goal was
              to have the ability to provision the application in a new
              environment with minimal manual intervention needed.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Another goal was to make the application easy to support and
              quickly add new functionality with low risk of regression. We knew
              the company wouldn’t have a full dev team on hand to keep this
              application up and running. It needed to be resilient and provide
              a method to quickly diagnose and resolve issues.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We also wanted a fast and reliable method to move changes between
              environments. These changes could be infrastructure or business
              logic changes.
            </Typography>
            <Typography variant="body1">
              To summarize, these were our teams goals and preferences:
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 3 }}>
              <ListItem sx={{ display: "list-item" }}>
                The project can run and be tested locally.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                The project can be deployed in its entirety to the cloud with
                minimal manual setup.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                The project can be maintained by a very small team of developers
                after go-live.
              </ListItem>
            </List>
          </Box>
          <Box component="section" id="design-considerations">
            <Typography variant="h6" color="primary.light">
              Design Considerations
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              The largest concern we had was around Dataverse’s api limit. The
              public internet is now filled with AI web crawlers that will send
              thousands of requests per second to index every page of a site. We
              would have to be very careful using Dataverse apis directly from
              the site as to not use up the 6000 requests in the 5 minute
              sliding window. Even if we could block all non-user traffic, it
              would still be possible for real user traffic to use up the api
              limit.
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 3 }}>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                Dataverse and Business Central API limitations
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item", pb: 0 }}>
                    If the site is directly querying Dataverse or Business
                    Central and traffic increases, it’s possible to hit the
                    environments’ API limits. If the limit is hit, the website's
                    application user accessing the api would receive 429 errors
                    for a short time, rendering the site inoperable.
                    <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                      <ListItem sx={{ display: "list-item" }}>
                        <Link
                          href="https://learn.microsoft.com/en-us/power-apps/developer/data-platform/api-limits"
                          target="_blank"
                          rel="noopener"
                        >
                          Dataverse - Service protection API limits
                        </Link>
                      </ListItem>
                    </List>
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                How to emulate a Dataverse or Business Central environment?
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    This is one component we knew was not something we could run
                    in a Docker container. We needed a way to emulate record
                    create, update and delete events in the environment.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                Use of Dataverse / Power Platform Functionality
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    We could leverage Dataverse to handle creating orders, cart
                    items, and any other functionality that required modifying
                    Dataverse data, but that would mean we need to somehow get
                    that functionality into source control and include it in
                    pipelines with everything else. That is not easy. That
                    functionality would also need to be supported by the client
                    after go-live.
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Box>
          <Box component="section" id="first-and-third-party-solution-options">
            <Typography variant="h6" color="primary.light">
              First and Third Party Solution Options
            </Typography>
            <Typography variant="body1">
              The client was already within the Microsoft ecosystem. We reviewed
              the existing tools that could be used for different aspects of the
              system. Below are a few of the options we reviewed:
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 3 }}>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                FrontEnd:
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    PowerPages - PowerPlatform has a way to quickly spin up a
                    publicly facing website directly connected to a Dataverse
                    environment. However, the API limits mentioned above apply
                    to the site. Microsoft’s suggestion for when portal api
                    limits are hit is to halt all requests and show a message
                    saying the server is busy. This is not an acceptable
                    solution for us and makes PowerPages not a viable option for
                    the front end.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                Writing to Dataverse:
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    Power Automate - Flows can be slow to start and run. They
                    are costly in time and effort to maintain, hard to
                    troubleshoot and debug, and cannot run or test locally.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Plugins / Workflows - Interactions with Dataverse from
                    Plugins and Workflows don’t count towards api limits which
                    solves one issue, but Plugins and Workflows would require us
                    to interact with the Dataverse environment directly. If
                    changes are needed, a solution import would be required
                    which could have a performance impact on the Dataverse
                    environment.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                Read / Write / Transform Data:
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    Azure Data Factory / Azure Synapse - At best, Synapse has a
                    delay of 15 minutes, which makes it immediately a no-go for
                    a requirement to access data in real time. Also, Azure Data
                    Factory with Azure Synapse is very costly compared to the
                    benefit it provides.
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Kingswaysoft - The client already had a Kingswaysoft license
                    and server running recurring integrations. We were familiar
                    with developing integration packages using the tool.
                    However, if the logic within the ETL process becomes too
                    complex, it would become something difficult to modify and
                    maintain.
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Box>
          <Box component="section" id="initial-design">
            <Typography variant="h6" color="primary.light">
              Initial Design Decisions
            </Typography>
            <Typography variant="body1">
              After reviewing the requirements from the client, our teams goals
              and preferences, issues we believe we’ll face and what first and
              third party tools are available, we made the following decisions:
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 3 }}>
              <ListItem sx={{ display: "list-item", pb: 0 }}>
                The site will need a dedicated database to get around api
                limits. We’ll still use the Dataverse API for Create, Update and
                Delete requests but the number of those should be well within
                the API limits.
                <List sx={{ listStyleType: "disc", pl: 3, pb: 0 }}>
                  <ListItem sx={{ display: "list-item" }}>
                    If Create, Update and Delete requests start to bump up
                    against API limits, we need a way to control it. We will
                    need to use messages and build in a message limiter so we
                    are confident we can stay under the api limit if traffic
                    spikes.
                  </ListItem>
                </List>
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                An e-commerce site to create orders and process payment needs to
                be reliable and resilient. We don’t want duplicate or missing
                orders or duplicate or uncollected payments. We will also use
                messages to ensure a single order is created and a single
                payment is collected.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                We will want multiple app services loosely connected using
                messages. Our primary API should be isolated from the
                application responsible for pulling and pushing data to and from
                Dataverse and Business Central.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Based on the initial requirements, data transformation during
                integration is limited. Kingswaysoft should be sufficient to
                seed a database and perform true up jobs if needed.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                We should only need a basic Dataverse Service Endpoint and
                Plugins SDK steps. No other Dataverse or PowerPlatform
                components are needed. We should keep our footprint in this
                space as light as possible.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                If the entire application is hosted within Azure App Services,
                we could use a virtual network for security. Dataverse and
                Business Central exceptions would be needed. A VPN can be used
                to connect directly if needed.
              </ListItem>
            </List>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
