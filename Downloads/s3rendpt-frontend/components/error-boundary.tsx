'use client';

import React from 'react';
import Error from '@/app/error';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error & { digest?: string } | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error: Object.assign(error, { digest: error.stack }) 
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <Error 
          error={this.state.error} 
          reset={() => this.setState({ hasError: false, error: null })} 
        />
      );
    }

    return this.props.children;
  }
}
