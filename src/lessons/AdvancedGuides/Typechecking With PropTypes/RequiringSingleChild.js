import React from "react";
import PropTypes from 'prop-types';

class MyComponent extends React.Component {
    render() {
        // This must be exactly one element or it will warn.
        const children = this.props.children;
        return (
            <div>
                {children}
            </div>
        );
    }
}

MyComponent.propTypes = {
    children: PropTypes.element.isRequired
};