import { lazy } from 'react'
import { delayForDemo } from '../../pages/utils'
import { ModuleDefination } from '../type'
import { ModuleAConfig } from './config'

const Component = lazy(() => delayForDemo(import('./Component')))

export const moduleA: ModuleDefination<ModuleAConfig> = {
  title: 'به زودی',
  Component,
}
