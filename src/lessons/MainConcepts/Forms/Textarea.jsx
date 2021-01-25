import React from "react";

class Textarea extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write essay about your favourite DOM element'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleSubmit(e){
        alert('An essay was submitted: ' + this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    Essay
                    <textarea name="textarea" id="textarea" cols="30" rows="10" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        );
    }


}

export default Textarea