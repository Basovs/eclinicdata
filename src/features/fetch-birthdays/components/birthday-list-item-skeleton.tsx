import { Skeleton } from "@/components/ui/skeleton"

export const BirthdayListItemSkeleton = () => {
  return (
    <div
      className="flex items-center gap-4 w-96"
      data-testid="birthday-list-item"
    >
      <Skeleton className="w-20 h-20 min-w-20 rounded-full" />

      <div className="flex flex-col gap-1 w-full">
        <Skeleton className="h-[28px]" />

        <Skeleton className="h-[24px]"></Skeleton>
      </div>
    </div>
  )
}
