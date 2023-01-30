import { GetServerSideProps } from 'next'
import PlausibleProvider, { usePlausible } from 'next-plausible'
import axios from 'axios'
import { ChangeEventHandler, useEffect, useState } from 'react'
import DayList from '../components/day-list/DayList'
import Header from '../components/header/Header'
import { dateToDay } from '../lib/dates'
import { Plan } from '../types/plan'
import styles from './index.module.css'
import { useRouter } from 'next/router'
import getPlanFromServer from '../lib/get-plan-from-server'
import AppHead from '../components/app-head/AppHead'


const allHealthGoals = [
  { value: 'brain-health', label: 'Brain Health' },
  { value: 'physical-recovery', label: 'Physical Recovery' },
  { value: 'general-wellbeing', label: 'General Wellbeing' },
  { value: 'mental-wellbeing', label: 'Mental Wellbeing' }
]

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  let userIdInCookie = context.req.cookies.userId
  const { planFromServer, userId }  = await getPlanFromServer(userIdInCookie)

  return {
    props: {
      userId,
      planFromServer
    }
  }
}

interface Props {
  userId: string
  planFromServer: Plan | null
}

export const Home: React.FC<Props> = ({ userId, planFromServer }) => {
  const plausible = usePlausible()
  const router = useRouter()
  const [startDate, setStartDate]= useState(
    planFromServer ? new Date(planFromServer.startDate) : dateToDay(new Date())
  )
  const [healthGoals, setHealthGoals] = useState<string[]>(
    planFromServer ? planFromServer.healthGoals : []
  )

  useEffect(() => {
    if (document) {
      console.log('cookie set', userId)
      document.cookie = `userId=${userId}; path=/;`
    }
  }, [])

  const handleHealthGoalCheck: ChangeEventHandler<HTMLInputElement> = (event) => {
    let newHealthGoals = [...healthGoals]
    if (event.target.checked) {
      newHealthGoals.push(event.target.value)
    } else {
      newHealthGoals = newHealthGoals.filter((healthGoal) => healthGoal !== event.target.value)
    }

    if (newHealthGoals.length > 2) {
      newHealthGoals = newHealthGoals.slice(1)
    }

    setHealthGoals(newHealthGoals)
  }

  const handleStartPlanningClick = async () => {
    const plan: Plan = {
      userId,
      healthGoals,
      plannedDays: planFromServer ? planFromServer.plannedDays : [],
      startDate: startDate.toISOString()
    }

    await axios.post('/api/plan', plan)
    plausible('planningStarted')
    router.push('/plan')
  }

  return (
    <>
      <AppHead />
      <main className="content">
        <PlausibleProvider trackLocalhost={true} domain="recipe-planner.vercel.app">
          <Header />
          <h2>Let's get started</h2>
          <p className={styles['day-label']}id="top">When do you want your week to start?</p>
          <DayList startDate={dateToDay(new Date())} selectedDate={startDate} onClick={setStartDate} />
          <p className={styles['health-goals-label']}>
            What health goals would you<br/>like to prioritise?
            <span>Select up to 2 goals</span>
          </p>
          <div className={styles['health-goals']}>
            <div>
              {allHealthGoals.slice(0,2).map((healthGoal) => {
                return (
                <div key={healthGoal.value} className={`${styles['checkbox-container']}`}>
                  <input
                    id={`health-goal-${healthGoal.value}`}
                    name="health-goal"
                    type="checkbox"
                    checked={healthGoals.includes(healthGoal.value)}
                    value={healthGoal.value}
                    onChange={handleHealthGoalCheck}
                    className={styles['checkbox-input']}
                  />
                  <label
                    className={`${styles['checkbox-label']} ${healthGoals.includes(healthGoal.value) ? styles['checkbox-label--selected'] : ''}`}
                    htmlFor={`health-goal-${healthGoal.value}`}
                  >
                    {healthGoal.label}
                  </label>
                </div>
                )
              })}
            </div>
            <div className={styles['checkbox-group-right']}>
              {allHealthGoals.slice(2).map((healthGoal) => {
                return (
                <div key={healthGoal.value} className={`${styles['checkbox-container']}`}>
                  <input
                    id={`health-goal-${healthGoal.value}`}
                    name="health-goal"
                    type="checkbox"
                    checked={healthGoals.includes(healthGoal.value)}
                    value={healthGoal.value}
                    onChange={handleHealthGoalCheck}
                    className={styles['checkbox-input']}
                  />
                  <label
                    className={`${styles['checkbox-label']} ${healthGoals.includes(healthGoal.value) ? styles['checkbox-label--selected'] : ''}`}
                    htmlFor={`health-goal-${healthGoal.value}`}
                  >
                    {healthGoal.label}
                  </label>
                </div>
                )
              })}
            </div>
          </div>
          <div className={styles['action-container']}>
            <button onClick={handleStartPlanningClick} className="cta-button">Start Planning</button>
          </div>
          </PlausibleProvider>
      </main>
      </>
  )
}

export default Home