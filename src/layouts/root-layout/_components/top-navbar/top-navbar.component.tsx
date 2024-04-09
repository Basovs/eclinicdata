import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export const TopNavbar = () => {
  return (
    <div className="flex justify-center gap-2 py-2.5 bg-secondary border-b">
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
