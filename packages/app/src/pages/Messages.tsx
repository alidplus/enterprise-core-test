import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import * as Icons from '../components/icons'

export default function Messages() {
  return (
    <Card>
      <CardBody>
        <CardHeader className="flex gap-3">
          <div className="flex justify-center gap-1 align-middle">
            <Icons.MessageIcon />
            <h3 className="text-xl font-bold">Messages</h3>
          </div>
        </CardHeader>
        <Divider />
        <p className="p-3">
          Make beautiful websites regardless of your design experience.
        </p>
      </CardBody>
    </Card>
  )
}
