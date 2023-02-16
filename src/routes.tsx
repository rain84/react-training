import { Route } from 'react-router-dom'
import { Home, ParentChildRerender, Error404 } from 'pages'

export const routes = (
  <>
    <Route path="/" element={<Home />} errorElement={<Error404 />}></Route>
    <Route
      path="/parent-child-rerender"
      element={<ParentChildRerender />}
    ></Route>
    <Route path="*" element={<Error404 />} errorElement={<Error404 />}></Route>
  </>
)
