import * as Radio from '@radix-ui/react-radio-group'
import { nanoid } from 'nanoid'
import type { Props, Items, Value, ValueLabel } from './radio-group.types'

export const RadioGroup = <T extends string>({
  items: items_,
  className,
  defaultIndex = 0,
  onClick,
}: Props<T>) => {
  const items = toValueLabelItems(items_)
  return (
    <Radio.Root
      className={`flex ${className}`}
      defaultValue={items?.[defaultIndex]?.value}
    >
      {items.map(({ value, label }) => (
        <div key={value} className="flex items-center">
          <Radio.Item
            // @ts-ignore
            onClick={onClick}
            value={value}
            id={id(value)}
            className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-gray-500 hover:bg-primary-100 focus:shadow-[0_0_0_2px] focus:shadow-slate-300 outline-none cursor-default"
          >
            <Radio.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-slate-500" />
          </Radio.Item>
          <label className="leading-none pl-[15px]" htmlFor={id(value)}>
            {label ?? value}
          </label>
        </div>
      ))}
    </Radio.Root>
  )
}

const prefix = nanoid(6).toString()
const id = (value: string) => prefix + '_' + value
const isValueItems = <T extends string>(items: Items<T>): items is Value<T> =>
  typeof items[0] === 'string'
const toValueLabelItems = <T extends string>(arr: Items<T>): ValueLabel<T> =>
  isValueItems(arr) ? arr.map((value) => ({ value, label: value })) : arr
