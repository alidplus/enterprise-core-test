import { lazy } from 'react'
import { delayForDemo } from '../../pages/utils'
import { ModuleDefination } from '../type'
import { ModuleCConfig } from './config'

const Component = lazy(() => delayForDemo(import('./Component')))

export const moduleC: ModuleDefination<ModuleCConfig> = {
  title: 'به زودی',
  Component,
}
