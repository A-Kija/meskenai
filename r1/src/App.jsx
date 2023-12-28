import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './buttons.scss';
import './form.scss';
import { useEffect, useState } from 'react';
import Create from './Components/colors/Create';

export default function App() {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-5">
                    <Create />
                </div>
                <div className="col-7">
                    Column
                </div>
            </div>
        </div>
    );
}