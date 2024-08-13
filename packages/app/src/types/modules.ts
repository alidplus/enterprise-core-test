import { RegisteredUsersModuleluePrint } from '../modules/type'

export interface PathBluePrint {
  path: string
  module: RegisteredUsersModuleluePrint
}

export type AppBluePrints = Array<PathBluePrint>
