import type { RouteObject } from 'react-router-dom'
import { Home, ParentChildRerender } from 'pages'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/parent-child-rerender',
    element: <ParentChildRerender />,
  },
]
