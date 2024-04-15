import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'

import { useGetBirthdaysStore } from '../../stores/get-birthdays/get-birthdays-store'

const variants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const PaginationButtons = () => {
  const birthdaysFrom = useGetBirthdaysStore(state => state.birthdaysFrom)
  const setBirthdaysFrom = useGetBirthdaysStore(state => state.setBirthdaysFrom)
  const birthdaysTo = useGetBirthdaysStore(state => state.birthdaysTo)
  const setBirthdaysTo = useGetBirthdaysStore(state => state.setBirthdaysTo)
  const birthdays = useGetBirthdaysStore(state => state.birthdays)

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
    <motion.div className="flex gap-6" variants={variants}>
      <Button onClick={handlePrevious} disabled={birthdaysFrom === 0}>
        Previoius
      </Button>

      <Button onClick={handleNext} disabled={birthdaysTo >= (birthdays?.length ?? 0)}>
        Next
      </Button>
    </motion.div>
  )
}
