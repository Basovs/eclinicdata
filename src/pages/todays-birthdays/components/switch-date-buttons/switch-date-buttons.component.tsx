import { addDays } from 'date-fns'
import { AnimatePresence, Variants, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

import { ensureItsLeapYear } from '../../helpers/ensure-its-leap-year/ensure-its-leap-year'
import { useGetBirthdaysStore } from '../../stores/get-birthdays/get-birthdays-store'

const variants: Variants = {
  initial: {
    opacity: 0,
    transition: {
      delay: 1.4,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.4,
    },
  },
}

export const SwitchDateButtons = () => {
  const { birthdays, date, setDate } = useGetBirthdaysStore()

  const handleNextDate = () => {
    const leapYearDate = ensureItsLeapYear({ date })

    const nextDate = addDays(leapYearDate, 1)

    setDate(nextDate)
  }

  const handlePreviousDate = () => {
    const leapYearDate = ensureItsLeapYear({ date })

    const previousDate = addDays(leapYearDate, -1)

    setDate(previousDate)
  }

  if (!birthdays) {
    return null
  }

  return (
    <AnimatePresence>
      {Boolean(birthdays.length) ? (
        <motion.div className="flex gap-6" initial="initial" animate="animate" variants={variants}>
          <Button onClick={handlePreviousDate}>Previoius Date</Button>

          <Button onClick={handleNextDate}>Next Date</Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
