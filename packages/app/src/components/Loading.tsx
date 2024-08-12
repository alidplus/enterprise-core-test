import { CircularProgress, Progress } from "@nextui-org/react";

export default function BrandLoading() {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center align-middle m-auto">
      <div className="flex flex-col justify-center align-middle min-w-fit gap-1 m-auto">
        <div className="flex justify-center align-middle min-w-fit gap-1 m-auto">
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