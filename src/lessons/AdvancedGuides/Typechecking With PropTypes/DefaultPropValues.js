import * as React from "react";

class Greeting extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

// Specifies the default values for props:
Greeting.defaultProps = {
    name: 'Stranger'
};

// Renders "Hello, Stranger":
ReactDOM.render(
    <Greeting />,
    document.getElementById('example')
);

class Greetings extends React.Component {
    static defaultProps = {
        name: 'stranger'
    }

    render() {
        return (
            <div>Hello, {this.props.name}</div>
        )
    }
}