import { BirthdayListItemSkeleton } from "./birthday-list-item-skeleton"

// Loading placeholder array
const loadingItemCount = Array.from({ length: 8 }, (_, i) => i)

export const BirthdayListSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 flex-col gap-4 py-10">
      {loadingItemCount.map((_, i) => (
        <BirthdayListItemSkeleton key={i} />
      ))}
    </div>
  )
}
