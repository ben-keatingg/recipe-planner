import isToday from 'date-fns/isToday'
import getDay from 'date-fns/getDay'
import styles from './DayBox.module.css'

interface Props {
  date: Date
  isSelected?: boolean
}

const getWeekdayString = (input: number) => {
  switch (input) {
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
    default:
      return 'Unknown'
  }
}

const getMonthSuffix = (input: number) => {
  switch (input) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

const getMonthString = (input: number) => {
  switch (input) {
    case 0:
      return 'January'
    case 1:
      return 'February'
    case 2:
      return 'March'
    case 3:
      return 'April'
    case 4:
      return 'May'
    case 5:
      return 'June'
    case 6:
      return 'July'
    case 7:
      return 'August'
    case 8:
      return 'September'
    case 9:
      return 'October'
    case 10:
      return 'November'
    case 11:
      return 'December'
    default:
      return 'Unknown'
  }
}

const DayBox: React.FC<Props> = ({ date, isSelected }) => {

  const weekday = getDay(date)
  const today = isToday(date)

  return (
    <div className={`${styles['day-container']} ${isSelected ? styles['day-container--selected'] : ''}`}>
      <div>
        {today && <span className={styles['today']}>Today</span>}
        <div className={styles['day-inner']}>
          <span className={styles['weekday']}>{getWeekdayString(weekday)}</span>
          <p className={styles['date']}>{date.getDate()}<span className={styles['date-prefix']}>{getMonthSuffix(date.getDate())}</span></p>
          <span className={styles['month']}>{getMonthString(date.getMonth())}</span>
        </div>
      </div>
    </div>
  )
}

export default DayBox