import { ReactFlowProvider } from '@xyflow/react'
import _ from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import ReactFlowEditor from '../components/react-flow/Editor'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { selectDesignModel, updateDesign } from '../store/slices/design'
import { AppFlowDiagram } from '../types/appFlow'

export default function Design() {
  const dispaatch = useAppDispatch()
  const initialState = useAppSelector(selectDesignModel)
  const [state, setState] = useState<AppFlowDiagram>(JSON.parse(initialState))

  // auto save
  const saveState = useCallback(
    (model: AppFlowDiagram) => {
      dispaatch(updateDesign(JSON.stringify(model)))
    },
    [dispaatch]
  )
  const delayedSaveState = useCallback(_.debounce(saveState, 1000), [saveState])
  useEffect(() => delayedSaveState(state), [state])

  return (
    <ReactFlowProvider>
      <ReactFlowEditor value={state} onChange={setState} />
    </ReactFlowProvider>
  )
}
