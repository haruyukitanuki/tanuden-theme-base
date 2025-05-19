import { useKumoha, useKumohaClientMeta } from "@tanuden/kumoha-react";
import { useEffect, useMemo, useState } from "react";
import { KumohaError } from "@tanuden/kumoha";
import { useGlobalStore } from "../stores";
import { RoomCodeMenu } from "../components/RoomCodeMenu";
import { BootSplash } from "../components/BootSplash";

export const Boot = ({
  kumoha,
  setInitialised,
}: {
  kumoha: ReturnType<typeof useKumoha>;
  setInitialised: (initialised: boolean) => void;
}) => {
  const [promptCode, setPromptCode] = useState(false);
  const { state } = useKumohaClientMeta();
  const { setRoomId, roomId: persistedRoomId } = useGlobalStore();

  const humanReadableRoomId = useMemo(() => {
    // read query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const roomIdParam = urlParams.get("room");
    const roomId = roomIdParam && roomIdParam !== "" ? roomIdParam : undefined;

    if (!roomId && persistedRoomId) {
      return persistedRoomId;
    }

    setRoomId(roomId);

    return roomId;
  }, [persistedRoomId, setRoomId]);

  useEffect(() => {
    if (state === "not-logged-in") {
      kumoha?.login(humanReadableRoomId).catch((error: unknown) => {
        if (!(error instanceof KumohaError)) return;
        if (error.name === "AUTHENTICATION_ERROR") {
          return setPromptCode(true);
        }
      });
    }
    if (state === "auth-error") {
      setPromptCode(true);
    }

    if (state === "ok") {
      setInitialised(true);
    }
  }, [state, kumoha, humanReadableRoomId, setInitialised]);

  if (promptCode) {
    return <RoomCodeMenu kumoha={kumoha} />;
  }

  return <BootSplash state={state} />;
};
