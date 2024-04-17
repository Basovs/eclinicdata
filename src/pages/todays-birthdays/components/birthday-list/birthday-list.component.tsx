import { useEffect } from 'react'

import { useGetTodaysBirthdaysQuery } from '@/pages/todays-birthdays/queries/use-get-todays-birthdays-query'

import { useGetBirthdaysStore } from '../../stores/get-birthdays/get-birthdays-store'
import { BirthdayListItem } from '../birthday-list-item'
import { BirthdayListSkeleton } from '../birthday-list-skeleton'

export const BirthdayList = () => {
  const { birthdaysFrom, birthdaysTo, birthdays, setBirthdays } = useGetBirthdaysStore()

  const { data: birthdaysRaw, isLoading, isFetched } = useGetTodaysBirthdaysQuery()

  useEffect(() => {
    setBirthdays(birthdaysRaw)
  }, [birthdaysRaw])

  // Loading indicator
  if (isLoading) {
    return <BirthdayListSkeleton />
  }

  // Not fetched yet
  if (!isFetched) {
    return
  }

  // Data undefined
  if (!birthdays) {
    return <p>No data</p>
  }

  // No birthdays found
  if (birthdays.length === 0) {
    return <p data-testid="no-birthdays-message">No birthdays found</p>
  }

  const paginatedBirthdays = birthdays.slice(birthdaysFrom, birthdaysTo)

  return (
    <div
      data-testid="birthday-list"
      className="grid md:grid-cols-2 xl:grid-cols-3 flex-col gap-4 py-10 min-h-[588px]"
    >
      {paginatedBirthdays.map((birthday, i) => (
        <BirthdayListItem key={`${birthday.name}_${birthday.year}`} {...birthday} index={i} />
      ))}
    </div>
  )
}
