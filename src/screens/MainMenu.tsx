import { useKumohaData } from "@tanuden/kumoha-react";
import PageContainer from "../components/PageContainer";
import { Box, Stack, Typography } from "@mui/material";

export const MainMenu = () => {
  const kumohaData = useKumohaData();
  return (
    <PageContainer>
      <Stack my={2} mx={6}>
        <Typography variant="h2" align="center">
          @tanuden/theme-base
        </Typography>

        <Box
          component="pre"
          p={2}
          sx={{
            backgroundColor: "grey.900",
          }}
        >
          {JSON.stringify(kumohaData, undefined, 2)}
        </Box>
      </Stack>
    </PageContainer>
  );
};
