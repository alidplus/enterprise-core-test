import { useAutoBindSidebarMenu } from '../hooks'
import { ModuleComponentProps } from '../type'
import { ModuleBConfig } from './config'

export default function Component(props: ModuleComponentProps<ModuleBConfig>) {
  useAutoBindSidebarMenu('moduleB', props.config.sidebar)
  return (
    <div>
      <i>Module B</i>
      <div>
        <p>{props.config.content}</p>
      </div>
    </div>
  )
}
