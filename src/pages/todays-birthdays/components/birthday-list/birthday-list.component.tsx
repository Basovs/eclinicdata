import { motion } from 'framer-motion'
import { useEffect } from 'react'

import { useGetTodaysBirthdaysQuery } from '@/pages/todays-birthdays/queries/use-get-todays-birthdays-query'

import { useGetBirthdaysStore } from '../../stores/use-get-birthdays-store'
import { BirthdayListItem } from '../birthday-list-item'
import { BirthdayListSkeleton } from '../birthday-list-skeleton'

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const BirthdayList = () => {
  const birthdaysFrom = useGetBirthdaysStore(state => state.birthdaysFrom)
  const birthdaysTo = useGetBirthdaysStore(state => state.birthdaysTo)
  const birthdays = useGetBirthdaysStore(state => state.birthdays)
  const setBirthdays = useGetBirthdaysStore(state => state.setBirthdays)

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
    <motion.div
      data-testid="birthday-list"
      className="grid md:grid-cols-2 xl:grid-cols-3 flex-col gap-4 py-10 min-h-[568px]"
      variants={listVariants}
      animate="open"
      initial="closed"
    >
      {paginatedBirthdays.map(birthday => (
        <BirthdayListItem key={`${birthday.name}_${birthday.year}`} {...birthday} />
      ))}
    </motion.div>
  )
}
