import { useCallback, useState } from 'react'
import { ReactMemo } from 'components'
import { PropsDrilling } from 'components/rerendering/props-drilling'
import { Switch } from 'components/utils'
import { FRRG } from 'ui'

type Layouts = 'PropsDrilling' | 'ReactMemo'

export const RerenderingPage = () => {
  const [layout, setLayout] = useState<Layouts>('PropsDrilling')
  const items = ['PropsDrilling', 'ReactMemo'] as const
  const onClick: OnClick<Layouts> = useCallback(
    (e) => setLayout(e.target.value),
    []
  )

  return (
    <section>
      <FRRG
        items={items}
        onClick={onClick}
        defaultIndex={items.indexOf(layout)}
      />
      <Switch PropsDrilling={<PropsDrilling />} ReactMemo={<ReactMemo />}>
        {layout}
      </Switch>
    </section>
  )
}
