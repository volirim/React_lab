import { Component, ErrorInfo, ReactNode } from "react";
import { Navigate } from "react-router";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      alert("There is an error");
      console.error();
      return <Navigate to="/" />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
