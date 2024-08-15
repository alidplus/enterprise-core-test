import _ from 'lodash'
import { DragEvent, useCallback } from 'react'
import { getNodeInitialValues } from '../nodes'
import { Node, useReactFlow } from '@xyflow/react'

export default function useDnD() {
  const reactFlow = useReactFlow()

  const onDragOver = useCallback((event: DragEvent) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }, [])

  const onDrop = useCallback(
    (event: DragEvent) => {
      event.preventDefault()

      const position = reactFlow.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      })

      let type: string = event.dataTransfer.getData('application/reactflow')

      if (typeof type === 'undefined' || !type) {
        const newNode: Node = {
          id: _.uniqueId(type),
          position,
          data: { label: 'new Node' },
        }
        return reactFlow.addNodes(newNode)
      }
      const newNode: Node = {
        id: _.uniqueId(type),
        position,
        ...getNodeInitialValues(type),
      }
      return reactFlow.addNodes(newNode)
    },
    [reactFlow]
  )

  return {
    onDrop,
    onDragOver,
  }
}
