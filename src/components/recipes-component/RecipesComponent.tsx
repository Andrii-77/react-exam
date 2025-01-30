import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {recipeActions} from "../../redux/slices/RecipeSlice.ts";
import {IRecipe} from "../../models/IRecipe.ts";
import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";
import {useSearchParams} from "react-router";


// export const RecipesComponent = () => {
//     const dispatch = useAppDispatch();
//     const recipes = useAppSelector((state) => state.recipeStoreSlice.recipes);
//     console.log(recipes)
//
//     useEffect(() => {
//         dispatch(recipeActions.loadRecipes());
//     }, []);
//
//     return (
//         <>
//             <div>
//                 <p>Recipes:</p>
//                 {recipes.map((recipe: IRecipe) => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
//             </div>
//         </>
//     );
// };

export const RecipesComponent = () => {
    const [searchParams] = useSearchParams({page: "1"});
    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipeStoreSlice.recipes);
    console.log(recipes)

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        console.log(currentPage)
        dispatch(recipeActions.loadRecipes());
    }, [searchParams]);

    return (
        <>
            <div>
                <p>Recipes:</p>
                {recipes.map((recipe: IRecipe) => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
            </div>
        </>
    );
};
