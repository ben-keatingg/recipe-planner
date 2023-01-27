import isToday from 'date-fns/isToday'
import getDay from 'date-fns/getDay'
import styles from './DayBox.module.css'
import { dateToDay, getMonthString, getMonthSuffix, getWeekdayString } from '../../lib/dates'

interface Props {
  date: Date
  isSelected?: boolean
  onClick?: (date: Date) => void
  smaller?: boolean
}

const DayBox: React.FC<Props> = ({ date, isSelected, onClick, smaller }) => {

  const weekday = getDay(date)
  const today = isToday(date)

  return (
    <div
      id={isSelected ? 'day-selected' : ''}
      data-testid={`day-box-${dateToDay(date).toISOString().slice(0,10)}`}
      className={`${styles['day-container']}
      ${isSelected ? styles['day-container--selected'] : 'day-container--selectable'}
      ${today ? styles['day-container--today'] : '' }
      ${smaller ? styles['day-container--smaller'] : '' }`}
      
      onClick={onClick ? () => onClick(date) : undefined}
    >
      <div>
        {(today && !smaller) && <span className={styles['today']}>Today</span>}
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