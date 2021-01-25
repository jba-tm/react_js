import React from "react";


class MultipleInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e){
        const target = e.target
        const value = target.type==='checkbox'?target.checked:target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="">
                    Is going:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label>

                <label htmlFor="">
                    Number of guests
                    <input type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} name="numberOfGuests" />
                </label>
            </form>
        );
    }

}

export default MultipleInput