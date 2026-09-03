import { useEffect, useMemo, useRef } from 'react'

// biome-ignore lint/suspicious/noExplicitAny: debounce must accept any function signature
type AnyFn = (...args: any[]) => void

export function useDebounce<T extends AnyFn>(fn: T, delay: number) {
	const fnRef = useRef(fn)
	fnRef.current = fn

	const debounced = useMemo(() => {
		let timer: ReturnType<typeof setTimeout> | undefined
		const wrapped = (...args: Parameters<T>) => {
			clearTimeout(timer)
			timer = setTimeout(() => fnRef.current(...args), delay)
		}
		wrapped.cancel = () => clearTimeout(timer)
		return wrapped
	}, [delay])

	useEffect(() => () => debounced.cancel(), [debounced])

	return debounced as T & { cancel: () => void }
}
