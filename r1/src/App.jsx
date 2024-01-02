import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useEffect, useState } from 'react';
import Create from './Components/colors/Create';
import { lsDestroy, lsRead, lsStore } from './Components/colors/lsManager';
import Read from './Components/colors/Read';
import Delete from './Components/colors/Delete';

export default function App() {

    const KEY = 'colors';
    const [colors, setColors] = useState([]);
    const [createData, setCreateData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [destroyData, setDestroyData] = useState(null);

    useEffect(_ => {
        setColors(lsRead(KEY));
    }, []);


    useEffect(_ => {
        if (null === createData) {
            return;
        }

        const id = lsStore(KEY, createData);

        setColors(prevColors => [...prevColors, {...createData, id}]);

    }, [createData]);

    useEffect(_ => {
        if (null === destroyData) {
            return;
        }

        lsDestroy(KEY, destroyData.id);

        setColors(prevColors => prevColors.filter(color => color.id !== destroyData.id));

        setDeleteData(null);

    }, [destroyData]);


    

    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <Create setCreateData={setCreateData}/>
                </div>
                <div className="col-7">
                    <Read colors={colors} setDeleteData={setDeleteData}/>
                </div>
            </div>
        </div>
        <Delete deleteData={deleteData} setDeleteData={setDeleteData} setDestroyData={setDestroyData}/>
        </>
    );
}