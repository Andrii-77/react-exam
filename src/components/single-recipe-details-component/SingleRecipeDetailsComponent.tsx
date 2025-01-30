import {useLocation} from "react-router";
import {IRecipe} from "../../models/IRecipe.ts";
import {Link} from "react-router-dom";

export const SingleRecipeDetailsComponent = () => {
    const {state} = useLocation();
    const recipe = state as IRecipe;
    return (
        <div>
            <div>Name: {recipe.name}</div>
            <div>Ingredients: {recipe.ingredients.map((ingredient: string, index) => <ul key={index}><li>{ingredient}</li></ul>)}</div>
            <div>Prep Time Minutes: {recipe.prepTimeMinutes}</div>
            <div>Cook Time Minutes: {recipe.cookTimeMinutes}</div>
            <div>Servings: {recipe.servings}</div>
            <div>Difficulty: {recipe.difficulty}</div>
            <div>Cuisine: {recipe.cuisine}</div>
            <div>Calories Per Serving: {recipe.caloriesPerServing}</div>
            <div>Rating: {recipe.rating}</div>
            <hr/>
            <Link to={''} state={recipe.userId}>{recipe.userId}</Link>
        </div>
    );
};