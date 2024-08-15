import { Dispatch, SetStateAction } from 'react'
import { AppFlowDiagram } from '../../types/appFlow'

export interface ReactFlowEditorProps {
  value: AppFlowDiagram
  onChange: Dispatch<SetStateAction<AppFlowDiagram>>
}
