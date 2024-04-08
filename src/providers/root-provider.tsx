import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

type RootProviderProps = {
  children: ReactNode
}

export const RootProvider: FC<RootProviderProps> = props => {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
}
