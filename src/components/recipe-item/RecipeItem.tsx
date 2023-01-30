import { Recipe } from "../../types/recipe"
import styles from './RecipeItem.module.css'

interface Props {
  recipe: Recipe
  handleSelect: (recipe: Recipe) => void | Promise<void>;
}

const RecipeItem: React.FC<Props> = ({ recipe, handleSelect }) => {

  return (
    <div className={styles['recipe-item']}>
      <div className={styles['recipe-item-header']}>
        <a className={styles['recipe-link']} href={recipe.url} target="_blank">{recipe.name}</a>
        <button className={styles['recipe-add-button']} onClick={() => handleSelect(recipe)}>Add</button>
      </div>
      <div className={styles['recipe-tag-container']}>
        {recipe.tags.map((tag) => {
          return <span className={styles['recipe-tag']}>{tag}</span>
        })}
      </div>
    </div>
  )
}

export default RecipeItem