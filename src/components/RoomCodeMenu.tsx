import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useGlobalStore } from "../stores";
import { FormEvent, useRef, useState } from "react";
import { useKumoha } from "@tanuden/kumoha-react";
import { useNavigate } from "react-router-dom";
import { KumohaError } from "@tanuden/kumoha";
import MainLayout from "../layouts/MainLayout";

export const RoomCodeMenu = ({
  kumoha,
}: {
  kumoha: ReturnType<typeof useKumoha>;
}) => {
  const navigate = useNavigate();
  const { setRoomId } = useGlobalStore();

  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!inputRef.current) return;
    if (!kumoha) return navigate("/");
    setError(null);
    const code = inputRef.current.value;

    if (code.length !== 6) {
      setError("コードは6文字で入力してください");
      return;
    }

    kumoha
      .login(code)
      .then(() => {
        setRoomId(code);
        navigate("/");
      })
      .catch((error) => {
        if (!(error instanceof KumohaError)) {
          setError("不明なエラーが発生しました");
          throw error;
        }

        if (error.name === "AUTHENTICATION_ERROR") {
          setError("接続コードが無効です");
          return;
        }

        setError(error.message);
      });
  };

  return (
    <MainLayout>
      <Stack flexGrow={1} alignItems="center" justifyContent="center">
        <Stack width="100%" maxWidth="sm" p={2} spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h2" align="center">
              接続設定再入力が必要です
            </Typography>
            <Typography variant="subtitle1" align="center">
              コンソールから接続コードを入力してください
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            component="form"
            onSubmit={handleSubmit}
          >
            <Box flexGrow={1}>
              <TextField
                // label='ログイン入力'
                placeholder="••••••"
                type="text"
                fullWidth
                error={Boolean(error)}
                // value={formik.values.code}
                // onBlur={formik.handleBlur}
                onChange={() => setError(null)}
                slotProps={{
                  inputLabel: {
                    required: false,
                  },
                  htmlInput: {
                    ref: inputRef,
                    maxLength: 6,
                    sx: {
                      textAlign: "center",
                      letterSpacing: "1.25em",
                      fontFamily: "JetBrains Mono",
                      fontSize: "1.5em",
                    },
                  },
                }}
                sx={{
                  m: 0,
                  textAlign: "center",
                }}
              />
            </Box>
            <Box width="20%">
              <Button
                sx={{
                  width: "100%",
                }}
                onClick={() => {
                  handleSubmit();
                }}
              >
                設定
              </Button>
            </Box>
          </Stack>
          <Typography color="error">{error || <>&nbsp;</>}</Typography>
          <Typography align="center" variant="subtitle1">
            または、コンソールで画面を起動してください
          </Typography>
        </Stack>
      </Stack>
    </MainLayout>
  );
};
