import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";

export const Page = () => {
  const blogPosts = [
    {
      name: "Helpful Dataverse Queries",
      description: "A collection of helpful Dataverse Fetch XML queries",
      ref: "/blogs/helpful-dataverse-queries",
    },
    {
      name: "Blog Post 2",
      description: "This is the description for blog post 2",
      ref: "/blogs/blogPost2",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Computost Consulting - Blog</title>
      </Helmet>
      <Box>
        <List>
          <Container sx={{ marginBottom: "2em" }}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Blog Articles
            </Typography>
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ marginBottom: "1em" }}
            />
            <Grid
              container
              spacing={5}
              rowSpacing={5}
              direction={"row"}
              wrap={"wrap"}
              justifyContent="center"
            >
              {blogPosts.map((item, index) => (
                <Grid item direction={"row"} key={index}>
                  <Card sx={{ width: 345, height: 300 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="/src/assets/computost.svg"
                      title={item.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{height: 40}}>
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={item.ref}>
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </List>
      </Box>
    </>
  );
};
