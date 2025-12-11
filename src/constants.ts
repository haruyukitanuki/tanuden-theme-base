// このファイルは、定数を定義するためのファイルです。
// ここで定義した定数は、アプリケーション全体で利用できます。

// 下の値は、触らないでください。
const currentURL = new URL(window.location.href);

export const ENGINE_SOCKET_HOST =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_APP_ENGINE_SOCKET_HOST ?? "http://localhost:58680"
    : `${currentURL.protocol}//${currentURL.host}`;
export const PACKAGE_NAME = __THEME_NAME__;
