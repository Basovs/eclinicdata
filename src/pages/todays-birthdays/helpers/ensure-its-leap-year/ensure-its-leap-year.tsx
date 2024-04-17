import { setYear } from 'date-fns'

export const ensureItsLeapYear = ({ date }: { date: Date }) => {
  const leapYear = setYear(date, 2024)

  return leapYear
}
