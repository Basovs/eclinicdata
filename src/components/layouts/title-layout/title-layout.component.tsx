import { motion } from 'framer-motion'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type TitleLayoutProps = {
  title: string
  description?: string
  children: ReactNode
}

export const TitleLayout = (props: TitleLayoutProps) => {
  return (
    <div key={props.title} className="p-4 lg:p-8">
      <motion.h1
        className={cn(
          'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center',
          props.description ? 'mb-2 lg:mb-4' : 'mb-4 lg:mb-8',
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {props.title}
      </motion.h1>

      {props.description ? (
        <motion.h2
          className="text-center text-lg mb-4 lg:mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {props.description}
        </motion.h2>
      ) : null}

      {props.children}
    </div>
  )
}
