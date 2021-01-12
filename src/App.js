import * as React from "react";

import './App.css';
import Greetings from "./lessons/ConditionalRendering";


class App extends React.Component {
    render() {
        return (
            <div>
                <Greetings isLoggedIn={true}/>
                <Greetings isLoggedIn={false}/>
                <Greetings />
            </div>
        );
    }
}

export default App;
