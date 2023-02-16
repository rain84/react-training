import { Route } from 'react-router-dom'
import { Home, ParentChildRerender, Error404, Gsap } from 'pages'
import { AppLayout } from 'layouts'

export const routes = (
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path="/parent-child-rerender" element={<ParentChildRerender />} />
    <Route path="/gsap" element={<Gsap />} />
    <Route path="*" element={<Error404 />} />
  </Route>
)
