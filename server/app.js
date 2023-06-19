const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
    console.log(`Listening on Port `,PORT);
});

app.get('/', (req, res) => {
    res.send('Page Loaded');
});
app.get('/home', (req, res) => {
    res.sendFile('/views/index.html', { root: __dirname });
})