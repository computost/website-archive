import { Divider, Typography } from "@mui/material";
import { FunctionComponent } from "react";

const BlogPostItem: FunctionComponent<{
  title: string;
}> = ({ title }) => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <Divider orientation="horizontal" flexItem sx={{ marginBottom: "1em" }} />
    </>
  );
};
export default BlogPostItem;
