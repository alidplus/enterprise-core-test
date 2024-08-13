import { useAutoBindSidebarMenu } from '../hooks'
import { ModuleComponentProps } from '../type'
import { ModuleAConfig } from './config'

export default function Component(props: ModuleComponentProps<ModuleAConfig>) {
  useAutoBindSidebarMenu('moduleA', props.config.sidebar)

  return <strong>{props.config.label}</strong>
}
