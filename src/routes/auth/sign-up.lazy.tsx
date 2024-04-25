import { createLazyFileRoute } from '@tanstack/react-router'

import { SignUpPage } from '@/pages/auth/sign-up-page/sign-up-page.component'

export const Route = createLazyFileRoute('/auth/sign-up')({
  component: SignUpPage,
})
