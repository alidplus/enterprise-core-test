import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import { useAutoBindSidebarMenu } from '../hooks'
import { ModuleComponentProps } from '../type'
import { RegistrationFormModuleConfig } from './config'
import RegistrationForm from './ui/RegistrationForm'
import RegistrationFormV2 from './ui/RegistrationForm.v2'

export default function Component({
  config: c,
}: ModuleComponentProps<RegistrationFormModuleConfig>) {
  useAutoBindSidebarMenu('registrationFormModule', c.sidebar)
  const FormUiComponent =
    c.version === '2' ? RegistrationFormV2 : RegistrationForm
  return (
    <Card>
      <CardBody>
        <CardHeader className="flex gap-3">
          <div className="flex justify-center gap-1 align-middle">
            <h3 className="text-xl font-bold">{c.label}</h3>
          </div>
        </CardHeader>
        <Divider />
        <FormUiComponent />
      </CardBody>
    </Card>
  )
}
