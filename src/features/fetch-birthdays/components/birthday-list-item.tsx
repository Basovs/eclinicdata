import { motion } from "framer-motion"
import type { BirthdayListItem } from "../types"

const listItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const BirthdayListItemComponent = (props: BirthdayListItem) => {
  return (
    <motion.div
      className="flex items-center gap-4 w-96"
      variants={listItemVariants}
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
              .split(" ")
              .map((name) => name[0])
              .join("")}
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
