type IProps<T extends string> = Record<T, React.ReactNode> & {
  children: T
}

export const Switch = <T extends string>(Case: IProps<T>) => (
  <>{Case[Case.children] ?? null}</>
)
