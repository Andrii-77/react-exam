import {IRecipe} from "../../models/IRecipe.ts";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getAll} from "../../services/api.service.ts";
import {IRecipeResponseModel} from "../../models/IRecipeResponseModel.ts";

type RecipeSliceType = {
    recipes: IRecipe[]
}

const initRecipeSliceState: RecipeSliceType = {recipes: []};

const loadRecipes = createAsyncThunk("loadRecipes", async (_, thunkAPI) => {
    try {
        const {recipes} = await getAll<IRecipeResponseModel>('/recipes');
        console.log(recipes);
        return thunkAPI.fulfillWithValue(recipes);
        // throw new Error();
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Some Recipes ERROR');
    }
});

export const recipeSlice = createSlice({
    name: 'recipeSlice',
    initialState: initRecipeSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadRecipes.fulfilled, (state, action: PayloadAction<IRecipe[]>) => {
            state.recipes = action.payload;
        })
        .addCase(loadRecipes.rejected, (state, action) => {
            console.log(state);
            console.log(action.payload);
        })
});

export const recipeActions = {...recipeSlice.actions, loadRecipes};