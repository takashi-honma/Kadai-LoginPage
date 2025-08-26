import 'dotenv/config';
import { Client } from 'pg';

const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
});

client.connect()
    .then(() => {
        console.log('PostgreSQL Detabaseの初期化を実行します…');

        client.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,username TEXT UNIQUE NOT NULL, password TEXT NOT NULL);')
            .then(createRes => {
                console.log('データベースの作成に成功しました！');
                client.query("INSERT INTO users (username, password) VALUES ('username_test', 'password_test');")
                    .then(userRes => {
                        console.log('テストユーザーの登録に成功しました！');
                        return;
                    })
                    .catch(err => {
                        console.error('クエリエラー:テストユーザー登録に失敗しました。', err);
                        return;
                    });
            })
            .catch(err => {
                console.error('クエリエラー:データベースの作成に失敗しました。', err);
                return;
            });
    })
    .catch(err => {
        console.error('PostgreSQL Error Message:接続失敗:', err);
        return;
    });