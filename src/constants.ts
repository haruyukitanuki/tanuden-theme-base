// このファイルは、定数を定義するためのファイルです。
// ここで定義した定数は、アプリケーション全体で利用できます。

// 下の値は、触らないでください。
export const ENGINE_MODE: "local" | "arisu" = "local";
export const ENGINE_SOCKET_HOST =
  ENGINE_MODE === "local"
    ? `http://${window.location.hostname}:58680`
    : `http://${import.meta.env.VITE_APP_ENGINE_SOCKET_HOST}:58680`;
