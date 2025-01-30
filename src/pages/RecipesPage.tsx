import {RecipesComponent} from "../components/recipes-component/RecipesComponent.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";

export const RecipesPage = () => {
    return (
        <>
            <PaginationLayout/>
            <hr/>
            <RecipesComponent/>
        </>
    );
};