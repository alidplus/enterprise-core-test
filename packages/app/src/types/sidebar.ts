import { IconNames } from '../components/icons/LazyIcon'

export interface MenuItem {
  label: string
  main?: true
  uri?: string
  onClick?: () => void
  icon?: IconNames
}

export interface MenuGroup {
  label: string
  default?: true
  links: MenuItem[]
}

export interface SidebarMenu {
  links: MenuItem[]
  groups: MenuGroup[]
}
