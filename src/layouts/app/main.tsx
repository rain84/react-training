import { Outlet } from 'react-router-dom'

export const Main = () => {
  return (
    <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6">
      {/* Remove className [ border-dashed border-2 border-gray-300 ] to remove
      dotted border */}
      <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
        <Outlet />
      </div>
    </div>
  )
}
