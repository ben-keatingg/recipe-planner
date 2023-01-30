import axios from "axios"
import { GetServerSideProps } from "next"
import { Fragment, useState } from "react"
import AppHead from "../components/app-head/AppHead"
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
import styles from './plan.module.css'

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  let userIdInCookie = context.req.cookies.userId

  const recipes = await recipeApi.listRecipes()
  // TODO: redirect if no plan
  const {planFromServer, userId} = await getPlanFromServer(userIdInCookie)

  if (!planFromServer) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {
      userId,
      planFromServer,
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

  const handleRecipeSelected =  async(recipe: Recipe) => {
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
   
    await axios.post('/api/plan', newPlan)
    setPlan(newPlan)
    setSelectedDay(undefined)
  }

  return (
    <Fragment>
      <AppHead />
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
        <div className={styles['cta-container']}>
          <button className="cta-button" onClick={() => alert('This hasn\'t been impemented yet')}>Plan for me</button>
        </div>
      </main>
    </Fragment>
  )
}

export default PlanPage
