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
        <title>
          Computost Consulting - How does the Dataverse Trigger Work?
        </title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <Typography variant="h4" color="primary">
              How does the Dataverse Trigger Work?
            </Typography>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ marginBottom: "1em" }}
            />
            <Stack spacing={5}>
              <Container>
                <Typography variant="subtitle2" sx={{ marginBottom: "1em" }} color="primary.light">
                  By Dalton - 9/13/2023
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700 }} color="primary.light">
                  Purpose
                </Typography>
                <Typography variant="body1">
                  Low code / no code solutions continue to be the primary focus
                  of the PowerPlatform product team. The Dataverse trigger is
                  one of the most powerful and commonly used tools. It makes
                  creating new Dataverse functionality quick and easy but it
                  isn't the most user friendly at times. Users of the Dataverse
                  Trigger need to have intimate knowledge of Dataverse
                  entities, relationships, fields and much more to use the
                  trigger effectively. Even greater knowledge is needed to troubleshoot 
                  if there are issues. This blog article aims to demystify 
                  the functionality leveraged to make the Dataverse Trigger function.
                </Typography>
              </Container>
              <Container>
                <Typography variant="h5" sx={{ fontWeight: 700 }} color="primary.light">
                  How are Dataverse Flows stored in Dataverse?
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  Flows are stored in the database under the name "workflow". Any Flow, 
                  regardless of it's trigger will be stored in this entity. 
                  If the org you are working in contains hundreds of flows, and you
                  want to search for a specific Flow based on a string you know
                  it contains, you can use the following fetch to do so.
                </Typography>
                <Typography variant="body1">
                  Modern Flows store their definition in the "clientdata" field.
                  Since the definition is stored in the database we can write
                  fetch to find a specific flow based on its content.
                </Typography>
                <CodeBlock
                  code={`
                          <fetch>
                            <entity name="workflow" >
                              <attribute name="name" />
                              <!--Component State-->
                              <!--0: Published-->
                              <!--1: Unpublished-->
                              <!--2: Deleted-->
                              <!--3: Deleted Unpublished-->
                              <attribute name="componentstate" />
                              <!--State Code-->
                              <!--0: Draft-->
                              <!--1: Activated-->
                              <!--2: Suspended-->
                              <attribute name="statecode" />
                              <!--Status Code-->
                              <!--1: Draft-->
                              <!--2: Activated-->
                              <attribute name="statuscode" />
                              <attribute name="createdon" />
                              <attribute name="modifiedon" />
                              <order attribute="createdon" descending="true" />
                              <filter>
                                <!--Category-->
                                <!--0: Workflow-->
                                <!--1: Dialog-->
                                <!--2: Business Rule-->
                                <!--3: Action-->
                                <!--4: Business Process Flow-->
                                <!--5: Modern Flow-->
                                <!--6: Desktop Flow-->
                                <condition attribute="category" operator="eq" value="5" />
                                <condition attribute="clientdata" operator="like" value="%SEARCH_STRING%" />
                              </filter>
                            </entity>
                          </fetch>`}
                  language={xml}
                  languageName="xml"
                />
                <Typography variant="body1" sx={{ margin: "1em" }}>
                  To get the list of Flows that use the Dataverse Trigger, use the Dataverse Trigger 
                  Operation Id of "SubscribeWebhookTrigger"
                </Typography>
                <CodeBlock
                  code={`<condition attribute="clientdata" operator="like" value="%SubscribeWebhookTrigger%" />`}
                  language={xml}
                  languageName="xml"
                />
              </Container>
              <Container>
                <Typography variant="h5" sx={{ fontWeight: 700 }} color="primary.light">
                  Where are Dataverse Triggers Stored in Dataverse?
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  If you look through every field on the workflow entity for
                  a Modern Flow record, you will not find the details you entered 
                  in the Dataverse Trigger. That is because the details are 
                  stored in a different entity called "callbackregistration".
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  Here is a simple query to fetch all callbackregistrations. Unfortunately 
                  it's not possible to link them to their Flow. However, this view is still helpful 
                  when searching for automated functionality.
                </Typography>
                <CodeBlock
                  code={`
                          <fetch>
                            <entity name="callbackregistration" >
                              <!--Message-->
                              <!--1: Added-->
                              <!--2: Deleted-->
                              <!--3: Modified-->
                              <!--4: Added or Modified-->
                              <!--5: Added or Deleted-->
                              <!--6: Modified or Deleted-->
                              <!--7: Added or Modified or Deleted-->
                              <attribute name="message" />
                              <attribute name="entityname" />
                              <!--Scope-->
                              <!--1: User-->
                              <!--2: BusinessUnit-->
                              <!--3: ParentChildBusinessUnit-->
                              <!--4: Organization-->
                              <attribute name="scope" />
                              <attribute name="filterexpression" />
                              <attribute name="filteringattributes" />
                              <attribute name="postponeuntil" />
                              <!--Run As-->
                              <!--1: Modifying user-->
                              <!--2: Row owner-->
                              <!--3: Flow owner-->
                              <attribute name="runas" />
                              <attribute name="createdon" />
                              <attribute name="modifiedon" />
                              <order attribute="createdon" descending="true" />
                            </entity>
                          </fetch>`}
                  language={xml}
                  languageName="xml"
                />
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  The state of a Dataverse Trigger Flow does not mean much
                  if there isn't an accompanying callbackregistration record. 
                  If the callbackregistration record for that Flow gets deleted or 
                  modified somehow, that Flow will no longer function. 
                  Most often if a Dataverse Trigger Flow is on but not triggering,
                  turning it off and back on can solve the issue. Why does that work 
                  though? What is actually happening when you turn a Flow off and on
                  again?
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  When you create or modify the Dataverse Trigger of a Flow,
                  PowerAutomate will create or delete callbackregistration
                  records in the current Dataverse environment as needed. The 
                  records could be updated but PowerAutomate prefers to use 
                  create and delete.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  The callbackregistration entity has a field called "url". The
                  url is generated by PowerAutomate and is used during the creation of the 
                  callbackregistration record. Whenever the trigger event
                  occurs in Dataverse, it will Post content to that url, triggering
                  the Flow.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  If you dig into the metadata of the callbackregistration fields, 
                  you will see the url field is valid for Create and Update, but not Read. 
                  It's not possible to query for the url after the callbackregistration 
                  record is created. 
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  Unlike the HTTP Trigger, the Dataverse Trigger does not display the endpoint 
                  in the Flow designer after creation.
                </Typography>
              </Container>
              <Container>
                <Typography variant="h5" sx={{ fontWeight: 700 }} color="primary.light">
                  How does Dataverse Know When an Event Occurs?
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  Back in the old days before low code / no code, CRM devs would create plugins using C# 
                  libraries. Then Steps would be registered to execute code in the libraries. You could create 
                  a Plugin Step that would run on Update of an Account, if certain fields were modified. You could 
                  even choose the pipeline stage (Pre-Validate, Pre-operation, and Post-operation) and Execution Mode (Async / Sync).
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  The information needed to create a Plugin Step is very similar to that entered into the Dataverse Trigger. 
                  In fact, this is exactly what is happening in the backend. Dataverse creates and deletes a SdkMessageSteps based 
                  on creation and deletion of callbackregistration records. It defaults many of the values though. They will 
                  always be Post Op Synchronous.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  The information needed to create a Plugin Step is very similar to the information required by the Dataverse Trigger. 
                  In fact, this is exactly what is happening in the backend. Dataverse creates and deletes SdkMessageSteps based 
                  on creation and deletion of callbackregistration records. It defaults many of the values though. The Pipeline stage 
                  given to Dataverse Trigger SdkMessage steps uses a default value and that value is unique. It's a special 
                  internal Post-operation, which is later in the pipeline than standard Post-operation plugins. This ensures the Dataverse 
                  Trigger will always be last in the Pipeline, but since it is Synchronous it will have to wait for the entire execution 
                  pipeline to finish before triggering the Flow.
                </Typography>
              </Container>
              <Container>
                <Typography variant="h5" sx={{ fontWeight: 700 }} color="primary.light">
                  Can you change a Callbackregistration url to any url?
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  The url field on a callbackregistration record can be updated but other fields are required in the update. 
                  The scope, entityname, version, and message fields must be included when updating the url.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  The message sent from Dataverse can go to any url. To test this, you can create a new Flow using the HTTP Trigger and update 
                  the callbackregistration record to the url in the HTTP Trigger. The Dataverse event will no longer trigger the 
                  Dataverse Flow but the HTTP Flow. If you examine the message sent from Dataverse you'll notice it contains a few extra fields (ItemInternalId, 
                  SdkMessage, RunAsSystemUserId, and RowVersion). 
                </Typography>
              </Container>
              <Container>
                <Typography variant="h5" sx={{ fontWeight: 700 }} color="primary.light">
                  Can you Trigger a Dataverse Trigger from PostMan?
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  First you would need to get the url used when the callbackregistration record was created. The url isn't valid for read so 
                  you would need to get it before the record is created. Unfortunatley Dataverse does not allow you to create a Pre-validation 
                  or Pre-operation Plugin Step on the callbackregistration entity.
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  There is a PowerAutomate Management Connector Step called List Callback URL that works well for HTTP triggers. That also does 
                  not work. It returns with "The list callback url operation is blocked for triggers of type 'OpenApiConnectionWebhook'".
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  We do have the body and headers Dataverse uses to call the endpoint but not the endpoint itself. If you could somehow get it, 
                  it should technically be possible to trigger the Dataverse Flow using a tool like Postman. Microsoft has done a good job of 
                  locking down Dataverse Trigger urls. 
                </Typography>
              </Container>
              <Container>
                <Typography variant="h5" sx={{ fontWeight: 700 }} color="primary.light">
                  Conclusion
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "1em" }}>
                  We do have the body and headers Dataverse uses to call the endpoint but not the endpoint itself. If you could somehow get it, 
                  it should technically be possible to trigger the Dataverse Flow using a tool like Postman. Microsoft has done a good job of 
                  locking down Dataverse Trigger urls. 
                </Typography>
              </Container>
            </Stack>
          </Container>
        </List>
      </Box>
    </>
  );
};
