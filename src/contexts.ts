import { createContext } from "react";
import { GameDataState } from "./types/game-data-state";

export const GameDataContext = createContext<{
  gameDataState?: GameDataState;
  setGameDataState: (gameDataState: GameDataState) => void;
} | null>(null);
