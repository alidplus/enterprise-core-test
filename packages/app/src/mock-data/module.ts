import { UserData } from '../types/user'
import { PathBluePrint } from '../types/modules'
import _ from 'lodash'

const pathBluePrintData: UserData = {
  name: 'Alexis Enache',
  email: 'alexis81@gmail.com',
  avatar: 'https://i.ibb.co/L1LQtBm/Ellipse-1.png',
}

export async function getPathBluePrint(
  path: string
): Promise<PathBluePrint | null> {
  if (path === 'module-a')
    return {
      path,
      module: { t: 'moduleA', c: { title: 'hello from module A' } },
    }
  else if (path === 'module-b')
    return {
      path,
      module: { t: 'moduleB', c: { title: 'hello from module B' } },
    }
  else if (path === 'module-c')
    return {
      path,
      module: { t: 'moduleC', c: { title: 'hello from module C' } },
    }

  return null
}
