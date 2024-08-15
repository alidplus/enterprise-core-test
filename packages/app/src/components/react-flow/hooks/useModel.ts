import {
  OnNodesChange,
  applyNodeChanges,
  OnEdgesChange,
  applyEdgeChanges,
  OnConnect,
  addEdge,
} from '@xyflow/react'
import { useCallback } from 'react'
import { ReactFlowEditorProps } from '../types'

export default function useEditorModel(props: ReactFlowEditorProps) {
  const onNodesChange: OnNodesChange = useCallback(
    (changes) =>
      props.onChange(({ edges, nodes }) => ({
        edges,
        nodes: applyNodeChanges(changes, nodes),
      })),
    [props.onChange]
  )
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) =>
      props.onChange(({ edges, nodes }) => ({
        edges: applyEdgeChanges(changes, edges),
        nodes,
      })),
    [props.onChange]
  )
  const onConnect: OnConnect = useCallback(
    (connection) =>
      props.onChange(({ edges, nodes }) => ({
        edges: addEdge(connection, edges),
        nodes,
      })),
    [props.onChange]
  )

  return {
    onNodesChange,
    onEdgesChange,
    onConnect,
  }
}
