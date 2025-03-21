import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { KumohaDataProvider } from "@tanuden/kumoha-react";
import { ENGINE_SOCKET_HOST } from "./constants";

export const App = () => {
  return (
    <KumohaDataProvider kumohaUri={ENGINE_SOCKET_HOST}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </KumohaDataProvider>
  );
};

export default App;
