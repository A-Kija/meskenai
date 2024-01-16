import { useContext } from 'react';
import { BooksData } from './BooksData';

export default function Top() {

    const sorts = [
        { id: 'default', title: 'Naujausios viršuje'},
        { id: 'price_asc', title: 'Pigiausios viršuje' },
        { id: 'price_desc', title: 'Brangiausios viršuje' },
        { id: 'title_asc', title: 'A-Z' },
        { id: 'title_desc', title: 'Z-A' }
    ];

    const { setSort, sort, types, filterCat, setFilterCat } = useContext(BooksData);

    return (
        <div className="top">

            <div className="block">
                <h2>Rūšiuoklė</h2>
                <select value={sort} onChange={e => setSort(e.target.value)}>
                    {
                        sorts.map(sort => <option key={sort.id} value={sort.id}>{sort.title}</option>)
                    }
                </select>
            </div>
            {
            types &&
            <div className="block">
                <h2>Kategorijos</h2>
                <select value={filterCat} onChange={e => setFilterCat(e.target.value)}>
                    <option value="all">Visos</option>
                    {
                        types.map(sort => <option key={sort.id} value={sort.id}>{sort.title}</option>)
                    }
                </select>
            </div>
            }

        </div>
    );
}