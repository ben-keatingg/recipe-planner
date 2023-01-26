export interface RawRecipe {
  id: number
  name: string
  url: string
  tags: string
}

export interface Recipe {
  id: number
  name: string
  url: string
  tags: string[]
}