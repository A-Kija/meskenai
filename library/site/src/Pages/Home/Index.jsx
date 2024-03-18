import Nav from '../../Components/Nav';
import useGet from '../../Hooks/useGet';

export default function Index() {

    const { data, loading } = useGet('/');

    if (loading) return (<div className="loader"><div></div></div>);

    return (
        <>
            <Nav />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Home</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>All Library</h3>
                            </div>
                            <div className="card-body">
                                <div className="container">
                                    {
                                        data.map(item =>
                                            <div className="row" key={item.id}>
                                                <div className="col-2">
                                                    {item.name} {item.surname}
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}