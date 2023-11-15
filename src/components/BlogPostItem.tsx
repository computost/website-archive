import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FunctionComponent } from "react";

const BlogPostItem: FunctionComponent<{
  title: string;
  imagePath: string;
  description: string;
  linkRef: string;
  buttonText: string;
}> = ({ title, imagePath, description, linkRef, buttonText }) => {
  return (
    <Card sx={{ width: 345, height: 280 }}>
      <CardMedia sx={{ height: 140 }} image={imagePath} title={title}>
      </CardMedia>
      <CardContent sx={{ height: 54 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ height: 40 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={linkRef}>
          {buttonText}
        </Button>
      </CardActions>
    </Card>
  );
};
export default BlogPostItem;
