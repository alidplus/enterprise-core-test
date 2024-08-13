import { NextUIProvider } from '@nextui-org/react'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import BrandLoading from './components/Loading'
import LazyIcon from './components/icons/LazyIcon'
import './index.css'
import { store } from './store'
import { RouterProvider } from 'react-router-dom'
import router from './pages'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NextUIProvider>
      <Provider store={store}>
        <Suspense fallback={<BrandLoading />}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>
      ,
    </NextUIProvider>
  </StrictMode>
)
