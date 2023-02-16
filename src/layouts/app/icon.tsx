export const Icon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`icon icon-tabler icon-tabler-grid ${className ?? ''}`.trimEnd()}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z"></path>
    <rect x="4" y="4" width="6" height="6" rx="1"></rect>
    <rect x="14" y="4" width="6" height="6" rx="1"></rect>
    <rect x="4" y="14" width="6" height="6" rx="1"></rect>
    <rect x="14" y="14" width="6" height="6" rx="1"></rect>
  </svg>
)
