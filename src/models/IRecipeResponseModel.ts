import {IRecipe} from "./IRecipe.ts";

export interface IRecipeResponseModel {
  recipes: IRecipe[];
  total: number;
  skip: number;
  limit: number;
}