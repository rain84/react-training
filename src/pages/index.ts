export * from './home.page'
export * from './performance.page'
export * from './error404.page'
export * from './gsap.page'
export * from './test.page'

export type Page = {
  name: string
  href: string
}

export const PagesList: Page[] = [
  { name: 'performance', href: 'performance' },
  { name: 'GSAP', href: 'gsap' },
  { name: 'Test', href: 'test' },
]
