import { Button, ButtonGroup } from '@nextui-org/button'
import { Tooltip } from '@nextui-org/react'
import {
  Node,
  Panel,
  PanelPosition,
  useReactFlow,
  useViewport,
} from '@xyflow/react'
import _ from 'lodash'
import { DragEvent, useCallback } from 'react'
import AddGroupIcon from '../../icons/AddGroupIcon'
import AddNodeIcon from '../../icons/AddNodeIcon'
import { GRP_NODE_TYPE } from '../nodes/GroupNode'
import { POS_NODE_TYPE } from '../nodes/PositionNode'
import { getNodeInitialValues } from '../nodes'
import AddTextIcon from '../../icons/AddTextIcon'
import { TXT_NODE_TYPE } from '../nodes/TextNode'

interface AddNodeToolbarProps {
  position?: PanelPosition
}

export function AddNodeToolbar(props: AddNodeToolbarProps) {
  const rf = useReactFlow()
  const vp = useViewport()

  const onAddNode = useCallback(() => {
    const { x, y, zoom } = vp
    const newNode: Node = {
      id: _.uniqueId(POS_NODE_TYPE),
      position: { x: (540 - x) / zoom - 50, y: (410 - y) / zoom - 50 },
      // ...getNodeInitialValues(POS_NODE_TYPE)
      data: { label: 'New Node' },
    }

    rf.addNodes(newNode)
  }, [rf, vp])

  const onAddGroup = useCallback(() => {
    const { x, y, zoom } = vp
    const newNode: Node = {
      id: _.uniqueId(GRP_NODE_TYPE),
      position: { x: (540 - x) / zoom - 50, y: (410 - y) / zoom - 50 },
      ...getNodeInitialValues(GRP_NODE_TYPE),
    }
    rf.addNodes(newNode)
  }, [rf, vp])

  const onDragStart = (nodeType: string, event: DragEvent) => {
    event.dataTransfer.setData('application/reactflow', nodeType)
    event.dataTransfer.effectAllowed = 'move'
  }

  return (
    <Panel position={props.position ?? 'top-left'}>
      <ButtonGroup>
        <Tooltip showArrow={true} content="Add Normal Node" placement="bottom">
          <Button
            isIconOnly
            variant="ghost"
            radius="sm"
            onClick={onAddNode}
            draggable
            onDragStart={onDragStart.bind(null, '')}
          >
            <AddNodeIcon />
          </Button>
        </Tooltip>
        <Tooltip showArrow={true} content="Add Text Node" placement="bottom">
          <Button
            isIconOnly
            variant="ghost"
            radius="sm"
            onClick={onAddNode}
            draggable
            onDragStart={onDragStart.bind(null, TXT_NODE_TYPE)}
          >
            <AddTextIcon />
          </Button>
        </Tooltip>
        <Tooltip showArrow={true} content="Add Subflow Node" placement="bottom">
          <Button
            isIconOnly
            variant="ghost"
            radius="sm"
            onClick={onAddGroup}
            draggable
            onDragStart={onDragStart.bind(null, GRP_NODE_TYPE)}
          >
            <AddGroupIcon />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Panel>
  )
}
