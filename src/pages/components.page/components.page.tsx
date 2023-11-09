import { NavLink, Route, Routes } from 'react-router-dom'
import { SearchBoxPage } from './search-box.page'
import clsx from 'clsx'

const componentsList = [['SearchBox', SearchBoxPage]] as const

const Button = ({ name }: { name: string }) => (
  <NavLink
    key={name}
    to={name}
    className={({ isActive, isPending }) =>
      clsx(
        isActive ? 'bg-red-100 text-slate-950' : 'bg-blue-100 text-slate-950 ',
        'font-bold py-2 px-4 rounded inline-block mr-4'
      )
    }
  >
    &lt;{name}&gt;
  </NavLink>
)
export const ComponentsPage = () => (
  <section className="m-1">
    <div className="text-left">
      {componentsList.map(([componentName]) => (
        <Button name={componentName} />
      ))}
    </div>

    <Routes>
      {componentsList.map(([page, Component]) => (
        <Route path={`/${page}`} Component={Component} key={page} />
      ))}
    </Routes>
  </section>
)
