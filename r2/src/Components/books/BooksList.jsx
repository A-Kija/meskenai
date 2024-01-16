import { useContext } from 'react';
import { BooksData } from './BooksData';
import Book from './Book';

export default function BooksList() {

    const { books } = useContext(BooksData);

    console.log(books);

    return (


        <div className="books">

            {
                books.map(book => book.show.size === 0 ? <Book key={book.id} book={book} /> : null)
            }

        </div>

    );

}