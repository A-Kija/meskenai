import { BooksDataProvider } from "./Components/books/BooksData";
import BooksList from "./Components/books/BooksList";

export default function App() {

    return (
        <BooksDataProvider>
            <section>
                <div className="container">

                    <BooksList />

                </div>
            </section>
        </BooksDataProvider>
    );
}