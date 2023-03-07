import { RadioGroup } from './radio-group.component'
import { type Props } from './radio-group.types'

export const FRRG = <T extends string>(props: Props<T>) => (
  <RadioGroup
    {...props}
    className="m-2 flex-col gap-5 float-right border-2 border-slate-100 rounded p-4 shadow"
  />
)
