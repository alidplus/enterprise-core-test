import type { PayloadAction } from '@reduxjs/toolkit'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'
import { RootState } from '..'
import { UserInput } from '../../types/user'

interface RegistrationState {
  values: Array<UserInput & { id: string }>
}

const initialState: RegistrationState = {
  values: [
    {
      id: 'asdasd',
      type: 'individual',
      name: 'Ali Ghorbani',
      email: 'alidoubleplus@gmail.com',
    },
    {
      id: 'ghjghj',
      type: 'legal',
      companyName: 'Apple Inc',
      email: 'admin@apple.com',
    },
  ],
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    addUser: (state, { payload }: PayloadAction<UserInput>) => {
      state.values.push({
        id: _.uniqueId(),
        ...payload,
      })
    },
    removeUser: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.values.findIndex((r) => r.id === payload.id)
      if (index > -1) state.values.splice(index, 1)
    },
  },
})

export const { addUser, removeUser } = registrationSlice.actions

const selectRegistration = (state: RootState) => state.registration.values

export const selectRegistrations = (type?: string) =>
  createSelector([selectRegistration], (registration) => {
    return _(registration)
      .filter((r) => !type || r.type === type)
      .value()
  })

export default registrationSlice.reducer
