import { RadioGroup, type Props } from './radio-group.component'

export const FRRG = <T extends string>(props: Props<T>) => (
  <RadioGroup
    {...props}
    className="flex-col gap-5 float-right border-2 border-slate-100 rounded p-4 shadow"
  />
)
