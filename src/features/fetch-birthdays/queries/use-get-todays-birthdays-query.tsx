import { useGetBirthdaysQuery } from "./use-get-birthdays-query"

export const useGetTodaysBirthdaysQuery = () => {
  const today = new Date()
  const month = String(today.getMonth() + 1).padStart(2, "0")
  const day = String(today.getDate()).padStart(2, "0")

  return useGetBirthdaysQuery({ month, day })
}
