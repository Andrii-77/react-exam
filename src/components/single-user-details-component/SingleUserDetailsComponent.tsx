import {useLocation} from "react-router";
import {IUser} from "../../models/IUser.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {recipeActions} from "../../redux/slices/RecipeSlice.ts";
// import {IRecipe} from "../../models/IRecipe.ts";

export const SingleUserDetailsComponent = () => {
    const {state} = useLocation();
    const user = state as IUser;
    const dispatch = useAppDispatch();
    const recipes = useAppSelector((state) => state.recipeStoreSlice.recipes);
    console.log(recipes)

    useEffect(() => {
        dispatch(recipeActions.loadRecipes());
    }, []);
    return (
        <div>
            <div>
                <div>First Name: {user.firstName}</div>
                <div>Last Name: {user.lastName}</div>
                <div>Age: {user.age}</div>
                <div>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>
                <div>Birth Date: {user.birthDate}</div>
                <div>Blood Group": {user.bloodGroup}</div>
                <div>Height: {user.height}</div>
                <div>Weight: {user.weight}</div>
                <div>Eye Color: {user.eyeColor}</div>
            </div>
            <hr/>

        </div>
    );
};