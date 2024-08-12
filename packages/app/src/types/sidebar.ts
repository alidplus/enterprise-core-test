import { ComponentType } from "react"

export interface MenuItem {
  label: string
  main?: true
  uri?: string
  onClick?: () => void
  icon?: ComponentType
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