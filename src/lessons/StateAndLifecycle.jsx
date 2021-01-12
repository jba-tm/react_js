import React from 'react'

function formatDate(date){
    return date.toLocaleTimeString()
}

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            ()=> this.tick(),
            1000,
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {formatDate(this.state.date)}.</h2>
            </div>
        );
    }
}

export default Clock