type IProps<T extends string> = Record<T, React.ReactElement> & {
  children: T
}

export const Switch = <T extends string>(Case: IProps<T>) =>
  Case[Case.children] ?? null
