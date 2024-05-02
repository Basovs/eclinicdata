import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const containerVariants = cva('transition-colors rounded-md', {
  variants: {
    variant: {
      neutral: 'bg-accent',
      primary: 'bg-primary-light',
      success: 'bg-success-light',
      'warning-light': 'bg-warning-light',
      warning: 'bg-warning',
      'error-light': 'bg-destructive-light',
      error: 'bg-destructive',
      blue: 'bg-blue-500/15',
      purple: 'bg-purple-500/15',
      pink: 'bg-pink-500/15',
      rose: 'bg-rose-500/15',
      orange: 'bg-orange-500/15',
      violet: 'bg-violet-500/15',
      white: 'bg-white',
    },
    size: {
      sm: 'px-4 py-3',
      md: 'px-6 py-4',
      lg: 'px-8 py-6',
      xl: 'px-10 py-7',
      full: 'px-12 py-9',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
})

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  asChild?: boolean
}

const Container: React.FC<ContainerProps> = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) => {
  const Component = asChild ? React.Fragment : 'div'
  return <Component className={cn(containerVariants({ variant, size }), className)} {...props} />
}
Container.displayName = 'Container'

export { Container, containerVariants }
