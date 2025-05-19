import { ReactNode, useEffect } from "react";
import { Container, Stack, SxProps, Theme } from "@mui/material";

const PageContainer = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <Container
      maxWidth="lg"
      component={Stack}
      sx={{
        flexGrow: 1,
        p: "0 !important",
        ...sx,
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
