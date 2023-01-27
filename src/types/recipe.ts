export interface RawRecipe {
  id: string
  name: string
  url: string
  tags: string
}

export interface Recipe {
  id: string
  name: string
  url: string
  tags: string[]
}
