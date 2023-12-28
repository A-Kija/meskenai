import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useEffect, useState } from 'react';
import Create from './Components/colors/Create';
import { lsRead, lsStore } from './Components/colors/lsManager';
import Read from './Components/colors/Read';

export default function App() {

    const KEY = 'colors';
    const [colors, setColors] = useState([]);
    const [createData, setCreateData] = useState(null);

    useEffect(_ => {
        setColors(lsRead(KEY));
    }, []);


    useEffect(_ => {
        if (null === createData) {
            return;
        }
        lsStore(KEY, createData);
    }, [createData]);

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <Create setCreateData={setCreateData}/>
                </div>
                <div className="col-7">
                    <Read colors={colors}/>
                </div>
            </div>
        </div>
    );
}