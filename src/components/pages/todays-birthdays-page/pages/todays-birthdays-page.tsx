import { TitleLayout } from '@/components/layouts/title-layout'
import { BirthdayFetchButton } from '@/components/pages/todays-birthdays-page/components/birthday-fetch-button'
import { BirthdayList } from '@/components/pages/todays-birthdays-page/components/birthday-list'

export const TodaysBirthdaysPage = () => {
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-US', {
    dateStyle: 'medium',
  })

  return (
    <TitleLayout title={`Todays Birthdays - ${formattedDate}`}>
      <div className="flex flex-col items-center p-2">
        <BirthdayFetchButton />

        <BirthdayList />
      </div>
    </TitleLayout>
  )
}
