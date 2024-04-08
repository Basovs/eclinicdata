import { createLazyFileRoute } from '@tanstack/react-router'

import { HomePageComponent } from '@/components/routes/home-page'

export const Route = createLazyFileRoute('/')({
  component: HomePageComponent,
})
