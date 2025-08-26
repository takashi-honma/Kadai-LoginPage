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

④作成したデータベースのデータを元に、.envファイルを作成・設定してください。書き方は.env.exampleファイルまたは、以下を参考にしてください。
```
PGHOST=postgresqlのホスト
PGPORT=postgresqlのポート
PGUSER=postgresqlのユーザー名
PGPASSWORD=postgresqlのパスワード
PGDATABASE=作成したpostgresqlのデータベース名
```

⑤『②』を実行したディレクトリと同じディレクトリ内で以下のコードを実行してください。

`npm start`

⑥ブラウザにて、ログに表示されたサーバーURLにアクセスしてください。

⑦存在しないユーザー名とパスワードを入力し、『ユーザーIDまたはパスワードが正しくありません』と表示されたら動作確認は成功です。
