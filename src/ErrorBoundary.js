import { Component } from "react/cjs/react.production.min";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";

class ErrorBoundary extends Component {
    state = { hasError: false, redirect: false };
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    ComponentDidCatch(error, info) {
        console.log(123);
        console.error("ErrorBoundary caught an error", error, info);
        setTimeout(() => this.setState({ redirect: true }), 5000);
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        else if (this.state.hasError) {
            return (
                <h2>
                    This listing has an error. <Link to="/">Click here</Link> go back to Home page or wait 5 seconds
                </h2>
            );
        }
        return this.props.children;
    }
}


export default ErrorBoundary;