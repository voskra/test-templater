import * as React from 'react';

/**
 * Свойства компонента BuilderErrorBoundary.
 */
interface BuilderErrorBoundaryProps {
  children?: React.ReactNode;
  /**
   * Имя компонента, который отображается Builder'ом.
   */
  componentName: string;
}

/**
 * Error boundary для компонента Builder.
 */
export class BuilderErrorBoundary extends React.PureComponent<BuilderErrorBoundaryProps> {
  static displayName = nameof(BuilderErrorBoundary);

  state = {
    error: null as string | null
  };

  public componentDidCatch(err?: unknown): void {
    this.setState({
      error: getErrorMessage(err)
    });
  }

  public render(): React.ReactNode {
    const { children, componentName } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <pre
          style={{
            border: '1px solid red',
            color: 'red',
            padding: '0.5rem'
          }}
        >
          {error} @ {componentName}
        </pre>
      );
    }

    return children;
  }
}

/**
 * Достать из объекта ошибки сообщение об ошибке.
 *
 * @param err
 */
const getErrorMessage = (err: unknown) => {
  if (err instanceof Error) {
    return err.message;
  }

  if (typeof err === 'string') {
    return err;
  }

  return '[unknown error]';
};
