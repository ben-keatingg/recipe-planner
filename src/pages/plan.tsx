import { GetServerSideProps } from "next"
import { Fragment, useState } from "react"
import DayBox from "../components/day-box/DayBox"
import Header from "../components/header/Header"
import Modal from "../components/modal/Modal"
import PlannedDay from "../components/planned-day/PlannedDay"
import RecipeItem from "../components/recipe-item/RecipeItem"
import recipeApi from "../data/stub-api"
import { uppercase } from "../lib"
import getPlanFromServer from "../lib/get-plan-from-server"
import { Meal, Plan } from "../types/plan"
import { Recipe } from "../types/recipe"

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  let userId = context.req.cookies.userId

  const recipes = await recipeApi.listRecipes()
  // TODO: redirect if no plan
  const {props} = await getPlanFromServer(userId)

  return {
    props: {
      ...props,
      recipes
    }
  }
}

interface Props {
  userId: string
  planFromServer: Plan
  recipes: Recipe[]
}

const PlanPage: React.FC<Props> = ({ planFromServer, recipes }) => {
  const [plan, setPlan] = useState(planFromServer)
  const [selectedDay, setSelectedDay] = useState<{ plannedDay: PlannedDay, meal: Meal} | undefined>()
  
  const handleDaySelected = (plannedDay: PlannedDay, meal: Meal) => {
    setSelectedDay({ plannedDay, meal })
  }

  const filterRecipes = (meal: Meal) => {
    return recipes.filter((recipe) => recipe.tags.includes(meal))
  }

  const handleRecipeSelected = (recipe: Recipe) => {
    const newPlan: Plan = {
      ...plan,
      plannedDays: plan.plannedDays.map((plannedDay) => {
        if (plannedDay.date !== selectedDay?.plannedDay.date) {
          return plannedDay
        }

        return {
          ...plannedDay,
          [selectedDay.meal]: recipe.id
        }
      })
    }
    
    setPlan(newPlan)
    setSelectedDay(undefined)
  }

  return (
    <Fragment>
      {/* TODO: HEAD */}
      <main className="content">
        <Header hideSubHeader={true} />
        <div>
          {plan.plannedDays.map((plannedDay) => {
            return (
              <PlannedDay key={plannedDay.id} plannedDay={plannedDay} recipes={recipes} handleDaySelected={handleDaySelected}/>
            )
          })}
        </div>
        <Modal isOpen={!!selectedDay} handleClose={() => setSelectedDay(undefined)}>
          <h2>Pick a recipe</h2>
          {!!selectedDay && (
            <Fragment>
              <DayBox date={new Date(selectedDay.plannedDay.date)} smaller={true} />
              <p>{uppercase(selectedDay.meal)}</p>
              {filterRecipes(selectedDay.meal).map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} handleSelect={handleRecipeSelected} />)}
            </Fragment>
          )}
        </Modal>
      </main>
    </Fragment>
  )
}

export default PlanPage
