import { createFileRoute } from '@tanstack/react-router'

import { AmplifyGen2TestPage } from '@/pages/amplify-gen2-test/amplify-gen2-test'

export const Route = createFileRoute('/amplify-gen2-test')({
  component: AmplifyGen2TestPage,
})
