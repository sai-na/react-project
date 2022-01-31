import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {

    state = { loading: true };


    async componentDidMount() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
        );
        const json = await res.json();
        this.setState(
            Object.assign(
                {
                    loading: false

                },
                json.pets[0]

            )
        );
    }
    render() {
        if (this.state.loading) {
            return <header><h2>loading.....</h2></header>
        }
        const { animal, breed, city, state, description, name, images } = this.state;
        // throw new Error("lol it broke");
        return (
            <div className="details">
                <Carousel images={images} />
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
                <button>{`Adopt ${name} `}</button>
                <p>{description}</p>
            </div>
        );
    }


}

const DetailswithRouter = withRouter(Details)
export default function DetailswithErrorBoundary() {
    return (
        <ErrorBoundary>
            <DetailswithRouter />
        </ErrorBoundary>
    )
};