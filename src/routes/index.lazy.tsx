import { createLazyFileRoute } from '@tanstack/react-router'

import { TodaysBirthdaysPage } from '@/components/pages/todays-birthdays-page/pages/todays-birthdays-page'

export const Route = createLazyFileRoute('/')({
  component: TodaysBirthdaysPage,
})
