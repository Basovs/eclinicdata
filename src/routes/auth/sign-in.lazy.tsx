import { createLazyFileRoute } from '@tanstack/react-router'

import { SignInPage } from '@/pages/auth/sign-in-page/sign-in-page.component'

export const Route = createLazyFileRoute('/auth/sign-in')({
  component: SignInPage,
})
