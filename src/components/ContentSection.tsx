import { Container, Stack, SxProps, Theme, Typography } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

const ContentSection: FunctionComponent<{
  containerSx?: SxProps<Theme>;
  title?: string;
  titleSx?: SxProps<Theme>;
  subTitle?: string;
  content?: string;
  contentSx?: SxProps<Theme>;
  children?: ReactNode;
}> = ({
  containerSx,
  title,
  titleSx,
  subTitle,
  content,
  contentSx,
  children,
}) => {
  return (
    <Container sx={containerSx ?? {mb: 2}}>
      <Stack direction={"column"} spacing={1}>
        {title && (
          <Typography
            variant="h5"
            sx={titleSx ?? {fontWeight: 700 }}
            color="primary.light"
          >
            {title}
          </Typography>
        )}
        {subTitle && (
          <Typography
            variant="h6"
            sx={{ fontWeight: 500 }}
            color="primary.light"
          >
            {subTitle}
          </Typography>
        )}
        {content && (
          <Typography variant="body1" sx={contentSx}>
            {content}
          </Typography>
        )}
        {children}
      </Stack>
    </Container>
  );
};
export default ContentSection;
