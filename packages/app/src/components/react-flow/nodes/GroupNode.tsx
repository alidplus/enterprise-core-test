import { Card, CardBody } from '@nextui-org/react'
import {
  Handle,
  Node,
  NodeProps,
  Position,
  HandleType,
  NodeToolbar,
  NodeResizer,
} from '@xyflow/react'
import { CSSProperties } from 'react'

export const GRP_NODE_TYPE = 'GRP' as const

export type GroupNode = Node<
  { label?: string; style?: CSSProperties },
  typeof GRP_NODE_TYPE
>

export default function GroupNode({ data }: NodeProps<GroupNode>) {
  return (
    <Card className="border-1 border-primary h-full overflow-visible rounded-none bg-transparent shadow-none">
      <CardBody className="p-2"></CardBody>
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom} />

      <NodeResizer minWidth={100} minHeight={30} />
    </Card>
  )
}
