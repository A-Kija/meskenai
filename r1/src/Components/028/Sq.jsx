export default function Sq({square, setSquares}) {

    const remove = _ => {
        setSquares(s => s.filter(s => s.id !== square.id));
    }

    return (
        <div className="square spin pointer" style={{
            backgroundColor: square.color + '66',
            border: '1px solid ' + square.color,
        }}
        onClick={remove}
        >{square.id}</div>
    );
}