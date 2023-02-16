import { Main } from './main'
import { Sidebar } from './sidebar'
import { PagesList } from 'pages'

// based on https://tailwindcomponents.com/component/free-tailwind-css-sidebar-layout-component
export const AppLayout = () => (
  <div className="w-full h-full">
    <div className="flex flex-no-wrap min-h-screen">
      <Sidebar items={PagesList} />
      <Main />
    </div>
  </div>
)
