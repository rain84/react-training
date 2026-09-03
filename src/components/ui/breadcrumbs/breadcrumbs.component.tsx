import type { TBreadcrumbsProps } from './breadcrumbs.types'
import { Crumb } from './crumb.component'
import { Delimiter } from './delimiter.component'

export const Breadcrumbs = ({ items }: TBreadcrumbsProps) => (
	<ul className="flex text-slate-500">
		{items?.map((item, i) => (
			<li key={item.name}>
				<Crumb className="capitalize" item={item} />
				<Delimiter i={i} items={items} className="mx-2" />
			</li>
		))}
	</ul>
)
