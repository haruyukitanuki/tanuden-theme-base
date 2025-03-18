import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { GameDataContext } from "./contexts";

export const App = () => {
  return (
    <GameDataContext.Provider value={null}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </GameDataContext.Provider>
  );
};

export default App;
