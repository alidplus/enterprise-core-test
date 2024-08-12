import { NextUIProvider } from '@nextui-org/react'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './pages/index.ts'
import BrandLoading from './components/Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <Suspense fallback={<BrandLoading />}>
        <RouterProvider router={router} />
      </Suspense>
    </NextUIProvider>
  </StrictMode>
)
