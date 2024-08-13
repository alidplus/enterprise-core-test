import { CircularProgress, Progress } from '@nextui-org/react'

export default function BrandLoading() {
  return (
    <div className="absolute inset-0 m-auto flex h-full w-full justify-center align-middle">
      <div className="m-auto flex min-w-fit flex-col justify-center gap-1 align-middle">
        <div className="m-auto flex min-w-fit justify-center gap-1 align-middle">
          <div>Enterprise</div>
          <div className="font-bold">Core</div>
        </div>
        <Progress
          size="sm"
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
        />
      </div>
    </div>
  )
}
