import { GetServerSideProps } from "next"
import { Fragment, useState } from "react"
import Header from "../components/header/Header"
import PlannedDay from "../components/planned-day/PlannedDay"
import recipeApi from "../data/stub-api"
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
      </main>
    </Fragment>
  )
}

export default PlanPage
