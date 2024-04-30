import { Skeleton } from '@/_components/ui/skeleton'

function Loading() {
  return (
    <div className="flex flex-col gap-1 p-6">
      <Skeleton className="h-12 rounded-t-lg" />
      <Skeleton className="h-14" />
      <Skeleton className="h-14" />
    </div>
  )
}

export default Loading
