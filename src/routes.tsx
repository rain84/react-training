import { Route } from 'react-router-dom'
import {
  HomePage,
  RerenderingPage,
  Error404Page,
  GsapPage,
  TestPage,
} from 'pages'
import { AppLayout } from 'layouts'

export const routes = (
  <Route path="/" element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/rerendering" element={<RerenderingPage />} />
    <Route path="/gsap" element={<GsapPage />} />
    <Route path="/test" element={<TestPage />} />
    <Route path="*" element={<Error404Page />} />
  </Route>
)
