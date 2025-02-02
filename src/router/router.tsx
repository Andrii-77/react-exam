import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";
import {SingleUserDetailsPage} from "../pages/SingleUserDetailsPage.tsx";
import {SingleRecipeDetailsPage} from "../pages/SingleRecipeDetailsPage.tsx";
import {FormPage} from "../pages/FormPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path: '', element: <FormPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'recipes', element: <RecipesPage/>},
            {path: 'users/details/:userId', element: <SingleUserDetailsPage/>},
            {path: 'recipes/details/:recipeId', element: <SingleRecipeDetailsPage/>}
        ],
    }
]);

// {
//     path: '/', element: <MainLayout/>, children:[
//     {path: 'auth', element: <FormPage/>},
//     {path: 'auth/users', element: <UsersPage/>},
//     {path: 'auth/recipes', element: <RecipesPage/>},
//     {path: 'auth/users/details/:userId', element: <SingleUserDetailsPage/>},
//     {path: 'auth/recipes/details/:recipeId', element: <SingleRecipeDetailsPage/>}
// ],
// }