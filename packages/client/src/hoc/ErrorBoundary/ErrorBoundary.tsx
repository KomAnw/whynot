import { Component, ErrorInfo } from 'react';
import { H3 } from 'src/design/H3';
import { Props, State } from './types';

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    error;

    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <H3>Что то пошло не так...</H3>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
