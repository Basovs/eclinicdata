// import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Link } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export const TopNavbar = () => {
  return (
    <div className="flex justify-between gap-2 py-2.5 bg-secondary border-b px-10">
      <div>
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
        <Link to="/amplify-gen2-test" className="[&.active]:font-bold">
          <Button variant="link" size="lg">
            Amplify Gen2 Test
          </Button>
        </Link>
      </div>

      <div className="flex gap-4">
        <Link to="/auth/sign-up" className="[&.active]:font-bold">
          <Button size="lg">Sign Up</Button>
        </Link>
        <Link to="/auth/sign-in" className="[&.active]:font-bold">
          <Button variant="outline" size="lg">
            Sign In
          </Button>
        </Link>
      </div>

      {/* <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div> */}
    </div>
  )
}
