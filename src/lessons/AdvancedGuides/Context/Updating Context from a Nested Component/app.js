import {ThemeContext, themes} from './theme-context';
import ThemeToggleButton from './theme-toggler-button';
import  React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);

        // State also contains the updater function so it will
        // be passed down into the context provider
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        };
    }

    toggleTheme = () => {
        this.setState(state => ({
            theme:
                state.theme === themes.dark
                    ? themes.light
                    : themes.dark,
        }));
    };

    render() {
        // The entire state is passed to the provider
        return (
            <ThemeContext.Provider value={this.state}>
                <Content />
            </ThemeContext.Provider>
        );
    }
}

function Content() {
    return (
        <div>
            <ThemeToggleButton />
        </div>
    );
}