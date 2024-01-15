import { useContext } from 'react';
import { ParameterContext } from './Layout';

export default function Link({ href, children }) {

    const { path } = useContext(ParameterContext);

    return (
        <a className="nav-link" style={{
            color: path === href ? 'crimson' : 'orange'
        
        }} href={href}>{children}</a>
    );

}