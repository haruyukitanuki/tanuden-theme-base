import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PACKAGE_NAME } from "./constants";

export type GlobalStore = {
  roomId: string | undefined;
  setRoomId: (roomId: string | undefined) => void;
};

export const useGlobalStore = create<GlobalStore>()(
  persist(
    (set) => ({
      roomId: undefined,
      setRoomId: (roomId) => {
        set({ roomId });
      },
    }),
    {
      name: `${PACKAGE_NAME}_store`,
      partialize: (state) => ({
        roomId: state.roomId,
      }),
    }
  )
);
