import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {SearchPage} from "./SearchPage.tsx";

export const UsersPage = () => {
    return (
        <>
            <SearchPage/>
            <PaginationLayout/>
            <hr/>
            <UsersComponent/>
        </>
    );
};