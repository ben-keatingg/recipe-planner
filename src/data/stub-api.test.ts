import { RecipeApi } from "./stub-api"

describe('Stub recipe API', () => {
  
  let api: RecipeApi
  beforeAll(() => {
    api = new RecipeApi()
  })

  it('lists recipes', async () => {
    const res = await api.listRecipes()

    expect(res.length).toBe(10)
  })
})