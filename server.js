const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

const dummyId = 'testUser';
const dummyPassword = '123456789';

app.post('/api/send', (req, res) => {
    const { userId, password } = req.body;

    if (userId === dummyId && password === dummyPassword) {
        return res.json({ "success": true, "message": "ログイン成功" });
    }

    return res.json({ "success": false, "message": "ユーザーIDまたはパスワードが正しくありません" });
});

app.listen(3000, () => {
    console.log('Server: http://localhost:3000');
});
