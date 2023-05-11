const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/homeButtonName', (req, res) => {
    res.json({ buttonName: "Home sweet home" });
});

app.get('/aboutButtonName', (req, res) => {
    res.json({ buttonName: "About me!" });
});

module.exports = app;