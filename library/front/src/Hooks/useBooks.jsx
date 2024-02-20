import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { SERVER_URL } from '../Constants/main';
import * as a from '../Actions/books';


export default function useBooks(dispachBooks) {

    const [storeBook, setStoreBook] = useState(null);
    const [updateBook, setUpdateBook] = useState(null);
    const [destroyBook, setDestroyBook] = useState(null);


    //list
    useEffect(_ => {
        axios.get(`${SERVER_URL}/books`)
            .then(res => {
                console.log(res.data);
                dispachBooks(a.getBooks(res.data))
            })
            .catch(err => {
                console.log(err);
            });
    }, [dispachBooks]);



    //store
    useEffect(_ => {
        if (null !== storeBook) {
            const uuid = uuidv4();
            dispachBooks(a.storeBookAsTemp({ ...storeBook, id: uuid }));
            axios.post(`${SERVER_URL}/books`, {...storeBook, id: uuid})
                .then(res => {
                    dispachBooks(a.storeBookAsReal(res.data));
                    setStoreBook(null);
                })
                .catch(err => {
                    dispachBooks(a.storeBookAsUndo({ id: uuid }));
                    setStoreBook(null);
                });
        }
    }, [storeBook, dispachBooks]);






    return {
        storeBook,
        setStoreBook,
        updateBook,
        setUpdateBook,
        destroyBook,
        setDestroyBook
    };
}