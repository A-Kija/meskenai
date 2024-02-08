import { useContext } from 'react';
import { Router } from '../../Contexts/Router';
import Page404 from '../Page404';
import PageGate from '../Auth/PageGate';
import { UsersProvider } from '../../Contexts/Users';
import Create from './Create';
import List from './List';
import Delete from './Delete';


export default function Index({ to }) {

    const { params } = useContext(Router);

    let returnComponent = <Page404 />;

    if (to === 'register') {
        returnComponent = <Create />;
    } else if (params.length === 0) {
        returnComponent = <List />;
    } else if (params.length === 2 && params[0] === 'delete') {
        returnComponent = <Delete />;
    }



    return (
        <UsersProvider>
            {returnComponent}
        </UsersProvider>
    );
}