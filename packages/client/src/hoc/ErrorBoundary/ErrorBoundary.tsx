import { Component, ErrorInfo } from 'react';
import { ErrorPage } from 'src/pages';
import { BackgroundContainer } from '../Layout/Layout';
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
      return (
        <BackgroundContainer>
          <ErrorPage />
        </BackgroundContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
