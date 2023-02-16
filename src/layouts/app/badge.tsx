export const Badge = ({ children }: { children?: number }) =>
  children ? (
    <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
      {children}
    </div>
  ) : null
