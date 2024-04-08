import { BirthdayListItemSkeleton } from '../birthday-list-item-skeleton'

// Loading placeholder array
const loadingItemCount = Array.from({ length: 9 }, (_, i) => i)

export const BirthdayListSkeleton = () => {
  return (
    <div
      className="grid md:grid-cols-2 xl:grid-cols-3 flex-col gap-4 py-10"
      data-testid="birthday-list-skeleton"
    >
      {loadingItemCount.map((_, i) => (
        <BirthdayListItemSkeleton key={i} />
      ))}
    </div>
  )
}
