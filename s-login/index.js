const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'forest2'
})

app.use(cors());
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

connection.connect();

// router

app.get('/', (req, res) => {
  console.log('Buvo užklausta /');
  res.send('Labas Bebrai!');
});





app.listen(port, () => {
  console.log(`FOREST SERVERIS klauso ${port} porto.`);
});