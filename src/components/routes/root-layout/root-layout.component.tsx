import { RootProvider } from "@/providers/root-provider"
import { Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import { TopNavbar } from "./_components/top-navbar/top-navbar.component"

export const RootLayoutComponent = () => {
  return (
    <RootProvider>
      <TopNavbar />
      <Outlet />
      <TanStackRouterDevtools />
    </RootProvider>
  )
}
