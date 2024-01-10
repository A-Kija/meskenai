import { useEffect, useState } from 'react';
import './form.scss';
import './buttons.scss';
import './App.css';
import axios from 'axios';

const URL = 'http://localhost:3001/animals';

function App() {

  const [animalInput, setAnimalInput] = useState('');
  const [animals, setAnimals] = useState(null);
  const [storeAnimals, setStoreAnimals] = useState(null);

  useEffect(_ => {
    axios.get(URL)
      .then(res => setAnimals(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(_ => {
    if (null !== storeAnimals) {
      axios.post(URL, storeAnimals)
        .then(res => {
          setAnimals([{ name: storeAnimals.name, id: res.data.id }, ...animals]);
          setAnimalInput('');
        })
        .catch(err => console.log(err));
    }
  }, [storeAnimals]);

  const submit = _ => {
    setStoreAnimals({ name: animalInput });
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>React and Express full of Animals</h1>
        {
          animals && animals.length !== 0 && animals.map(animal => (
            <div key={animal.id}>
              <h3 style={{margin: '5px'}}>{animal.name}</h3>
            </div>
          ))
        }
        {
          animals && !animals.length && <p>No Animals Found</p>
        }
        {
          !animals && <p>Animals is loading...</p>
        }
        <div className="form">
          <input type="text" placeholder="Enter Animal" value={animalInput} onChange={e => setAnimalInput(e.target.value)} />
          <div className="buttons">
            <button className="green" onClick={submit}>Submit</button>
            <button className="red" onClick={_ => setAnimalInput('')}>Clear</button>
          </div>
        </div>

      </header>
    </div>
  );
}

export default App;
