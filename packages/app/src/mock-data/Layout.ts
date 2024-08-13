import { SidebarMenu } from '../types/sidebar'
import { UserData } from '../types/user'

const sidebarData: SidebarMenu = {
  links: [
    { label: 'Dashboard', icon: 'Dashboard', uri: '/' },
    { label: 'Users', icon: 'User', uri: '/users' },
  ],
  groups: [
    {
      label: 'Profile Overview',
      links: [
        { label: 'Messages', icon: 'Message', uri: '/messages' },
        { label: 'Security', icon: 'Security', uri: '/security' },
        { label: 'Settings', icon: 'Settings', uri: '/settings' },
        { label: 'Module A', icon: 'Notifications', uri: '/module-a' },
        { label: 'Module B', icon: 'Passwords', uri: '/module-b' },
        { label: 'Module C', icon: 'Goals', uri: '/module-c' },
        { label: 'Module X', icon: 'Goals', uri: '/module-x' },
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
