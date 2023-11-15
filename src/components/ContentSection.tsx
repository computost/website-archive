import { Container, Stack, Typography } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

const ContentSection: FunctionComponent<{
  title?: string;
  content?: string;
  children?: ReactNode;
}> = ({ title, content, children }) => {
  return (
    <Container sx={{mb: 2}}>
      <Stack direction={"column"} spacing={1}>
        {title && (
          <Typography
            variant="h5"
            sx={{ fontWeight: 700 }}
            color="primary.light"
          >
            {title}
          </Typography>
        )}
        {content && <Typography variant="body1">{content}</Typography>}
        {children}
      </Stack>
    </Container>
  );
};
export default ContentSection;
