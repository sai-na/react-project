import { Component } from "react/cjs/react.production.min";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    ComponentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    This listing has an error. <Link to="/">Click here</Link> go back to Home page
                </h2>
            )
        }
        return this.props.children;
    }
}


export default ErrorBoundary;