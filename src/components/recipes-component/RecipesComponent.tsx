import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {recipeActions} from "../../redux/slices/RecipeSlice.ts";
import {IRecipe} from "../../models/IRecipe.ts";
import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";


export const RecipesComponent = () => {
    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipeStoreSlice.recipes);
    console.log(recipes)

    useEffect(() => {
        dispatch(recipeActions.loadRecipes());
    }, []);

    return (
        <>
            <div>
                <p>Recipes:</p>
                {recipes.map((recipe: IRecipe) => <RecipeComponent key={recipe.id} recipe={recipe}/>)}
            </div>
        </>
    );
};