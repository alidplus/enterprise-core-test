import { useLoaderData } from 'react-router-dom'
import * as moduleDefs from '../modules'
import { BluePrintRouterData } from '../types/loader'
import NotFound from './NotFound'
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react'

function useBluePrintRouterData(): BluePrintRouterData {
  const data = useLoaderData()
  return data as BluePrintRouterData
}

export default function ModuleLoader() {
  const { bluePrintData } = useBluePrintRouterData()
  if (!bluePrintData) return <NotFound />
  const { module } = bluePrintData
  const ModuleComponent = moduleDefs[module.t]?.Component
  return (
    <Card>
      <CardBody>
        <CardHeader className="flex gap-3">
          <div className="flex justify-center gap-1 align-middle">
            <h3 className="text-xl font-bold">{module.t}</h3>
          </div>
        </CardHeader>
        <Divider />
        <ModuleComponent config={module.c} />
      </CardBody>
    </Card>
  )
}
