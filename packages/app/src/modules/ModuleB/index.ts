import { lazy } from 'react'
import { delayForDemo } from '../../pages/utils'
import { ModuleDefination } from '../type'
import { ModuleBConfig } from './config'

const Component = lazy(() => delayForDemo(import('./Component')))

export const moduleB: ModuleDefination<ModuleBConfig> = {
  title: 'Module B',
  Component,
  defaultConfig: {
    content: 'Module B is about showing some demo content',
  },
}
