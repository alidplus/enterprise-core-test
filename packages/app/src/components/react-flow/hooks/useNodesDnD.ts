import { Node, applyNodeChanges, useReactFlow } from '@xyflow/react'
import { MouseEvent, useState } from 'react'
import { GRP_NODE_TYPE } from '../nodes/GroupNode'
import { ReactFlowEditorProps } from '../types'

export default function useNodesDnD(props: ReactFlowEditorProps) {
  const reactFlow = useReactFlow()
  const [target, setTarget] = useState<Node | null>(null)

  const onNodeDragStart = (event: MouseEvent, node: Node) => {
    setTarget(null)
  }

  const onNodeDrag = (evt: MouseEvent, node: Node) => {
    // calculate the center point of the node from position and dimensions
    // const centerX = node.position.x + (node.measured?.width ?? 100) / 2;
    // const centerY = node.position.y + (node.measured?.height ?? 50) / 2;

    // find overlapping nodes
    const intersectingNodes = reactFlow.getIntersectingNodes(node)
    const targetNode = intersectingNodes?.[0]
    if (targetNode && targetNode.id !== node.parentId) setTarget(targetNode)
    else setTarget(null)
  }

  const onNodeDragStop = async (evt: MouseEvent, node: Node) => {
    if (reactFlow && node && target && target.type === GRP_NODE_TYPE) {
      const dragNodeId = node.id,
        targetNodeId = target.id
      const dragNode = reactFlow.getNode(dragNodeId)
      const targetNode = reactFlow.getNode(targetNodeId)
      if (dragNode && targetNode)
        props.onChange?.({
          edges: props.value.edges,
          nodes: applyNodeChanges(
            [
              {
                type: 'replace',
                id: dragNodeId,
                item: {
                  ...dragNode,
                  position: {
                    x: dragNode.position.x - targetNode.position.x,
                    y: dragNode.position.y - targetNode.position.y,
                  },
                  parentId: targetNodeId,
                  extent: 'parent',
                },
              },
            ],
            [...props.value.nodes]
          ).sort(sortNodes),
        })
    }
    setTarget(null)
  }

  return {
    onNodeDrag,
    onNodeDragStart,
    onNodeDragStop,
  }
}

const sortNodes = (a: Node, b: Node): number => {
  if (a.parentId && b.parentId) return 0
  return a.parentId && !b.parentId ? 1 : -1
}
