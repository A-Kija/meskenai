import Nav from '../../Components/Nav';
import useGet from '../../Hooks/useGet';
import * as icon from '../../Icons';
import { SERVER_URL } from '../../Constants/main';


export default function Index() {




    const { data, loading, setUrl } = useGet('/heroes');




    if (loading) return (<div className="loader"><div></div></div>);

    return (
        <>
            <Nav />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Heroes</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>List</h3>
                            </div>
                            <div className="card-body">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}