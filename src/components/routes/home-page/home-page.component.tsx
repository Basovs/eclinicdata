import { TitleLayout } from '@/components/layouts/title-layout'
import { BirthdayFetchButton } from '@/features/fetch-birthdays/components/birthday-fetch-button'
import { BirthdayList } from '@/features/fetch-birthdays/components/birthday-list'

export const HomePageComponent = () => {
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
