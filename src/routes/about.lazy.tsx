import { AboutPageComponent } from "@/components/routes/about-page/about-page.component"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/about")({
  component: AboutPageComponent,
})
