import { ScrollBox } from 'components/ui'

export const ScrollPage = () => (
  <div className="flex flex-col items-center justify-start">
    <ScrollBox className="border border-stone-800 rounded-md h-40">
      <p className="text-center">Styled scroll Top</p>
      <div className="h-60"></div>
      <p className="text-center">Styled scroll Bottom</p>
    </ScrollBox>
  </div>
)
