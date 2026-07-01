const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>مرحباً بك في موقع HarbBot!</h1><p>الموقع يعمل الآن بنجاح.</p>');
});

app.listen(3000, () => {
    console.log('السيرفر يعمل على المنفذ 3000');
});

