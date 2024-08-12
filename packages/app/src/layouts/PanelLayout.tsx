import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from '@nextui-org/react'
import { Fragment, PropsWithChildren, useState } from 'react'
import { UserCard } from '../components/UserCard'
import * as Icons from '../components/icons'
import { Sidebar, SidebarMenu } from '../components/sidebar'

const sidebarData: SidebarMenu = {
  links: [
    { label: 'Dashboard', icon: Icons.DashboardIcon },
    { label: 'Users', icon: Icons.UserIcon },
  ],
  groups: [
    {
      label: 'Profile Overview',
      links: [
        { label: 'Messages', icon: Icons.MessageIcon },
        { label: 'Security', icon: Icons.SecurityIcon },
        { label: 'Settings', icon: Icons.SettingsIcon },
        { label: 'Notifications', icon: Icons.NotificationsIcon },
        { label: 'Passwords', icon: Icons.PasswordsIcon },
        { label: 'Goals', icon: Icons.GoalsIcon },
      ],
    },
  ],
}

const userDate = {
  name: 'Alexis Enache',
  email: 'alexis81@gmail.com',
  avatar: 'https://i.ibb.co/L1LQtBm/Ellipse-1.png',
}

export function PanelLayout({ children }: PropsWithChildren) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Fragment>
      <Navbar
        maxWidth="full"
        isBordered
        isBlurred={false}
        className="bg-gray-900 shadow-lg"
      >
        <NavbarContent>
          <NavbarBrand>
            <img src="/logo.png" alt="" width={180} />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="flex h-[calc(100dvh_-_4rem_-_1px)]">
        <Sidebar {...sidebarData} visible>
          <UserCard user={userDate} />
        </Sidebar>
        <div className="w-full overflow-y-auto p-5">{children}</div>
      </div>
    </Fragment>
  )
}
