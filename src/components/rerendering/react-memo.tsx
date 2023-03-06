import { useEffect, useState, memo } from 'react'
import { Button, FRRG } from 'ui'
import { nanoid } from 'nanoid'
import { Switch } from 'components/utils'

type TComponent = 'WithoutMemo' | 'WithMemo' | 'WithIsolatedRerendering'

export const ReactMemo = () => {
  const items: Array<Record<'value', TComponent>> = [
    { value: 'WithoutMemo' },
    { value: 'WithMemo' },
    { value: 'WithIsolatedRerendering' },
  ]
  const [componentName, setComponentName] = useState(items[0].value)

  return (
    <>
      <FRRG items={items} onClick={(e) => setComponentName(e.target.value)} />

      <Switch
        WithoutMemo={<WithoutMemo />}
        WithMemo={<WithMemo />}
        WithIsolatedRerendering={<WithIsolatedRerendering />}
      >
        {componentName}
      </Switch>
    </>
  )
}

const WithoutMemo = () => {
  useEffect(() => console.clear(), [])
  const [count, setCount] = useState(0)
  const inc = () => setCount((c) => c + 1)

  return (
    <>
      <Button onClick={inc} className="border rounded">
        + {count}
      </Button>

      {getLyrics().map((lyric) => (
        <Component lyric={lyric} key={lyric.id} />
      ))}
    </>
  )
}

const WithMemo = () => {
  useEffect(() => console.clear(), [])
  const [count, setCount] = useState(0)
  const inc = () => setCount((c) => c + 1)

  return (
    <>
      <Button onClick={inc} className="border rounded">
        + {count}
      </Button>

      {getLyrics().map((lyric) => (
        <MemoizedComponent lyric={lyric} key={lyric.id} />
      ))}
    </>
  )
}

const WithIsolatedRerendering = () => {
  useEffect(() => console.clear(), [])
  return (
    <>
      <Clicker />

      {getLyrics().map((lyric) => (
        <Component lyric={lyric} key={lyric.id} />
      ))}
    </>
  )
}

export const Clicker = () => {
  const [count, setCount] = useState(0)
  const inc = () => setCount((c) => c + 1)
  return (
    <Button onClick={inc} className="border rounded">
      + {count}
    </Button>
  )
}

type LyricsProps = {
  lyric: Record<'value' | 'id', string>
}

const propsAreEqual = (prev: LyricsProps, next: LyricsProps) =>
  prev.lyric.id === next.lyric.id

const Component = (props: LyricsProps) => {
  console.log('Component rerendering')
  return (
    <div className="flex flex-row space-x-10">
      <Button>Sing</Button>
      <Label>🎵 {props.lyric.value}</Label>
    </div>
  )
}

const MemoizedComponent = memo(Component, propsAreEqual)

const Label = ({ children }: IProps) => <p>{children}</p>

const lyrics = [
  { value: 'Never gonna give you up', id: nanoid() },
  { value: 'Never gonna let you down', id: nanoid() },
  { value: 'Never gonna run around and desert you', id: nanoid() },
  { value: 'Never gonna make you cry', id: nanoid() },
  { value: 'Never gonna say goodbye', id: nanoid() },
  { value: 'Never gonna tell a lie and hurt you', id: nanoid() },
]

function getLyrics() {
  return lyrics.map((x) => ({ ...x }))
}
