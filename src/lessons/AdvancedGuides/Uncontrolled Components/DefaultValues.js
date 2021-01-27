export function DefaultValues(props) {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input
                    defaultValue="Bob"
                    type="text"
                    ref={this.input}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}