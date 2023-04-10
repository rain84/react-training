import { Component, createContext, useContext } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  children?: ReactNode
  to?: string
}

type State = {
  error: MaybeNull<Error>
  shouldRedirect: boolean
}

type TContext = (error?: unknown, callback?: () => void) => void

const Context = createContext<TContext>(() => undefined)

export const useErrorBoundary = () => ({ throwError: useContext(Context) })

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    error: null,
    shouldRedirect: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { error, shouldRedirect: false }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('componentDidCatch:', error, errorInfo)
    this.#setError(error)
  }

  onClick = () => {
    this.setState({ error: null, shouldRedirect: true })
  }

  #setError: TContext = (error) => this.setState({ error } as State)

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    if (this.state.shouldRedirect) {
      console.log(this.props.to)

      this.setState({ shouldRedirect: false })
    }
  }

  public render() {
    if (this.state.error) {
      return (
        <>
          <h1>Error caught</h1>
          <button
            className="border border-violet-700 rounded-lg"
            onClick={this.onClick}
          >
            Go home
          </button>
          <pre>{this.state.error?.stack}</pre>
        </>
      )
    }

    if (this.state.shouldRedirect) return <Navigate to={this.props.to ?? '/'} />

    return (
      <Context.Provider value={this.#setError}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
