import { createLazyFileRoute } from '@tanstack/react-router'

import { AboutPageComponent } from '@/components/pages/about-page'

export const Route = createLazyFileRoute('/about')({
  component: AboutPageComponent,
})
