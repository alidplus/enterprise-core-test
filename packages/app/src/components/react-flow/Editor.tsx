import { Card, CardBody } from '@nextui-org/react'
import {
  Background,
  BackgroundVariant,
  ControlButton,
  Controls,
  EdgeTypes,
  Panel,
  ReactFlow,
  ReactFlowInstance,
  ReactFlowProvider,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useReactFlow,
  useStore,
  type DefaultEdgeOptions,
  type FitViewOptions,
  type Node,
  type OnConnect,
  type OnEdgesChange,
  type OnNodesChange,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import _ from 'lodash'
import { DragEvent, useCallback, useState } from 'react'
import useNodesDnD from './hooks/useNodesDnD'
import nodeTypes, { getNodeInitialValues } from './nodes'
import { AddNodeToolbar } from './toolbars/AddNodeToolbar'
import { ReactFlowEditorProps } from './types'
import useEditorModel from './hooks/useModel'
import useDnD from './hooks/useDnD'

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
}

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true,
}

const edgeTypes: EdgeTypes = {}

export default function ReactFlowEditor(props: ReactFlowEditorProps) {
  const { nodes, edges } = props.value
  const model = useEditorModel(props)
  const nodesDnd = useNodesDnD(props)
  const dnd = useDnD()

  function logNodes() {
    console.log(props.value)
  }

  return (
    <Card>
      <CardBody className="h-[calc(100vh_-_110px)] w-full">
        <ReactFlow
          nodes={nodes}
          nodeTypes={nodeTypes}
          edges={edges}
          edgeTypes={edgeTypes}
          onNodesChange={model.onNodesChange}
          onEdgesChange={model.onEdgesChange}
          onConnect={model.onConnect}
          onNodeDragStart={nodesDnd.onNodeDragStart}
          onNodeDrag={nodesDnd.onNodeDrag}
          onNodeDragStop={nodesDnd.onNodeDragStop}
          onDrop={dnd.onDrop}
          onDragOver={dnd.onDragOver}
          fitView
          fitViewOptions={fitViewOptions}
          defaultEdgeOptions={defaultEdgeOptions}
        >
          <Background variant={BackgroundVariant.Dots} />
          <Controls>
            <ControlButton onClick={() => logNodes()}>log</ControlButton>
          </Controls>
          <AddNodeToolbar position="top-left" />
          <ViewportLogger />
        </ReactFlow>
      </CardBody>
    </Card>
  )
}

function ViewportLogger() {
  const viewport = useStore(
    (s) => s.transform.map((n) => n.toFixed(1)).join(', ')
    // (s) => `x: ${s.transform[0].toFixed(1)}, y: ${s.transform[1].toFixed(1)}`,
  )

  return <Panel position="top-right">{viewport}</Panel>
}
