import { SidebarMenu } from '../types/sidebar'
import { UserData } from '../types/user'
import * as Icons from '../components/icons'

const sidebarData: SidebarMenu = {
  links: [
    { label: 'Dashboard', icon: Icons.DashboardIcon, uri: '/' },
    { label: 'Users', icon: Icons.UserIcon, uri: '/users' },
  ],
  groups: [
    {
      label: 'Profile Overview',
      links: [
        { label: 'Messages', icon: Icons.MessageIcon, uri: '/messages' },
        { label: 'Security', icon: Icons.SecurityIcon, uri: '/security' },
        { label: 'Settings', icon: Icons.SettingsIcon, uri: '/settings' },
        { label: 'Module A', icon: Icons.NotificationsIcon, uri: '/module-a' },
        { label: 'Module B', icon: Icons.PasswordsIcon, uri: '/module-b' },
        { label: 'Module C', icon: Icons.GoalsIcon, uri: '/module-c' },
        { label: 'Module X', icon: Icons.GoalsIcon, uri: '/module-x' },
      ],
    },
  ],
}

export async function getSidebarData(): Promise<SidebarMenu> {
  return sidebarData
}

const userDate: UserData = {
  name: 'Alexis Enache',
  email: 'alexis81@gmail.com',
  avatar: 'https://i.ibb.co/L1LQtBm/Ellipse-1.png',
}

export async function getUserDate(): Promise<UserData> {
  return userDate
}
