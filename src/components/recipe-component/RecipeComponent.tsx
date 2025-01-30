import {IRecipe} from "../../models/IRecipe.ts";
import {FC} from "react";
import {Link} from "react-router-dom";

// interface RecipeComponentProps {
//     recipe: IRecipe
// }
//
// export const RecipeComponent = ({recipe}: RecipeComponentProps) => {
//     return (
//         <div>{recipe.name}</div>
//     );
// };

type RecipeTypeProps = {
    recipe: IRecipe
}

export const RecipeComponent: FC<RecipeTypeProps> = ({recipe}) => {
    // const navigate = useNavigate();
    // const handleOnClick = () => {
    //     navigate('details', {state: user})
    // }
    return (
        <div>
            <Link to={'details'} state={recipe}>{recipe.name}</Link>
            <Link to={''} state={recipe}>{recipe.tags.map((tag, index) => <div key={index}>{tag}</div>)}</Link>

            {/*<button onClick={handleOnClick}>go to details</button>*/}
        </div>
    );
};