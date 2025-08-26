# 概要

このアプリケーションは課題で作成したログインページのテストになります。
HTML,CSSおよびJavaScript,PostgreSQLを使用しています。

# 実行手順

①本リポジトリのGithubからクローンを行い、展開してください。

②コマンドプロンプト等からクローンしたリポジトリに移動し、ルートディレクトリで以下のいずれかのコードを実行してください。

`npm install`
`yarn install`

③PostgreSQLにて新しいデータベースを作成し、以下のクエリを実行し、テーブルを作成してください。その後、作成したテーブルに任意にusernameとpasswordを追加してください。
```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);
```

④『②』を実行したディレクトリと同じディレクトリ内で以下のコードを実行してください。

`npm start`

⑤ブラウザにて、ログに表示されたサーバーURLにアクセスしてください。

⑥存在しないユーザー名とパスワードを入力し、『ユーザーIDまたはパスワードが正しくありません』と表示されたら動作確認は成功です。
