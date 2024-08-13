import _ from 'lodash'
import { useLoaderData } from 'react-router-dom'
import * as moduleDefs from '../modules'
import { BluePrintRouterData } from '../types/loader'
import NotFound from './NotFound'

function useBluePrintRouterData(): BluePrintRouterData {
  const data = useLoaderData()
  return data as BluePrintRouterData
}

export default function ModuleLoader() {
  const { bluePrintData } = useBluePrintRouterData()
  if (!bluePrintData) return <NotFound />
  const { module } = bluePrintData
  const ModuleComponent = moduleDefs[module.t]?.Component
  const config = _.merge(moduleDefs[module.t].defaultConfig, module.c)
  return <ModuleComponent config={config as any} />
}
