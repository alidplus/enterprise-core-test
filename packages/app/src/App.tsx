import { Button } from "@nextui-org/button";
import { CameraIcon, UserIcon } from './components/icons';

function App() {
  return (
    <div className="flex gap-4 items-center">
      <Button color="success" endContent={<CameraIcon />}>
        Take a photo
      </Button>
      <Button color="danger" variant="bordered" startContent={<UserIcon />}>
        Delete user
      </Button>
    </div>
  )
}

export default App
