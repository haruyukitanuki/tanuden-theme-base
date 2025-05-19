import { useMemo, useState } from "react";
import { KumohaState } from "@tanuden/kumoha";
import { Stack, Typography } from "@mui/material";
import PageContainer from "./PageContainer";

export const BootSplash = ({ state }: { state: KumohaState }) => {
  const [isErrored, setIsErrored] = useState(false);
  const stateHumanReadable = useMemo(() => {
    switch (state) {
      case "disconnected":
        return "接続中";
      case "not-logged-in":
        return "ARISU交渉進行中";
      case "auth-error":
        setIsErrored(true);
        return "ARISU交渉失敗（再ログイン必要）";
      case "ok":
        return "データ期待中";
      case "unknown-error":
        setIsErrored(true);
        return "ARISU交渉失敗（不明エラー）";

      default:
        setIsErrored(true);
        return "不明エラ発生";
    }
  }, [state]);

  return (
    <PageContainer>
      <Stack flexGrow={1} alignItems="center" justifyContent="center">
        <Stack spacing={2}>
          <Stack
            spacing={1.5}
            sx={{
              visibility: !isErrored ? "visible" : "hidden",
            }}
          >
            <Typography color="grey.400" fontSize="2rem">
              たったいま準備中です。
            </Typography>
            <Typography color="grey.400" fontSize="2rem">
              しばらくお待ちください。
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bottom="5%"
        left={0}
        right={0}
      >
        <Typography
          color={isErrored ? "error" : "common.white"}
          fontSize="1.8rem"
        >
          {stateHumanReadable}
        </Typography>
      </Stack>
    </PageContainer>
  );
};
