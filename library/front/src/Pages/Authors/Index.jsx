import Nav from "../../Components/Nav";
import { AuthorsProvider } from "../../Contexts/Authors";
import Create from "./Create";

export default function Index() {

    return (
        <AuthorsProvider>
            <Nav />
            <div className="container text-center">
                <div className="row">
                    <div className="col-4 mt-4">
                        <h1>Authors</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Create />
                    </div>
                    <div className="col-7">
                        Column
                    </div>
                </div>
            </div>
        </AuthorsProvider>
    )
}