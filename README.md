# タヌ電開発用ベーステーマ（tanuden-theme-base）
[タヌ電TIMS](https://myuntendai.tanuden.tanu.ch)で使用する[クモハ](https://github.com/haruyukitanuki/kumoha)テーマの開発を始めるためのボイラープレートテンプレートです。

クモハテーマエンジと連携・接続するためのスターターコードが含まれています。

Reactプロジェクトとして構築されているため、ある程度のWeb開発の知識が必要です。

➡️ このテンプレートのリポジトリ： https://github.com/haruyukitanuki/tanuden-theme-base

## ℹ️ クモハテーマエンジンについて
* [クモハ](https://github.com/haruyukitanuki/kumoha)
* [クモハ for React](https://github.com/haruyukitanuki/kumoha-react)

## ⭐ はじめに
このテンプレートには、[Material UI](https://mui.com) (MUI)があらかじめインストールされています。必要に応じて削除することも、そのまま参考として使うことも可能です。

MUIを削除する場合は、MUI固有のコードをリファクタリングする必要があります。
もし削除を進める場合は、[新しく空のプロジェクトを作成](https://ja.vite.dev/guide/#%E6%9C%80%E5%88%9D%E3%81%AE-vite-%E3%83%95%E3%82%9A%E3%83%AD%E3%82%B7%E3%82%99%E3%82%A7%E3%82%AF%E3%83%88%E3%82%92%E7%94%9F%E6%88%90%E3%81%99%E3%82%8B)し、[クモハの実装を一からやり直す](https://github.com/haruyukitanuki/kumoha-react/blob/main/README-ja.md#%EF%B8%8F-%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)方法をおすすめします。その方が作業がもっと簡単です。

## 開発環境のセットアップ
#### 1. 依存関係をインストール

```bash
npm install -D
```

#### 2. 起動
```bash
npm run dev
```

#### 3. ブラウザでウェブアプリにアクセス
`http://localhost:5800/`

## Linting

```bash
npm run lint
```

## ビルド・配布
テーマの開発が完了したら、ビルドしてパッケージ化し、他の人に配布することができます。
以下のコマンドを実行すると、プロジェクトのルートにある`dist`フォルダ内に、テーマ名の`.zip`ファイルが作成されます。

```bash
npm run build
```

コマンドが作成された`.zip`ファイルをユーザーに配布してください。

### コンソールにテーマインストール方法
> [!NOTE] 
> 下の説明はユーザー向けです。
> 以下の文は、あなたが作業しやすいように書かれています。
> 
> 自分の作成したテーマを配布する際は、ユーザーがインストール方法を理解できるように、同様の説明を含めることをおすすめします。
> 
> 必要に応じて、内容は自由に書き換えてください。

```md
1. テーマのZIPファイルをダウンロードしてください。
2. コンソールで「モニターテーマ」ページを開き、「テーマフォルダを開く」 をクリックします。
3. ダウンロードしたZIPを解凍し、そのフォルダを先ほど開いたディレクトリに置きます。
4. 「再読み込み」をクリックすると、テーマが画面に表示されます。表示されれば、正しくインストールされています。
5. 同じ画面でテーマをクリックして、右上に「有効にする」ボタンを押してください。
6. 完了！

テーマが表示されない場合は、ZIPを解凍した際にテーマフォルダがサブディレクトリに入っていないか確認してください。解凍後すぐに「index.html」などのファイルが見える状態になっている必要があります。
```

## ❓ 困ったときは
もし何か分からないことがあれば、気軽に[Discordサーバー](https://go.tanu.ch/tanuden-discord)に参加してください。

## 💾 タヌ電OSS
このプロジェクトはApache License 2.0のもとでライセンスされています。
詳細についてはLICENSEファイルをご覧ください。

> [!IMPORTANT] 
> このリポジトリには、狸河電鉄が所有するプロジェクト、製品、またはサービスの商標やロゴが含まれている場合があります。無断使用は禁止されています。

---

[タヌ電 Discordサーバー](https://go.tanu.ch/tanuden-discord) | [Twitter](https://go.tanu.ch/twitter) | [YouTube](https://go.tanu.ch/tanutube)

**狸河電鉄作品｜Copyright &copy; 2025 Haruyuki Tanukiji.**