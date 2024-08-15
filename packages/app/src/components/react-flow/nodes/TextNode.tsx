import {
  Button,
  Card,
  CardBody,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from '@nextui-org/react'
import {
  Handle,
  Node,
  NodeProps,
  Position,
  HandleType,
  NodeToolbar,
  NodeResizer,
  useReactFlow,
} from '@xyflow/react'
import { CSSProperties, ChangeEvent, useState } from 'react'
import SettingsIcon from '../../icons/SettingsIcon'
import AddTextIcon from '../../icons/AddTextIcon'

export const TXT_NODE_TYPE = 'TXT' as const

export type TextNode = Node<{ label: string }, typeof TXT_NODE_TYPE>

export default function TextNode({ data, id }: NodeProps<TextNode>) {
  const rf = useReactFlow()
  const [show, setShow] = useState(false)
  function handleChange(label: string) {
    rf.updateNodeData(id, { label })
  }
  function handleRemove() {
    rf.deleteElements({ nodes: [{ id }] })
  }
  return (
    <Card className="border-success bg-success-100 h-full overflow-visible rounded-sm border-0 shadow-none">
      <Popover isOpen={show} placement="bottom" showArrow offset={10}>
        <Tooltip
          placement="top"
          content={'Click to edit this node'}
          color="secondary"
        >
          <CardBody className="flex flex-row gap-3 p-2">
            <AddTextIcon className="txt-drag-handle self-center" />
            <p className="self-center">{data.label}</p>
            <Button
              size="sm"
              color="primary"
              variant="light"
              isIconOnly
              onClick={() => setShow((s) => !s)}
            >
              <SettingsIcon />
            </Button>
          </CardBody>
        </Tooltip>
        <PopoverContent className="w-[240px]">
          {(titleProps) => (
            <div className="w-full px-1 py-2">
              <p
                className="text-small text-foreground font-bold"
                {...titleProps}
              >
                Settings
              </p>
              <div className="mt-2 flex w-full flex-col gap-2">
                <Input
                  defaultValue={data.label}
                  label="Text"
                  size="sm"
                  variant="bordered"
                  onChange={(e) => handleChange(e.target.value)}
                />
                <hr />
                <Button color="danger" onClick={handleRemove}>
                  Delete Node
                </Button>
              </div>
            </div>
          )}
        </PopoverContent>
      </Popover>
      <Handle type="source" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      <Handle type="target" position={Position.Right} />
      <Handle type="source" position={Position.Bottom} />
    </Card>
  )
}
