export function Show({ color, setDeleteData }) {
    return (
        <div className="showLine">
            <div style={{
                backgroundColor: color.color,
                width: color.size / 2 + 'px',
                height: color.size / 2 + 'px',
            }}></div>
            <div className="buttons">
                <button className="red" onClick={_ => setDeleteData(color)}>Delete</button>
                <button className="green">Edit</button>
            </div>
        </div>
    );
}