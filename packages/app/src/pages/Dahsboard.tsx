import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import LazyIcon from '../components/icons/LazyIcon'

export default function Dahsboard() {
  return (
    <Card>
      <CardBody>
        <CardHeader className="flex gap-3">
          <div className="flex justify-center gap-1 align-middle">
            <LazyIcon name="Dashboard" />
            <h3 className="text-xl font-bold">Dahsboard</h3>
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
