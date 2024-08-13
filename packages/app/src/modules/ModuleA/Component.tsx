import { useAutoBindSidebarMenue } from '../hooks'
import { ModuleComponentProps } from '../type'
import { ModuleAConfig } from './config'

export default function Component(props: ModuleComponentProps<ModuleAConfig>) {
  useAutoBindSidebarMenue('moduleA', props.config.sidebar)

  return (
    <div>
      <strong>{props.config.title}</strong>
      <i>Module A</i>
    </div>
  )
}
