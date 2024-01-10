const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const fs = require('node:fs');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.static('public'));

app.use(bodyParser.json());




app.get('/animals', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
  res.json(data);
});

app.post('/animals', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data/data.json', 'utf8'));
  const newAnimal = req.body;
  newAnimal.id = uuidv4();
  data.push(newAnimal);
  fs.writeFileSync('./data/data.json', JSON.stringify(data));
  res.json({ id: newAnimal.id });
});





app.listen(port, () => {
  console.log(`Žvėrys klauso ${port} porto.`);
});