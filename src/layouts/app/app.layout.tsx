import { Outlet } from 'react-router-dom'

export const AppLayout = () => (
  <section>
    <header>AppLayout</header>
    <aside>Menu</aside>
    <main>
      <Outlet />
    </main>
  </section>
)
