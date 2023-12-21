import './App.scss';
import './buttons.scss';
import './form.scss';
import { useState } from 'react';

const animals = ['cat', 'dog', 'fish', 'bird', 'rabbit', 'hamster', 'turtle', 'snake', 'lizard', 'frog', 'chicken', 'duck', 'goat', 'horse', 'cow', 'pig', 'sheep', 'mouse', 'rat', 'guinea pig', 'chinchilla', 'ferret', 'hedgehog', 'gerbil', 'chicken', 'duck', 'goat', 'horse', 'cow', 'pig', 'sheep', 'mouse', 'rat', 'guinea pig', 'chinchilla', 'ferret', 'hedgehog', 'gerbil'];

export default function App() {

    const [singleText, setSingleText] = useState('');
    const [multiText, setMultiText] = useState({
        animal1: '',
        animal2: '',
        animal3: ''
    });
    const [select, setSelect] = useState('');
    const [checkboxes, setCheckboxes] = useState({
        A: false,
        B: true,
        C: false,
        D: false
    });


    const handleSingleText = e => {
        setSingleText(e.target.value);
    }

    const handleMultiText = e => {
        setMultiText(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSelect = e => {
        setSelect(e.target.value);
    }

    const handleCheckbox = e => {
        // setCheckboxes(prev => ({ ...prev, [e.target.name]: e.target.checked }));
        setCheckboxes(prev => ({ ...prev, [e.target.name]: !prev[e.target.name] }));
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Form Control</h1>
                <div className="form">
                    <input type="text" placeholder="Name" value={singleText} onChange={handleSingleText} />

                    <input type="text" name="animal1" placeholder="Animal 1" value={multiText.animal1} onChange={handleMultiText}/>
                    <input type="text" name="animal2" placeholder="Animal 2" value={multiText.animal2} onChange={handleMultiText} />
                    <input type="text" name="animal3" placeholder="Animal 3" value={multiText.animal3} onChange={handleMultiText} />

                    <select value={select} onChange={handleSelect}>
                        <option value="">Select</option>
                        {
                            animals.map((animal, index) => <option key={index} value={animal}>{animal.toUpperCase()}</option>)
                        }
                    </select>

                    <div className="checkboxes">
                        <input type="checkbox" id="A" name="A" checked={checkboxes.A} onChange={handleCheckbox} />
                        <label htmlFor="A">A</label>
                        <input type="checkbox" id="B" name="B" checked={checkboxes.B} onChange={handleCheckbox}/>
                        <label htmlFor="B">B</label>
                        <input type="checkbox" id="C" name="C" checked={checkboxes.C} onChange={handleCheckbox}/>
                        <label htmlFor="C">C</label>
                        <input type="checkbox" id="D" name="D" checked={checkboxes.D} onChange={handleCheckbox}/>
                        <label htmlFor="D">D</label>
                    </div>


                </div>

            </header>
        </div>
    );
}