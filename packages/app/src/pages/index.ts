import { createBrowserRouter } from 'react-router-dom'
import { delayForDemo } from './utils'
import { lazy } from 'react'
import { getSidebarData, getUserDate } from '../mock-data/Layout'
import { getPathBluePrint } from '../mock-data/module'
import PanelLayout from '../layouts/PanelLayout'
import { RouterErrorBoundary } from './ErrorBoundary'

const Dahsboard = lazy(() => delayForDemo(import('./Dahsboard')))
const Users = lazy(() => delayForDemo(import('./Users')))
const Messages = lazy(() => delayForDemo(import('./Messages')))
const Security = lazy(() => delayForDemo(import('./Security')))
const Settings = lazy(() => delayForDemo(import('./Settings')))
const ModuleLoader = lazy(() => delayForDemo(import('./ModuleLoader')))

const router = createBrowserRouter([
  {
    Component: PanelLayout,
    ErrorBoundary: RouterErrorBoundary,
    async loader() {
      const userData = await getUserDate()
      const sidebarData = await getSidebarData()
      return {
        userData,
        sidebarData,
      }
    },

    children: [
      {
        path: '',
        Component: Dahsboard,
      },
      {
        path: '/users',
        Component: Users,
      },
      {
        path: '/messages',
        Component: Messages,
      },
      {
        path: '/security',
        Component: Security,
      },
      {
        path: '/settings',
        Component: Settings,
      },
      {
        path: '*',
        shouldRevalidate: ({ currentUrl: c, nextUrl: n }) =>
          c.pathname !== n.pathname,
        async loader({ params }) {
          if (!params['*']) return { bluePrintData: null }
          const bluePrintData = await getPathBluePrint(params['*'])

          return { bluePrintData }
        },
        Component: ModuleLoader,
      },
    ],
  },
])

export default router
