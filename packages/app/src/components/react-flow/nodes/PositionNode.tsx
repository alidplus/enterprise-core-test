import { Card, CardBody } from '@nextui-org/react'
import {
  Handle,
  Node,
  NodeProps,
  NodeResizer,
  Position,
  useViewport,
} from '@xyflow/react'

export const POS_NODE_TYPE = 'POS_XY' as const

type PositionNode = Node<{}, typeof POS_NODE_TYPE>

export default function PositionNode({
  positionAbsoluteX,
  positionAbsoluteY,
}: NodeProps<PositionNode>) {
  return (
    <Card className="border-1 overflow-visible rounded-md border-black bg-gray-100 shadow-none">
      <CardBody className="p-2">
        <p>x: {positionAbsoluteX.toFixed(1)}</p>
        <p>y: {positionAbsoluteY.toFixed(1)}</p>
      </CardBody>
    </Card>
  )
}
