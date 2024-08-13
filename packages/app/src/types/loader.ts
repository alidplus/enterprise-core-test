import { PathBluePrint } from './modules'
import { SidebarMenu } from './sidebar'
import { UserData } from './user'

export interface LayoutRouterData {
  sidebarData: SidebarMenu
  userData: UserData
}

export interface BluePrintRouterData {
  bluePrintData: PathBluePrint | null
}
