import { lazy } from 'react'
import { delayForDemo } from '../../pages/utils'
import { ModuleDefination } from '../type'
import { RegistrationFormModuleConfig } from './config'

const Component = lazy(() => delayForDemo(import('./Component')))

export const registrationFormModule: ModuleDefination<RegistrationFormModuleConfig> =
  {
    title: 'Registration Form Module',
    Component,
    defaultConfig: {
      label: 'Registration Form',
    },
  }
