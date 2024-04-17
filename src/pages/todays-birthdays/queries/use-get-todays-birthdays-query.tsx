import { useGetBirthdaysStore } from '../stores/get-birthdays/get-birthdays-store'
import { useGetBirthdaysQuery } from './use-get-birthdays-query'

export const useGetTodaysBirthdaysQuery = () => {
  const { date } = useGetBirthdaysStore()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return useGetBirthdaysQuery({ month, day })
}
