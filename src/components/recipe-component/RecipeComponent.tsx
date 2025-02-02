import {IRecipe} from "../../models/IRecipe.ts";
import {FC} from "react";
import {Link} from "react-router-dom";



type RecipeTypeProps = {
    recipe: IRecipe
}

export const RecipeComponent: FC<RecipeTypeProps> = ({recipe}) => {

    return (
        <div>
            <Link to={'details'} state={recipe}>{recipe.name}</Link>
            <Link to={`recipes/details/${recipe.tags}}`} state={recipe}>{recipe.tags.map((tag, index) => <div key={index}>{tag}</div>)}</Link>
            {/*{recipe.tags.map((tag, index) => <Link to={`recipes/details/${recipe.tags}}`} state={recipe}><div key={index}>{tag}</div></Link>)}*/}

        </div>
    );
};