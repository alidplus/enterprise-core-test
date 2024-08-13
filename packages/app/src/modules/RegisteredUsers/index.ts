import { lazy } from 'react'
import { delayForDemo } from '../../pages/utils'
import { ModuleDefination } from '../type'
import { RegisteredUsersModuleConfig } from './config'

const Component = lazy(() => delayForDemo(import('./Component')))

export const registeredUsersModule: ModuleDefination<RegisteredUsersModuleConfig> =
  {
    title: 'Registered Users',
    Component,
    defaultConfig: {
      content: 'Registered Users is about showing some demo content',
    },
  }
