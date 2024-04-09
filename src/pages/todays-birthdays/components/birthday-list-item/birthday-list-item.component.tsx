import { Variants, motion } from 'framer-motion'

import type { BirthdayListItemType } from '../../types'

const listItemVariants: Variants = {
  initial: (index: number) => ({
    y: 50,
    opacity: 0,
    transition: {
      delay: index * 0.09,
      type: 'tween',
    },
  }),
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 0.09,
      type: 'tween',
    },
  }),
}

export const BirthdayListItem = (props: BirthdayListItemType & { index: number }) => {
  return (
    <motion.div
      data-testid="birthday-list-item"
      className="flex items-center gap-4 w-96"
      variants={listItemVariants}
      initial="initial"
      animate="animate"
      custom={props.index}
    >
      {props.image ? (
        <img
          src={props.image}
          alt={props.name}
          className="w-20 h-20 min-w-20 rounded-full object-cover"
        />
      ) : (
        <div className="flex items-center justify-center w-20 h-20 min-w-20 rounded-full bg-secondary">
          <p className="text-xl">
            {props.name
              .split(' ')
              .map(name => name[0])
              .join('')}
          </p>
        </div>
      )}

      <div>
        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight">
          {`${props.name} - ${props.year}`}
        </h3>

        <p className="text-muted-foreground">
          <span className="font-semibold">Role: </span>
          {props.text}
        </p>
      </div>
    </motion.div>
  )
}
