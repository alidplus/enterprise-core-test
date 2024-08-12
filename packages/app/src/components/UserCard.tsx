import React from 'react'
import * as Icons from './icons'

interface UserCardProps {
  user: {
    name: string
    email: string
    avatar: string
  }
}

export function UserCard(props: UserCardProps) {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-center space-x-2">
        <div>
          <img className="rounded-full" src={props.user.avatar} alt="avatar" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="cursor-pointer text-sm leading-5 text-white">
            {props.user.name}
          </p>
          <p className="cursor-pointer text-xs leading-3 text-gray-300">
            {props.user.email}
          </p>
        </div>
      </div>
      <Icons.ConfigIcon />
    </div>
  )
}
