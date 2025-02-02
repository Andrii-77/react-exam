import {RecipesComponent} from "../components/recipes-component/RecipesComponent.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import {SearchPage} from "./SearchPage.tsx";

export const RecipesPage = () => {
    return (
        <>
            <SearchPage/>
            <PaginationLayout/>
            <hr/>
            <RecipesComponent/>
        </>
    );
};