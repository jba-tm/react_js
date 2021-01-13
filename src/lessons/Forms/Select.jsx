import React from "react";


class Select extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleSubmit(e){
        alert('Your favorite flavor is: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    Pick your fav:
                    <select name="" value={this.state.value} onChange={this.handleChange} id="" >
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>

                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Select