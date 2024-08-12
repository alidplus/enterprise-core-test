import { Button } from '@nextui-org/button'
import { CameraIcon, UserIcon } from './components/icons'
import { PanelLayout } from './layouts/PanelLayout'
import { Card, CardBody } from '@nextui-org/react'

function App() {
  return (
    <PanelLayout>
      <Card>
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
      </Card>
    </PanelLayout>
  )
}

export default App
