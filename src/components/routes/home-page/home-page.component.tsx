import { TitleLayout } from "@/components/common/layouts/title-layout"
import { BirthdayFetchButton } from "@/features/fetch-birthdays/components/birthday-fetch-button"
import { BirthdayList } from "@/features/fetch-birthdays/components/birthday-list"

export const HomePageComponent = () => {
  return (
    <TitleLayout title="Birthdays">
      <div className="flex flex-col items-center p-2">
        <BirthdayFetchButton />

        <BirthdayList />
      </div>
    </TitleLayout>
  )
}
