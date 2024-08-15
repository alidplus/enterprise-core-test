import { Node, NodeTypes } from '@xyflow/react'
import PositionNode, { POS_NODE_TYPE } from './PositionNode'
import GroupNode, { GRP_NODE_TYPE } from './GroupNode'
import TextNode, { TXT_NODE_TYPE } from './TextNode'

const nodeTypes: NodeTypes = {
  [POS_NODE_TYPE]: PositionNode,
  [GRP_NODE_TYPE]: GroupNode,
  [TXT_NODE_TYPE]: TextNode,
}

export default nodeTypes

export type NodeNames = keyof typeof nodeTypes

export const getNodeInitialValues = (
  name?: string
): Partial<Omit<Node, 'data'>> & Pick<Node, 'data'> => {
  switch (name) {
    case POS_NODE_TYPE:
      return {
        type: POS_NODE_TYPE,
        data: { label: 'New Node' },
      }
    case GRP_NODE_TYPE:
      return {
        type: GRP_NODE_TYPE,
        data: {},
        style: {
          width: '200px',
          height: '200px',
        },
      }
    case TXT_NODE_TYPE:
      return {
        type: TXT_NODE_TYPE,
        data: { label: 'New Text Node' },
        dragHandle: '.txt-drag-handle',
      }
    default:
      return { data: {} }
  }
}
