import { readFileSync } from "fs"
import { join } from "path"
import { RawRecipe, Recipe } from "../types/recipe"


export default class RecipeApi {
  private recipes: Recipe[] = []

  constructor() {
    this.parseRecipes()
  }

  private parseRecipes() {
    const recipeJson = JSON.parse(readFileSync(join(__dirname, './recipes.json')).toString()) as RawRecipe[]
    const parsedRecipes = recipeJson.map((rawRecipe) => {
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