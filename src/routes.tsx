import { Route } from 'react-router-dom'
import { Home, ParentChildRerender, Error404, GsapPage } from 'pages'
import { AppLayout } from 'layouts'

export const routes = (
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path="/parent-child-rerender" element={<ParentChildRerender />} />
    <Route path="/gsap" element={<GsapPage />} />
    <Route path="*" element={<Error404 />} />
  </Route>
)
