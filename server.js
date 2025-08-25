require('dotenv').config();

const express = require('express');
const app = express();

const { Client } = require('pg');
const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
});

client.connect()
    .then(() => console.log('PostgreSQLに接続成功！'))
    .catch(err => console.error('接続失敗:', err));

app.use(express.static('public'));
app.use(express.json());

app.post('/api/send', (req, res) => {
    const { userId, password } = req.body;

    client.query('SELECT 1 FROM users WHERE username = $1 AND password = $2', [userId, password])
        .then(sqlRes => {
            if (sqlRes.rows.length  > 0) {
                return res.json({ "success": true, "message": "ログイン成功" });
            }else{
                return res.json({ "success": false, "message": "ユーザーIDまたはパスワードが正しくありません" });
            }

        })
        .catch(err => {
            console.error('クエリエラー:', err);
            return res.json({ "success": false, "message": "データベース接続でエラーが発生しました！" });
        });
});

app.listen(3000, () => {
    console.log('Server: http://localhost:3000');
});
