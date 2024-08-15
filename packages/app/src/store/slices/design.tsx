import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { initialReactFlowState } from '../data/initialReactFlowState'

const initialState = JSON.stringify(initialReactFlowState)

export const designSlice = createSlice({
  name: 'design',
  initialState,
  reducers: {
    updateDesign: (_, { payload }: PayloadAction<string>) => {
      return payload
    },
  },
})

export const { updateDesign } = designSlice.actions

export const selectDesignModel = (state: RootState) => state.design

export default designSlice.reducer
