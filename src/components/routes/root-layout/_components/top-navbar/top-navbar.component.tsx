import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/react-router"

export const TopNavbar = () => {
  return (
    <div className="flex justify-center gap-2 py-1 bg-secondary">
      <Link to="/">
        <Button variant="link" size="lg">
          Home
        </Button>
      </Link>
      <Link to="/about" className="[&.active]:font-bold">
        <Button variant="link" size="lg">
          About
        </Button>
      </Link>
    </div>
  )
}
