import { useContext } from "react";
import { GameDataContext } from "../contexts";

export const useGetGameDataState = () => {
  const gameDataState = useContext(GameDataContext);
  return gameDataState?.gameDataState;
};
