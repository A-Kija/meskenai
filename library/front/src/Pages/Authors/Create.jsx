export default function Create() {

    const [inputs, setInputs] = useState({
        name: '',
        surname: '',
        nickname: '',
        born: '',
    });

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.id]: e.target.value}));
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h3>Create Author</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={inputs.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="surname" className="form-label">Surname</label>
                    <input type="text" className="form-control" id="surname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="nickname" className="form-label">Nickname</label>
                    <input type="text" className="form-control" id="nickname" />
                </div>
                <div className="mb-3">
                    <label htmlFor="born" className="form-label">Born</label>
                    <input type="date" className="form-control" id="born" />
                </div>
            </div>
            <div className="card-footer">
                <button type="button" className="btn btn-primary m-2">Create</button>
            </div>
        </div>
    )
}