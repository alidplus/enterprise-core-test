import { SVGProps, Suspense } from "react";
import * as icons from '.'
import EmptyIcon from "./EmptyIcon";

export type IconNames = keyof typeof icons

interface LazyIconProps extends SVGProps<SVGSVGElement> {
  size?: number,
  name?: IconNames
}

export default function LazyIcon({ name, ...props }: LazyIconProps) {
  const IconComponent = icons[name ?? 'Empty'] ?? icons.Empty
  return (
    <Suspense fallback={<EmptyIcon />}>
      {/* @ts-expect-error */}
      <IconComponent {...props} />
    </Suspense>
  )
}