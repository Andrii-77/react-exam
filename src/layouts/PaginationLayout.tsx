import {Outlet} from "react-router-dom";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";

export const PaginationLayout = () => {
    return (
        <>
            <PaginationComponent/>
            <hr/>
            <Outlet/>
        </>
    );
};