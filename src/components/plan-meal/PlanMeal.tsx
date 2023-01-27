import { Meal, PlannedDay } from "../../types/plan"
import styles from './PlanMeal.module.css'

interface Props {
  plannedDay: PlannedDay
  recipeName?: string
  meal: Meal
  onClick: (plannedDay: PlannedDay, meal: Meal) => void
}
const uppercase = (input: string) => {
  return `${input.charAt(0).toUpperCase()}${input.slice(1)}`
}

const PlanMeal: React.FC<Props> = ({ plannedDay, recipeName, meal, onClick }) => {

  return (
    <div className={styles['meal-container']}>
      <span className={styles['meal-title']}>{uppercase(meal)}</span>
      <button onClick={() => onClick(plannedDay, meal)} className={`${styles['select-meal']} ${plannedDay[meal] ? styles['select-meal--selected'] : ''}`}>
        {plannedDay[meal] ? recipeName : 'Select recipe'}
      </button>
    </div>
  )
}

export default PlanMeal