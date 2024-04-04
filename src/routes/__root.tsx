import { createRootRoute } from "@tanstack/react-router"
import "../styles/globals.css"
import { RootLayoutComponent } from "@/components/routes/root-layout/root-layout.component"

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return <RootLayoutComponent />
}
