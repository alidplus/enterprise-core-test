import { AppFlowDiagram } from '../../types/appFlow'

export const initialReactFlowState: AppFlowDiagram = {
  edges: [
    {
      animated: true,
      source: '4',
      target: 'GRP1',
      id: 'xy-edge__4-GRP1',
    },
    {
      animated: true,
      source: '5',
      target: 'GRP1',
      id: 'xy-edge__5-GRP1',
    },
    {
      animated: true,
      source: 'POS_XY2',
      target: 'POS_XY3',
      id: 'xy-edge__POS_XY2-POS_XY3',
    },
    {
      animated: true,
      source: 'POS_XY3',
      target: '1',
      id: 'xy-edge__POS_XY3-1',
    },
  ],
  nodes: [
    {
      id: '1',
      position: {
        x: 1236.6537466265288,
        y: 401.14364330531,
      },
      data: {
        label: 'Node 1',
      },
      measured: {
        width: 150,
        height: 40,
      },
      selected: true,
      dragging: false,
    },
    {
      id: '5',
      position: {
        x: 888.75718289337,
        y: 311.589759411454,
      },
      data: {
        label: 'Node 2',
      },
      type: 'TXT',
      dragHandle: '.txt-drag-handle',
      measured: {
        width: 148,
        height: 48,
      },
      selected: false,
      dragging: false,
    },
    {
      id: '4',
      position: {
        x: 1001.6077441099206,
        y: 390.2141894639578,
      },
      data: {
        label: 'Node 3',
      },
      type: 'TXT',
      dragHandle: '.txt-drag-handle',
      measured: {
        width: 148,
        height: 48,
      },
      selected: false,
      dragging: false,
    },
    {
      id: 'GRP1',
      position: {
        x: 1141.750064830329,
        y: 164.7496758483557,
      },
      data: {},
      type: 'GRP',
      style: {
        width: '200px',
        height: '200px',
      },
      measured: {
        width: 200,
        height: 200,
      },
      selected: false,
      dragging: false,
      resizing: false,
    },
    {
      id: 'POS_XY3',
      position: {
        x: 21.681800760440183,
        y: 123.23771283208748,
      },
      data: {
        label: 'Node 4',
      },
      measured: {
        width: 150,
        height: 40,
      },
      selected: false,
      dragging: false,
      parentId: 'GRP1',
      extent: 'parent',
    },
    {
      id: 'POS_XY2',
      position: {
        x: 43.8719239267773,
        y: 36.91506767913978,
      },
      data: {
        label: 'Node 5',
      },
      type: 'TXT',
      dragHandle: '.txt-drag-handle',
      measured: {
        width: 148,
        height: 48,
      },
      selected: false,
      dragging: false,
      parentId: 'GRP1',
      extent: 'parent',
    },
  ],
}
