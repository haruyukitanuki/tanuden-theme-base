import { io } from "socket.io-client";
import { ENGINE_SOCKET_HOST } from "../constants";

export const SocketClient = io(ENGINE_SOCKET_HOST, {
  autoConnect: false,
  extraHeaders: {
    "X-Device-Type": "display",
  },
});

export class EngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ARISUError";
  }
}

SocketClient.prependAny((_event, data) => {
  if (data._error) {
    throw new EngineError(data.because);
  }
});
