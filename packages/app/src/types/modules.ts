import { ModuleBluePrint } from '../modules/type'

export interface PathBluePrint {
  path: string
  module: ModuleBluePrint
}

export type AppBluePrints = Array<PathBluePrint>
