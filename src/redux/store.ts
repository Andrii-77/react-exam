import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "./slices/UserSlice.ts";
import {recipeSlice} from "./slices/RecipeSlice.ts";

export const store = configureStore({
    reducer: {
        userStoreSlice: userSlice.reducer,
        recipeStoreSlice: recipeSlice.reducer,
    }
})