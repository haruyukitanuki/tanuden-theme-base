import { useState } from "react";
import { GameDataState } from "../types/game-data-state";
import { GameDataContext } from "../contexts";

export const GameDataContextProvider = () => {
  const [gameDataState, setGameDataState] = useState<GameDataState>();

  return (
    <GameDataContext.Provider
      value={{
        gameDataState,
        setGameDataState,
      }}
    />
  );
};
