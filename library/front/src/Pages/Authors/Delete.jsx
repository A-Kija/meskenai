import { useContext } from 'react';
import { Authors } from '../../Contexts/Authors';

export default function Delete() {

    const {deleteAuthor, setDeleteAuthor} = useContext(Authors);

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm delete</h5>
                        <button type="button" className="btn-close" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger">Delete</button>
                        <button type="button" className="btn btn-secondary">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}