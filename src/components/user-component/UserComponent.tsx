import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {Link} from "react-router-dom";



type UserTypeProps = {
    user: IUser
}

export const UserComponent: FC<UserTypeProps> = ({user}) => {

    return (
        <div>
            <Link to={`details/${user.id}`} state={user}>{user.id}). {user.lastName} {user.firstName}</Link>
        </div>
    );
};