import { Variants, motion } from 'framer-motion'

import { Skeleton } from '@/components/ui/skeleton'

const listItemVariants: Variants = {
  initial: {
    opacity: 0,
    transition: {
      type: 'tween',
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
    },
  },
}

export const BirthdayListItemSkeleton = () => {
  return (
    <motion.div
      data-testid="birthday-list-item-skeleton"
      className="flex items-center gap-4 w-96"
      variants={listItemVariants}
      initial="initial"
      animate="animate"
    >
      <Skeleton className="w-20 h-20 min-w-20 rounded-full" />

      <div className="flex flex-col gap-1 w-full">
        <Skeleton className="h-[28px]" />

        <Skeleton className="h-[24px]"></Skeleton>
      </div>
    </motion.div>
  )
}
