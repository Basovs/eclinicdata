import { AnimatePresence, motion } from 'framer-motion'
import { Loader2Icon } from 'lucide-react'

import { useGetTodaysBirthdaysQuery } from '@/components/pages/todays-birthdays-page/queries/use-get-todays-birthdays-query'
import { useGetBirthdaysStore } from '@/components/pages/todays-birthdays-page/stores/use-get-birthdays-store'
import { Button } from '@/components/ui/button'

import { BirthdaysErrorModal } from '../birthdays-error-modal'

export const BirthdayFetchButton = () => {
  const setEnableFetch = useGetBirthdaysStore(state => state.setEnableFetch)
  const fetchEnabled = useGetBirthdaysStore(state => state.fetchEnabled)

  const { data, isLoading, refetch } = useGetTodaysBirthdaysQuery()

  const handleFetch = () => {
    if (fetchEnabled) {
      refetch()
    }

    setEnableFetch(true)
  }

  return (
    <AnimatePresence>
      {Boolean(data) || isLoading ? null : (
        <motion.div
          key="fetch-button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
        >
          <Button
            onClick={handleFetch}
            disabled={isLoading}
            className="flex items-center gap-4 w-96"
            size="lg"
          >
            {isLoading ? 'Fetching...' : "Fetch today's birthdays"}
            {isLoading ? <Loader2Icon className="animate-spin" /> : null}
          </Button>
        </motion.div>
      )}

      <BirthdaysErrorModal />
    </AnimatePresence>
  )
}
