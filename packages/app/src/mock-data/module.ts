import { UserData } from '../types/user'
import { PathBluePrint } from '../types/modules'
import _ from 'lodash'
import { SidebarMenu } from '../types/sidebar'

const pathBluePrintData: UserData = {
  fullName: 'Alexis Enache',
  email: 'alexis81@gmail.com',
  avatar: 'https://i.ibb.co/L1LQtBm/Ellipse-1.png',
}

const moduleAMockSidebar: SidebarMenu = {
  links: [],
  groups: [
    {
      label: 'Module A',
      links: [
        { label: 'Action 1', uri: '/module-a/act-1' },
        { label: 'Action 2', uri: '/module-a/act-3' },
        { label: 'Action 3', uri: '/module-a/act-3' },
      ],
    },
  ],
}

const registrationModuleSidebar: SidebarMenu = {
  links: [],
  groups: [
    {
      label: 'Registration',
      links: [
        { label: 'Register as person', uri: '/register' },
        { label: 'Register as company', uri: '/register/2' },
      ],
    },
  ],
}

export async function getPathBluePrint(
  path: string
): Promise<PathBluePrint | null> {
  const [moduleUri, version = ''] = path.split('/').filter((p) => !!p)

  if (moduleUri === 'module-a')
    return {
      path,
      module: {
        t: 'moduleA',
        c: {
          label: 'hello from module A',
          sidebar: moduleAMockSidebar,
          version,
        },
      },
    }
  else if (moduleUri === 'module-b')
    return {
      path,
      module: { t: 'moduleB', c: { label: 'hello from module B', version } },
    }
  else if (moduleUri === 'register')
    return {
      path,
      module: {
        t: 'registrationFormModule',
        c: {
          label: 'Registration Form',
          sidebar: registrationModuleSidebar,
          version,
        },
      },
    }

  return null
}
