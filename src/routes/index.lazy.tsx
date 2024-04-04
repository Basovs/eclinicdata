import { HomePageComponent } from "@/components/routes/home-page/home-page.component"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: HomePageComponent,
})
