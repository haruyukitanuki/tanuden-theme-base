import {
  useKumohaData,
  useKumohaROM,
  useKumohaThemeUserPrefs,
} from "@tanuden/kumoha-react";
import PageContainer from "../components/PageContainer";
import { Box, Stack, Typography } from "@mui/material";

export const MainMenu = () => {
  const kumohaData = useKumohaData();
  const kumohaUserPrefs = useKumohaThemeUserPrefs();
  const kumohaROM = useKumohaROM();

  return (
    <PageContainer>
      <Stack my={2} mx={6} flexGrow={1} gap={2}>
        <Box>
          <Typography variant="h1">@tanuden/theme-base</Typography>
          <Typography></Typography>
        </Box>

        <Stack gap={1}>
          <Stack>
            <Typography>ゲームデータ・ゲーム状態・プラグイン</Typography>
            <Box
              height="300px"
              overflow={"auto"}
              component="pre"
              p={2}
              sx={{
                backgroundColor: "grey.900",
              }}
            >
              {JSON.stringify(kumohaData, undefined, 2)}
            </Box>
          </Stack>
          <Stack>
            <Typography>ROM</Typography>
            <Box
              height="300px"
              overflow={"auto"}
              component="pre"
              p={2}
              sx={{
                backgroundColor: "grey.900",
              }}
            >
              {JSON.stringify(kumohaROM, undefined, 2)}
            </Box>
          </Stack>
          <Stack>
            <Typography>テーマ設定</Typography>
            <Box
              height="300px"
              overflow={"auto"}
              component="pre"
              p={2}
              sx={{
                backgroundColor: "grey.900",
              }}
            >
              {JSON.stringify(kumohaUserPrefs, undefined, 2)}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </PageContainer>
  );
};
