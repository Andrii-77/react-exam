import {IUser} from "../../models/IUser.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

// interface UserComponentProps {
//     user: IUser
// }
//
// export const UserComponent = ({user}: UserComponentProps) => {
//     return (
//         <div>{user.id}). {user.lastName} {user.firstName}</div>
//     );
// };

type UserTypeProps = {
    user: IUser
}

export const UserComponent: FC<UserTypeProps> = ({user}) => {
    // const navigate = useNavigate();
    // const handleOnClick = () => {
    //     navigate('details', {state: user})
    // }

    return (
        <div>
            <Link to={`details/${user.id}`} state={user}>{user.id}). {user.lastName} {user.firstName}</Link>

            {/*<button onClick={handleOnClick}>go to details</button>*/}
        </div>
    );
};