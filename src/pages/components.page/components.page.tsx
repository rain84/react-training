import { NavLink, Route, Routes } from 'react-router-dom'
import clsx from 'clsx'
import * as _pages from './pages'

const pages = Object.entries(_pages)

export const ComponentsPage = () => (
  <section className="m-1 h-full">
    <div className="text-left mb-2">
      {pages.map(([name]) => (
        <Button name={name} key={name} />
      ))}
    </div>

    <Routes>
      {pages.map(([page, Component]) => (
        <Route path={`/${page}`} Component={Component} key={page} />
      ))}
    </Routes>
  </section>
)

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
