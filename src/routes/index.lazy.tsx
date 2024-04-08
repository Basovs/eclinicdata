import { createLazyFileRoute } from '@tanstack/react-router'

import { TodaysBirthdaysPage } from '@/pages/todays-birthdays/todays-birthdays-page'

export const Route = createLazyFileRoute('/')({
  component: TodaysBirthdaysPage,
})
