import { AnimatePresence, Variants, motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

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

export const PaginationButtons = () => {
  const { birthdaysFrom, setBirthdaysFrom, birthdaysTo, setBirthdaysTo, birthdays } =
    useGetBirthdaysStore()

  const handleNext = () => {
    setBirthdaysFrom(birthdaysFrom + 15)
    setBirthdaysTo(birthdaysTo + 15)
  }

  const handlePrevious = () => {
    setBirthdaysFrom(birthdaysFrom - 15)
    setBirthdaysTo(birthdaysTo - 15)
  }

  if (!birthdays) {
    return null
  }

  return (
    <AnimatePresence>
      {Boolean(birthdays.length) ? (
        <motion.div className="flex gap-6" initial="initial" animate="animate" variants={variants}>
          <Button onClick={handlePrevious} disabled={birthdaysFrom === 0}>
            Previoius
          </Button>

          <Button onClick={handleNext} disabled={birthdaysTo >= (birthdays?.length ?? 0)}>
            Next
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
