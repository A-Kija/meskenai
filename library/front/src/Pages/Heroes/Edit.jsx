import { useContext, useState } from 'react';
import { Heroes } from '../../Contexts/Heroes';
import useAuthorsDropdown from '../../Hooks/useAuthorsDropdown';


export default function Edit() {

    const { editHero, setEditHero, setUpdateHero } = useContext(Heroes);

    const [inputs, setInputs] = useState(editHero);

    const { authorsDropdown } = useAuthorsDropdown();


    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const submit = _ => {
        const author = {
            surname: authorsDropdown.find(author => author.id === +inputs.author_id).surname,
            name: authorsDropdown.find(author => author.id === +inputs.author_id).name
        }
        setUpdateHero({ ...editHero, ...inputs, old: editHero, author });
        setEditHero(null);
    }

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={_ => setEditHero(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" value={inputs.title} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pages" className="form-label">Total pages</label>
                            <input type="text" className="form-control" id="pages" value={inputs.pages} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="genre" className="form-label">Genre</label>
                            <input type="text" className="form-control" id="genre" value={inputs.genre} onChange={handleChange} />
                        </div>
                        {
                            authorsDropdown &&
                            <div className="mb-3">
                                <label htmlFor="author_id" className="form-label">Author</label>
                                <select className="form-select" id="author_id" value={inputs.author_id} onChange={handleChange}>
                                    <option value="">Select author</option>
                                    {
                                        authorsDropdown.map(author => <option key={author.id} value={author.id}>{author.name} {author.surname}</option>)
                                    }
                                </select>
                            </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={submit}>Save</button>
                        <button type="button" className="btn btn-secondary" onClick={_ => setEditHero(null)}>Cancel Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}