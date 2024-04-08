import { createRootRoute } from '@tanstack/react-router'

import { RootLayoutComponent } from '@/components/routes/root-layout'

import '../styles/globals.css'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return <RootLayoutComponent />
}
