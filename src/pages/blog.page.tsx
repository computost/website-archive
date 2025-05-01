import { Box, Container, Grid, List } from "@mui/material";
import { Helmet } from "react-helmet-async";
import BlogPostItem from "../components/BlogPostItem";
import PageHeader from "../components/PageHeader";
import blogPosts from "../blogs.json";
const typedBlogPosts: { "name": string, "description": string, "ref": string }[] = blogPosts;

export const Page = () => {
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Blog</title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <PageHeader title={"Blog Articles"} />
            <Grid
              container
              spacing={5}
              rowSpacing={5}
              direction={"row"}
              wrap={"wrap"}
              justifyContent="center"
            >
              {typedBlogPosts.map((item, index) => (
                <Grid item key={index}>
                  <BlogPostItem
                    title={item.name}
                    imagePath={"../src/assets/computost.svg"}
                    description={item.description}
                    linkRef={item.ref}
                    buttonText={"Learn More"}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </List>
      </Box>
    </>
  );
};
