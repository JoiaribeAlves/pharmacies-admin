import { Skeleton } from '@/_components/ui/skeleton'

function Loading() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <Skeleton className="h-10 w-36 rounded-md" />

      <div className="space-y-px overflow-hidden rounded-md">
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
      </div>
    </div>
  )
}

export default Loading
