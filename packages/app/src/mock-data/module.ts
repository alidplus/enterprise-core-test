import { UserData } from '../types/user'
import { PathBluePrint } from '../types/modules'
import _ from 'lodash'
import { SidebarMenu } from '../types/sidebar'

const pathBluePrintData: UserData = {
  name: 'Alexis Enache',
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

const moduleBMockSidebar: SidebarMenu = {
  links: [],
  groups: [
    {
      label: 'Module B',
      links: [
        { label: 'call to action', uri: '/module-b/cta' },
      ],
    },
  ],
}


export async function getPathBluePrint(
  path: string
): Promise<PathBluePrint | null> {
  const moduleUri = path.split('/').filter(p => !!p).shift()

  if (moduleUri === 'module-a')
    return {
      path,
      module: { t: 'moduleA', c: { title: 'hello from module A', sidebar: moduleAMockSidebar } },
    }
  else if (moduleUri === 'module-b')
    return {
      path,
      module: { t: 'moduleB', c: { title: 'hello from module B', sidebar: moduleBMockSidebar } },
    }
  else if (moduleUri === 'module-c')
    return {
      path,
      module: { t: 'moduleC', c: { title: 'hello from module C' } },
    }

  return null
}
