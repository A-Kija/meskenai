export default function ColorCircle({ color }) {

    return (
        <div className="color-circle" style={{
            backgroundColor: color + '66',
            border: '5px dotted ' + color,
        }}
        ></div>
    );
}