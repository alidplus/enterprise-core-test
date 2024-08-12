import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import * as Icons from "../components/icons";

export default function NotFound() {
  return (
    <Card>
      <CardBody>
        <CardHeader className="flex gap-3">
          <div className="flex gap-1 justify-center align-middle">
            <h3 className="text-xl font-bold">404 We lost this page</h3>
          </div>
        </CardHeader>
        <Divider />
        <p className="p-3">we searched high and low but could't find what you're looking for</p>
      </CardBody>
    </Card>
  )
}