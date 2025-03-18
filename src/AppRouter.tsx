import { Route, Routes } from "react-router-dom";
import { TIMSMain } from "./screens/tims/TIMSMain";
import { GPSNaviMain } from "./screens/gps-navi/GPSNaviMain";
import { MonitorMain } from "./screens/monitor/MonitorMain";
import { Main } from "./screens/Main";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="/tims" element={<TIMSMain />} />
        <Route path="/gps-navi" element={<GPSNaviMain />} />
        <Route path="/monitor" element={<MonitorMain />} />

        {/* 常用操作するとき、このルート('/')は使えませんので、消してもいいです。 */}
        {/* During normal use, the '/' route is not used. You may delete it. */}
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
};
