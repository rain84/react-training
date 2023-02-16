import { Route } from 'react-router-dom'
import { Home, ParentChildRerender, Error404, Gsap } from 'pages'
import { AppLayout } from 'layouts'

export const routes = (
  <Route path="/" element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route
      path="/parent-child-rerender"
      element={<ParentChildRerender />}
    ></Route>
    <Route path="/gsap" element={<Gsap />}></Route>
    <Route path="*" element={<Error404 />} errorElement={<Error404 />}></Route>
  </Route>
)
