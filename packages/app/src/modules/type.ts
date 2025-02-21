import { ComponentType } from 'react'
import { ModuleAConfig } from './ModuleA/config'
import { RegisteredUsersModuleConfig } from './RegisteredUsers/config'
import { RegistrationFormModuleConfig } from './RegistrationForm/config'

import * as moduleDefs from '.'
import { SidebarMenu } from '../types/sidebar'

export type ModuleDefs = typeof moduleDefs
export type ModuleNames = keyof ModuleDefs

export interface ModuleDefinationBase {
  title: string
}

export interface ModuleConfigBase {
  sidebar?: SidebarMenu
  version?: string
}

export interface ModuleComputedProps {}

export interface ModuleComponentProps<C extends ModuleConfigBase>
  extends ModuleComputedProps {
  config: C
}

export interface ModuleDefination<C extends ModuleConfigBase>
  extends ModuleDefinationBase {
  Component: ComponentType<ModuleComponentProps<C>>
  defaultConfig: C
}

export type ModuleConfig<MN extends ModuleNames> = MN extends 'moduleA'
  ? ModuleAConfig
  : MN extends 'registeredUsersModule'
    ? RegisteredUsersModuleConfig
    : MN extends 'registrationFormModule'
      ? RegistrationFormModuleConfig
      : never

export interface RegisteredUsersModuleluePrint<
  MN extends ModuleNames = ModuleNames,
> {
  t: MN
  c?: Partial<ModuleConfig<MN>>
}

// export interface LoadableModule {
//   i: string
//   title?: string
//   frameLess?: boolean
//   perItem?: boolean
//   name: ModuleNames
//   Component: ComponentType
// }
