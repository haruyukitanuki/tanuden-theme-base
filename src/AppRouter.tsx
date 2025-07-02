import { Route, Routes } from "react-router-dom";
import { MainMenu } from "./screens/MainMenu";
import {
  useInitializeKumoha,
  useKumohaClientMeta,
  useKumohaData,
} from "@tanuden/kumoha-react";
import { ENGINE_SOCKET_HOST } from "./constants";
import { useState, useMemo } from "react";
import { Boot } from "./screens/Boot";
import MainLayout from "./layouts/MainLayout";

export const AppRouter = () => {
  const kumoha = useInitializeKumoha(ENGINE_SOCKET_HOST, {
    themeName: __THEME_NAME__,
  });
  const [bootScreenInitialised, setBootScreenInitialized] = useState(false);
  const { state } = useKumohaClientMeta();
  const { gameData } = useKumohaData();

  const showBoot = useMemo(() => {
    // For initial || 初期
    if (state === "disconnected" && !bootScreenInitialised) return true;

    // For invalid room code || 無効なルームコード
    if (
      (state !== "ok" && state !== "disconnected" && !bootScreenInitialised) ||
      state === "auth-error"
    )
      return true;

    // Ensure there is valid data loaded before showing display (prevents crash) || データがロードされるまで表示しない
    if (gameData.currentTime === undefined) return true;

    return false;
  }, [bootScreenInitialised, gameData.currentTime, state]);

  if (showBoot) {
    return (
      <Routes>
        <Route
          path="*"
          element={
            <Boot kumoha={kumoha} setInitialised={setBootScreenInitialized} />
          }
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* メインメニュー */}
        <Route path="/" element={<MainMenu />} />

        {/* 例：ルーティング */}
        {/* <Route path="/tims" element={<TIMSMain />} />
        <Route path="/gps-navi" element={<GPSNaviMain />} />
        <Route path="/monitor" element={<MonitorMain />} /> */}
      </Route>
    </Routes>
  );
};
