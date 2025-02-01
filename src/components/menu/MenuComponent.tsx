import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul>
            <li><Link to={''}>Home</Link></li>
            <li><Link to={'users'}>Users</Link></li>
            <li><Link to={'recipes'}>Recipes</Link></li>
        </ul>
    );
};