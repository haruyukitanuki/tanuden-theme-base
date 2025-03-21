import { useGetKumohaData } from "@tanuden/kumoha-react";

export const Main = () => {
  const kumohaData = useGetKumohaData();
  const allData = {
    gameData: kumohaData.gameData,
    gameState: kumohaData.gameState,
    pluginData: kumohaData.pluginData,
  };
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
          {!kumohaData.connected
            ? "データ期待中... ゲームとタヌ電コンソールを起動して、ゲームにダイヤを選択してください。"
            : JSON.stringify(allData, null, 2)}
        </pre>
      </section>
      <p style={{ textAlign: "center", color: "#75869c", fontSize: "1.2rem" }}>
        <b>狸河電鉄</b>｜タヌ電TIMS
      </p>
    </>
  );
};
