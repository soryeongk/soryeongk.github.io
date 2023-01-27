import React from "react";
import Loader from "react-spinners/PacmanLoader";

import { themeColors } from "../styles/theme";

interface Props {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    console.log("📌 soryeongk ", error.message);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <Loader color={themeColors.blue.dark} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
