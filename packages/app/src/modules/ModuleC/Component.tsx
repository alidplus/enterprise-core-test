import { ModuleComponentProps } from '../type'
import { ModuleCConfig } from './config'

export default function Component(props: ModuleComponentProps<ModuleCConfig>) {
  return (
    <div>
      <strong>{props.config.title}</strong>
      <i>Module C</i>
    </div>
  )
}
