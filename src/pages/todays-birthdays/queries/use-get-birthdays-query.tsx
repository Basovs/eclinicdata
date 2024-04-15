import { useQuery } from '@tanstack/react-query'

import { WIKI_ON_THIS_DAY_API } from '../constants/apis'
import { BIRTHDAYS_QUERY_KEY } from '../constants/query-keys'
import { parseBirthdays } from '../helpers/parse-birthdays'
import { useGetBirthdaysStore } from '../stores/get-birthdays/get-birthdays-store'

type FetBirthdaysProps = {
  month: string
  day: string
  setIsError: (isError: boolean) => void
}
type GetBirthdaysProps = {
  month: string
  day: string
}

const fetchBirthdays = async (props: FetBirthdaysProps) => {
  try {
    // // Throw error to display Error Modal
    // throw new Error("Oh no!")

    const delay = Math.floor(Math.random() * 1500) + 500
    await new Promise(resolve => setTimeout(resolve, delay))

    const response = await fetch(
      WIKI_ON_THIS_DAY_API.replace('{language}', 'en')
        .replace('{type}', 'births')
        .replace('{MM}', props.month)
        .replace('{DD}', props.day),
    )

    return response.json()
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Failed to fetch birthdays:', error)

      props.setIsError(true)
    }
    return
  }
}

export const useGetBirthdaysQuery = (props: GetBirthdaysProps) => {
  const isFetchEnabled = useGetBirthdaysStore(state => state.isFetchEnabled)
  const setIsError = useGetBirthdaysStore(state => state.setIsError)

  return useQuery({
    queryKey: [BIRTHDAYS_QUERY_KEY, props.month, props.day],
    queryFn: () => fetchBirthdays({ ...props, setIsError }),
    select: parseBirthdays,
    enabled: isFetchEnabled && Boolean(props.month) && Boolean(props.day),
  })
}
