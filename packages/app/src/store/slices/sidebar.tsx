import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'
import { SidebarMenu } from '../../types/sidebar'
import { ModuleNames } from '../../modules/type'
import _ from 'lodash'

interface SidebarState {
  menus: { [key: string]: SidebarMenu }
}

const initialState: SidebarState = {
  menus: {},
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    bindMenu: (
      state,
      {
        payload,
      }: PayloadAction<{ key: '@@APP' | ModuleNames; menu?: SidebarMenu }>
    ) => {
      if (payload.menu) state.menus[payload.key] = payload.menu
    },
    unbindMenu: (state, { payload }: PayloadAction<{ key: ModuleNames }>) => {
      delete state.menus[payload.key]
    },
  },
})

export const { bindMenu, unbindMenu } = sidebarSlice.actions

const selectMenus = (state: RootState) => state.sidebar.menus

export const selectSidebarLinks = createSelector([selectMenus], (menus) => {
  return _(menus)
    .values()
    .map((m) => m.links)
    .flatten()
    .value()
})

export const selectSidebarGroups = createSelector([selectMenus], (menus) => {
  return _(menus)
    .values()
    .map((m) => m.groups)
    .flatten()
    .value()
})

export default sidebarSlice.reducer
