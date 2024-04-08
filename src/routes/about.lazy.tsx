import { createLazyFileRoute } from '@tanstack/react-router'

import { AboutPageComponent } from '@/components/routes/about-page'

export const Route = createLazyFileRoute('/about')({
  component: AboutPageComponent,
})
