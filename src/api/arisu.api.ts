import { SocketClient } from "../utils/socket-client";

export const ArisuAPI = {
  mutate: {
    login: async (code: string) => {
      const response = (await SocketClient.emitWithAck("auth:login", {
        trafficRoomId: code,
      })) as {
        deviceId: string;
        roomId: string;
        humanReadableRoomId: string;
        trafficRoomId: string;
      };

      return response;
    },
  },
};
