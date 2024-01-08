const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Labas Bebrai!');
});

app.get('/m', (req, res) => {
    res.send('<h1>Labas, Meškėnai!</h1>');
});

app.listen(port, () => {
  console.log(`Bebras klauso ${port} porto.`);
});