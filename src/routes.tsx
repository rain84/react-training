import { Route } from 'react-router-dom'
import {
  HomePage,
  PerformancePage,
  Error404Page,
  GsapPage,
  TestPage,
} from 'pages'
import { AppLayout } from 'layouts'
import { ErrorBoundary } from 'components/utils'

// prettier-ignore
export const routes = (
  <Route
    path="/"
    element={<ErrorBoundary><AppLayout /></ErrorBoundary>}>
    <Route index element={<HomePage />} />
    <Route path="/performance" element={<PerformancePage />} />
    <Route path="/gsap" element={<GsapPage />} />
    <Route path="/test" element={<TestPage />} />
    <Route path="*" element={<Error404Page />} />
  </Route>
)
