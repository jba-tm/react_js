var SayHello = createReactClass({
    getInitialState: function() {
        return {message: 'Hello!'};
    },

    handleClick: function() {
        alert(this.state.message);
    },

    render: function() {
        return (
            <button onClick={this.handleClick}>
                Say hello
            </button>
        );
    }
});