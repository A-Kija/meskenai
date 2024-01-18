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
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

connection.connect();



app.get('/', (req, res) => {
    res.send('Hello My dear, MariaDB!');
});



app.listen(port, () => {
  console.log(`Maria klauso ${port} porto.`);
});