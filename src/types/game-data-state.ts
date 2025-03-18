import { PluginState } from "./console/plugin-meta";
import { GameState } from "./opentetsu-additions/game-state";
import { OpenTetsuData } from "./opentetsu/opentetsu-data";

export interface GameDataState {
  gameData: OpenTetsuData;
  pluginData: Record<string, PluginState>;
  gameState: GameState;
}
