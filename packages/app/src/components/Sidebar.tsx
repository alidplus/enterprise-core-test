import clsx from 'clsx'
import { PropsWithChildren, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { tv } from 'tailwind-variants'
import { MenuGroup, MenuItem, SidebarMenu } from '../types/sidebar'
import { useAppSelector } from '../store/hooks'
import {
  selectSidebarLinks,
  selectSidebarGroups,
} from '../store/slices/sidebar'
import ChevronUpIcon from './icons/ChevronUpIcon'
import LazyIcon from './icons/LazyIcon'

const menuButton = tv({
  base: 'flex w-full items-center space-x-6 rounded justify-start',
  variants: {
    isMain: {
      false:
        'focus:bg-gray-700 focus:text-white hover:bg-gray-700 hover:text-white md:w-60 px-3 py-2 text-gray-400',
      true: 'focus:outline-none text-white focus:text-indigo-400',
    },
  },
})

export function MenuLink(props: MenuItem) {
  const navigate = useNavigate()
  const handleClick = () => {
    if (props.uri) navigate(props.uri)
  }
  return (
    <button
      onClick={props.onClick ?? handleClick}
      className={menuButton({ isMain: props.main })}
    >
      <LazyIcon name={props.icon} />
      <p className="text-base leading-4">{props.label}</p>
    </button>
  )
}

export function SidebarMenuGroup(props: MenuGroup) {
  const [isOpen, setOpen] = useState(props.default ?? false)
  return (
    <div className="flex w-full flex-col items-center justify-start border-b border-gray-600 px-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between space-x-14 py-5 text-left text-white focus:text-indigo-400 focus:outline-none"
      >
        <p className="text-sm uppercase leading-5">{props.label}</p>
        <ChevronUpIcon className={clsx({ 'rotate-180': isOpen })} />
      </button>
      <div
        className={clsx(
          'flex w-full flex-col items-start justify-start pb-1 md:w-auto',
          { hidden: !isOpen }
        )}
      >
        {props.links.map((l) => (
          <MenuLink key={l.label} {...l} />
        ))}
      </div>
    </div>
  )
}

interface SidebarProps {
  visible?: boolean
}

export function Sidebar(props: PropsWithChildren<SidebarProps>) {
  const links = useAppSelector(selectSidebarLinks)
  const groups = useAppSelector(selectSidebarGroups)
  return (
    <div
      className={clsx(
        'flex w-fit transform flex-col bg-gray-900 shadow-lg transition duration-500 ease-in-out',
        {
          '-translate-x-full': !props.visible,
          'translate-x-0': props.visible,
        }
      )}
    >
      <div
        id="Main"
        className="flex h-full w-full flex-col items-start justify-start sm:w-64 xl:rounded-r"
      >
        <div className="mt-6 flex w-full flex-col items-center justify-start space-y-3 border-b border-gray-600 pb-5 pl-4">
          {links.map((link) => (
            <MenuLink key={link.label} {...link} main />
          ))}
        </div>
        {groups.map((group) => (
          <SidebarMenuGroup key={group.label} {...group} default />
        ))}
        <div className="h-full"></div>
        <div className="mt-auto flex w-full flex-col items-center justify-between space-y-32 px-6 py-6">
          {props.children}
        </div>
      </div>
    </div>
  )
}
