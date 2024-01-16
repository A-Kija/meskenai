import { createContext, useEffect, useState } from 'react';
import axios from 'axios';


const BOOK_URL = 'https://in3.dev/knygos/';
const TYPES_URL = 'https://in3.dev/knygos/types/';


export const BooksData = createContext();


export const BooksDataProvider = ({ children }) => {


    const [books, setBooks] = useState([]);
    const [types, setTypes] = useState(null);


    useEffect(_ => {
        axios.get(BOOK_URL)
            .then(res => setBooks(res.data))
    }, [setBooks]);

    useEffect(_ => {
        axios.get(TYPES_URL)
            .then(res => {
                setTimeout(_ => setTypes(res.data), 2000)
            })
    }, [setTypes]);
    


    return (
        <BooksData.Provider value={{
            books,
            types
        }}>
            {children}
        </BooksData.Provider>
    );
}
