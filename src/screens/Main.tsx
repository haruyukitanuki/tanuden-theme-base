import { useGetGameDataState } from "../hooks/get-game-data-state";

export const Main = () => {
  const gameDataState = useGetGameDataState();
  return (
    <>
      <section className="main-box">
        <h1>tanuden-theme-base</h1>
        <p>タヌ電TIMSカスタムテーマ開発用スターターキット</p>
        <br />
        <p>
          <b>ゲームデータ：</b>
        </p>
        <pre
          style={{
            fontFamily: "monospace",
            backgroundColor: "#000",
            padding: "1em",
            color: "white",
            overflowX: "auto",
          }}
        >
          {!gameDataState
            ? "データ期待中..."
            : JSON.stringify(gameDataState, null, 2)}
        </pre>
      </section>
      <p style={{ textAlign: "center", color: "#75869c", fontSize: "1.2rem" }}>
        <b>狸河電鉄</b>｜タヌ電TIMS
      </p>
    </>
  );
};
