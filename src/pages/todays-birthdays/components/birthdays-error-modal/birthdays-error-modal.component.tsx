import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import { useGetBirthdaysStore } from '../../stores/get-birthdays/get-birthdays-store'

export function BirthdaysErrorModal() {
  const isError = useGetBirthdaysStore(state => state.isError)
  const setIsError = useGetBirthdaysStore(state => state.setIsError)
  const setIsFetchEnabled = useGetBirthdaysStore(state => state.setIsFetchEnabled)

  const handleClose = () => {
    setIsError(false)
    setIsFetchEnabled(false)
  }

  return (
    <Dialog open={Boolean(isError)} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle data-testid="fetch-birthdays-error-modal-title" className="text-red-600">
            Error
          </DialogTitle>
          <DialogDescription>
            There was an error fetching birthdays. Please try again later.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button variant="destructive" onClick={handleClose}>
            Understood
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
