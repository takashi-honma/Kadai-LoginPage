# 概要

このアプリケーションは課題で作成したログインページのテストになります。
HTML,CSSおよびJavaScript,PostgreSQLを使用しています。

# 実行手順

①このGithubからリポジトリをクローンし、展開してください。

②コマンドプロンプト等からクローンしたリポジトリに移動し、ルートディレクトリで以下のコードのいずれかを実行してください。
`npm install`
`yarn install`

③PostgreSQLにてデータベースを作成し、以下のクエリを実行し、テーブルを作成してください。その後、作成したテーブルに任意にusernameとpasswordを追加してください。
```CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);```

④『②』を実行したディレクトリと同じディレクトリ内で以下のコードを実行してください。
`npm start`

⑤ブラウザにて、ログに表示されたserverURLにアクセスしてください。

⑥適当な文字列を入力し、『ユーザーIDまたはパスワードが正しくありません』と表示されたら実行完了となります。
