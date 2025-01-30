import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";
import {SingleUserDetailsPage} from "../pages/SingleUserDetailsPage.tsx";
import {SingleRecipeDetailsPage} from "../pages/SingleRecipeDetailsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children:[
            {path: 'users', element: <UsersPage/>},
            {path: 'recipes', element: <RecipesPage/>},
            {path: 'users/details', element: <SingleUserDetailsPage/>},
            {path: 'recipes/details', element: <SingleRecipeDetailsPage/>}
        ]
    }
]);

// {path: '/', element: <MainLayout/>, children: [
//     {index: true, element: <HomePage/>},
//     {path: 'login', element: <LoginPage/>},
//     {path: '/auth/resources', element: <AuthResourcesPage/>},
// ]
// }
// ]);