import { Route } from 'react-router-dom'
import { ErrorBoundary } from '@/components/utils'
import { AppLayout } from '@/layouts'
import {
	ComponentsPage,
	Error404Page,
	GsapPage,
	HomePage,
	PerformancePage,
	TestPage,
} from '@/pages'

// prettier-ignore
export const routes = (
	<Route
		path="/"
		element={
			<ErrorBoundary>
				<AppLayout />
			</ErrorBoundary>
		}
	>
		<Route index element={<HomePage />} />
		<Route path="/performance" element={<PerformancePage />} />
		<Route path="/components/*" element={<ComponentsPage />} />
		<Route path="/gsap" element={<GsapPage />} />
		<Route path="/test" element={<TestPage />} />
		<Route path="*" element={<Error404Page />} />
	</Route>
)
