import addDays from 'date-fns/addDays'

export const getWeekdayString = (input: number) => {
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

export const getMonthSuffix = (input: number) => {
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

export const getMonthString = (input: number) => {
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

/** for a given date, returns 7 days in the past and 7 days in the future */
export const generateDays = (startDate: Date) => {
  const fourteenArray = new Array(14).fill(0)
  const days = fourteenArray.map((_item, index) => {
    const dayDifference = (index - 7)
    return addDays(startDate, dayDifference)
  })

  return days
}

export const dateToDay = (date: Date) => {
  return new Date(date.toISOString().slice(0,10))
}
