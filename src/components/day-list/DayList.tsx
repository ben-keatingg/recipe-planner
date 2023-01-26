import { useEffect } from "react"
import { generateDays } from "../../lib/dates"
import DayBox from "../day-box/DayBox"
import styles from './DayList.module.css'

interface Props {
  selectedDate: Date
  startDate: Date
  onClick: (selectedDate: Date) => void
}

const DayList: React.FC<Props> = ({ selectedDate, startDate, onClick }) => {
  
  useEffect(() => {
    if (document?.getElementById('day-selected')?.scrollIntoView) {
      document?.getElementById('day-selected')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
      document?.getElementById('day-selected')?.scrollIntoView({
        behavior: 'auto',
        block: 'center',
        inline: 'center'
      });
    }
  }, [selectedDate])

  const days = generateDays(startDate)
  return (
    <div className={styles['container']}>
      {days.map((day) => {
        return (
          <DayBox key={day.getTime()} onClick={onClick} date={day} isSelected={day.toISOString() === selectedDate.toISOString()}/>
        )
      })}
    </div>
  )
}

export default DayList
