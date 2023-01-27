import { Recipe } from "../types/recipe"
import recipes from "./recipes"


export class RecipeApi {
  private recipes: Recipe[] = []

  constructor() {
    this.parseRecipes()
  }

  private parseRecipes() {
    const parsedRecipes = recipes.map((rawRecipe) => {
      return {
        ...rawRecipe,
        tags: rawRecipe.tags.split(',')
      }
    })

    this.recipes = parsedRecipes
  }

  public async listRecipes() {
    return this.recipes
  }
}

const recipeApi = new RecipeApi()

export default recipeApi
