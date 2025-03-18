import { useEffect, useState } from "react";
import { SocketClient } from "../utils/socket-client";
import { ArisuAPI } from "../api/arisu.api";

export const useArisu = (trafficRoomId?: string) => {
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Get query params
  const queryParams = new URLSearchParams(window.location.search);
  const roomCode = queryParams.get("roomCode");

  const [humanReadableRoomCode] = useState<string | null>(roomCode);

  useEffect(() => {
    // Socket functions
    SocketClient.connect();

    const onConnect = async () => {
      console.log("Socket connected");
      setSocketConnected(true);

      try {
        gameDataState = await ArisuAPI.mutate.login(humanReadableRoomCode);
      } catch (error) {
        if (error instanceof ARISUError) {
          console.error("ARISU error occurred:", error.message);
          const arisuError = error as ARISUError;
          setError(arisuError.message);
          return;
        }
        console.error(error);

        return;
      }

      setTrafficRoomMetadata(roomMetadata);
    };

    const onDisconnect = () => {
      setSocketConnected(false);
    };

    const onReconnect = async () => {
      await onConnect();
    };

    const onTrafficData = (data: {
      data: TrafficData;
      roomMetadata: TrafficRoomMetadata;
    }) => {
      console.debug("Socket raw data received", data);
      setTrafficData(data.data);
      setTrafficRoomMetadata(data.roomMetadata);
    };

    ARISUSocketClient.on("connect", onConnect);
    ARISUSocketClient.on("disconnect", onDisconnect);
    ARISUSocketClient.on("reconnect", onReconnect);
    ARISUSocketClient.on("traffic:data_in_room", onTrafficData);

    return () => {
      // Off all listeners
      ARISUSocketClient.off("connect", onConnect);
      ARISUSocketClient.off("disconnect", onConnect);
      ARISUSocketClient.off("reconnect", onReconnect);
      ARISUSocketClient.off("traffic:data_in_room", onTrafficData);

      // Disconnect socket
      ARISUSocketClient.disconnect();
    };
  }, [trafficRoomId]);

  return {
    connected: socketConnected,
    trafficData,
    trafficRoomMetadata,
    error,
  };
};
