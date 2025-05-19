import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { BASE_URL } from "./constants";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { getTheme } from "./theme";
import { useMemo } from "react";

export const App = () => {
  // MUIのテーマを読み込む
  const theme = useMemo(() => createTheme(getTheme()), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter basename={BASE_URL}>
          <AppRouter />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
