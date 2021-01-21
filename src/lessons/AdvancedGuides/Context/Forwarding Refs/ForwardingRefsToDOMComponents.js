import * as React from "react";

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
        {props.children}
    </button>
));

class Button extends React.Component{
    constructor(props) {
        super(props);
        this.ref = React.createRef()
    }

    render() {
        return (
            <div>
                <FancyButton ref={this.ref}>Click me!</FancyButton>;
            </div>
        );
    }

}