import { motion } from "framer-motion"

import { useGetTodaysBirthdaysQuery } from "@/features/fetch-birthdays/queries/use-get-todays-birthdays-query"
import { BirthdayListSkeleton } from "../birthday-list-skeleton"
import { BirthdayListItemComponent } from "../birthday-list-item"

const listVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const BirthdayList = () => {
  const { data: birthdays, isLoading, isFetched } = useGetTodaysBirthdaysQuery()

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

  return (
    <motion.div
      data-testid="birthday-list"
      className="grid md:grid-cols-2 xl:grid-cols-3 flex-col gap-4 py-10"
      variants={listVariants}
      animate="open"
      initial="closed"
    >
      {birthdays.map((birthday) => (
        <BirthdayListItemComponent
          key={`${birthday.name}_${birthday.year}`}
          {...birthday}
        />
      ))}
    </motion.div>
  )
}
