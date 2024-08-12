import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import * as Icons from "../components/icons";

export default function Users() {
  return (
    <Card>
      <CardBody>
        <CardHeader className="flex gap-3">
          <div className="flex gap-1 justify-center align-middle">
            <Icons.DashboardIcon />
            <h3 className="text-xl font-bold">Users</h3>
          </div>
        </CardHeader>
        <Divider />
        <p className="p-3">Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  )
}