import { ComponentType } from 'react'
import { ModuleAConfig } from './ModuleA/config'
import { ModuleBConfig } from './ModuleB/config'
import { ModuleCConfig } from './ModuleC/config'

import * as moduleDefs from '.'
import { SidebarMenu } from '../types/sidebar'

export type ModuleDefs = typeof moduleDefs
export type ModuleNames = keyof ModuleDefs

export interface ModuleDefinationBase {
  title: string
}

export interface ModuleConfigBase {
  sidebar?: SidebarMenu
}

export interface ModuleComputedProps { }

export interface ModuleComponentProps<C extends ModuleConfigBase>
  extends ModuleComputedProps {
  config: C
}

export interface ModuleDefination<C extends ModuleConfigBase>
  extends ModuleDefinationBase {
  Component: ComponentType<ModuleComponentProps<C>>
}

export type ModuleConfig<MN extends ModuleNames> = MN extends 'moduleA'
  ? ModuleAConfig
  : MN extends 'moduleB'
  ? ModuleBConfig
  : MN extends 'moduleC'
  ? ModuleCConfig
  : never

export interface ModuleBluePrint<MN extends ModuleNames = ModuleNames> {
  t: MN
  c: ModuleConfig<MN>
}

// export interface LoadableModule {
//   i: string
//   title?: string
//   frameLess?: boolean
//   perItem?: boolean
//   name: ModuleNames
//   Component: ComponentType
// }
