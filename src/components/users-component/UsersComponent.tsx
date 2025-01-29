import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    console.log(users)

    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);

    return (
        <>
            <div>
                <p>Users:</p>
                {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
            </div>
        </>
    );
};