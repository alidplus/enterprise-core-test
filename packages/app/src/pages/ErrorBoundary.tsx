"client side"

import { Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Code, Divider } from "@nextui-org/react";
import { ReactNode } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export function RouterErrorBoundary() {
  const navigate = useNavigate()
  const e = useRouteError()
  let type: string = 'Unknown Error'
  let message: string = ''
  let stack: ReactNode = undefined
  if (e instanceof Error) {
    type = 'Error'
    message = e.message
    stack = e.stack
  } else if (typeof e === 'string') {
    type = 'Error Meesage'
    message = e
  }
  function reload() {
    window.location.reload()
  }
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md">Error</p>
          <p className="text-small text-default-500">{message}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <Code color="danger">
          <pre>{stack}</pre>
        </Code>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Button color="success" onClick={() => navigate('/')}>Home</Button>
          <Button color="danger" onClick={reload}>Reload</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

interface ErrorBoundaryState {
  hasError: boolean
  type: string
  message: string
  stack: ReactNode
}