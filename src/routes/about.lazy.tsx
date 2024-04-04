import { AboutPageComponent } from "@/components/routes/about-page"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/about")({
  component: AboutPageComponent,
})
