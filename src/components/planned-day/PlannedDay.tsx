import { PlannedDay, Meal, } from "../../types/plan"
import { Recipe } from "../../types/recipe"
import DayBox from "../day-box/DayBox"
import PlanMeal from "../plan-meal/PlanMeal"
import styles from './PlannedDay.module.css'

interface Props {
  plannedDay: PlannedDay
  recipes: Recipe[]
  handleDaySelected: (plannedDay: PlannedDay, meal: Meal) => void
}

const PlannedDay: React.FC<Props> = ({ plannedDay, recipes, handleDaySelected }) => {
  const getRecipeName = (recipeId?: string) => {
    const foundRecipe = recipes.find((recipe) => recipe.id === recipeId)
    if (!foundRecipe) {
      return 'Unknown'
    }

    return foundRecipe.name
  }

  return (
    <div className={styles['container']}>
      <DayBox date={new Date(plannedDay.date)} smaller={true} />
      <div className={styles['planner-box']}>
        <PlanMeal onClick={handleDaySelected} plannedDay={plannedDay} recipeName={getRecipeName(plannedDay.breakfast)} meal="breakfast" />
        <PlanMeal onClick={handleDaySelected} plannedDay={plannedDay} recipeName={getRecipeName(plannedDay.lunch)} meal="lunch" />
        <PlanMeal onClick={handleDaySelected} plannedDay={plannedDay} recipeName={getRecipeName(plannedDay.dinner)} meal="dinner" />
      </div>
    </div>
  )
}

export default PlannedDay