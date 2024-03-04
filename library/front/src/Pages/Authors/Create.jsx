import { useContext, useState } from 'react';
import { Authors } from '../../Contexts/Authors';
import * as v from '../../Validators/textInputs';
import { MessagesContext } from '../../Contexts/Messages';


const defaultInputs = {
    name: '',
    surname: '',
    nickname: '',
    born: '',
};

export default function Create() {

    const [inputs, setInputs] = useState(defaultInputs);

    const { setStoreAuthor } = useContext(Authors);
    const { addMessage } = useContext(MessagesContext);
    const [e, setE] = useState(new Map());

 

    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const create = _ => {

        const errors = new Map();

        v.validate(inputs.name, 'name', errors, [v.isNotEmpty, v.isString]);
        v.validate(inputs.surname, 'surname', errors, [v.isNotEmpty, v.isString]);

        if (errors.size > 0) {
            errors.forEach(err => addMessage({ type: 'danger', text: err }));
            setE(errors);
            console.log(errors);
            
            return;
        }

        

        return;
        setStoreAuthor(inputs);
        setInputs(defaultInputs);
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                <h3>Create Author</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" style={{borderColor: e.has('name') ? 'crimson' : null}} id="name" value={inputs.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Surname</label>
                    <input type="text" className="form-control"style={{borderColor: e.has('surname') ? 'crimson' : null}} id="surname" value={inputs.surname} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="nickname" className="form-label">Nickname</label>
                    <input type="text" className="form-control" id="nickname" value={inputs.nickname} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="born" className="form-label">Born</label>
                    <input type="date" className="form-control" id="born" value={inputs.born} onChange={handleChange} />
                </div>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-primary m-2" onClick={create}>Create</button>
            </div>
        </div>
    );
}