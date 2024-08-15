import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from '@nextui-org/react'
import { useAutoBindSidebarMenu } from '../hooks'
import { ModuleComponentProps } from '../type'
import { RegisteredUsersModuleConfig } from './config'
import { selectRegistrations } from '../../store/slices/registration'
import { useAppSelector } from '../../store/hooks'
import { useLocation } from 'react-router-dom'
import { useEffect, useMemo } from 'react'

export default function Component(
  props: ModuleComponentProps<RegisteredUsersModuleConfig>
) {
  useAutoBindSidebarMenu('registeredUsersModule', props.config.sidebar)
  const { search } = useLocation()
  const type = useMemo(() => {
    const urlParams = new URLSearchParams(search)
    return urlParams.get('type') || undefined
  }, [search])
  const registration = useAppSelector(selectRegistrations(type))

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>EMAIL</TableColumn>
        <TableColumn>TYPE</TableColumn>
      </TableHeader>
      <TableBody>
        {registration.map((reg) =>
          reg.type === 'individual' ? (
            <TableRow key={reg.id}>
              <TableCell>{reg.name}</TableCell>
              <TableCell>{reg.email}</TableCell>
              <TableCell>Individual</TableCell>
            </TableRow>
          ) : (
            <TableRow key={reg.id}>
              <TableCell>{reg.companyName}</TableCell>
              <TableCell>{reg.email}</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  )
}
