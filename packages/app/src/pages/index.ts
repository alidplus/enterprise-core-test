import { createBrowserRouter } from 'react-router-dom'
import { delayForDemo } from './utils';
import { lazy } from 'react';
import { getSidebarData, getUserDate } from '../mock-data/Layout';
import PanelLayout from '../layouts/PanelLayout';
import { RouterErrorBoundary } from './ErrorBoundary';
import NotFound from './NotFound';

const Dahsboard = lazy(() => delayForDemo(import('./Dahsboard')));
const Users = lazy(() => delayForDemo(import('./Users')));
const Messages = lazy(() => delayForDemo(import('./Messages')));
const Security = lazy(() => delayForDemo(import('./Security')));
const Settings = lazy(() => delayForDemo(import('./Settings')));

const router = createBrowserRouter([
  {
    Component: PanelLayout,
    ErrorBoundary: RouterErrorBoundary,
    async loader() {
      const userData = await getUserDate()
      const sidebarData = await getSidebarData()
      return {
        userData,
        sidebarData
      }
    },
    children: [
      {
        path: '/',
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
        Component: NotFound,
      }
    ],
  },
])

export default router
