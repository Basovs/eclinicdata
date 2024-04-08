import { Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { RootProvider } from '@/providers/root-provider'

import { TopNavbar } from './_components/top-navbar'

export const RootLayoutComponent = () => {
  return (
    <RootProvider>
      <TopNavbar />
      <Outlet />
      <TanStackRouterDevtools />
    </RootProvider>
  )
}
