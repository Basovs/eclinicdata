import { TitleLayout } from '@/layouts/title-layout'
import { BirthdayFetchButton } from '@/pages/todays-birthdays/components/birthday-fetch-button'
import { BirthdayList } from '@/pages/todays-birthdays/components/birthday-list'

import { PaginationButtons } from './components/pagination-buttons'

export const TodaysBirthdaysPage = () => {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-US', {
    dateStyle: 'medium',
  })

  return (
    <TitleLayout title={`Birthdays on this day - ${formattedDate}`}>
      <div className="flex flex-col items-center p-2">
        <BirthdayFetchButton />

        <div className="flex flex-col items-center gap-6">
          <BirthdayList />

          <PaginationButtons />
        </div>
      </div>
    </TitleLayout>
  )
}
