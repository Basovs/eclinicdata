import { HomePageComponent } from "@/components/routes/home-page"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/")({
  component: HomePageComponent,
})
