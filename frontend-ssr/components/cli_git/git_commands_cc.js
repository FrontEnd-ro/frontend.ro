import React from 'react';

export default class MatchCommandClassComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const git_command = event.target[name="git_command"].value;
        const {defaultValue} = this.props;
           
        let match_command;
        if (Array.isArray(defaultValue)) {
             match_command = defaultValue.some(
                currentValue => currentValue.toLowerCase() === git_command.trim().toLowerCase()
            );
        }

        if (typeof defaultValue === 'string') {
            match_command = git_command.trim().toLowerCase() === defaultValue.toLowerCase();
        }

        if (match_command) {
            this.setState({
                message: 'you guess it'
            });
        } else {
            this.setState({
                message: 'try again'
            });
        }
    }

    render() {
        const { message } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="git_command"
                    required />
                <br />
                <button type="submit">
                    See the result
                </button>
                <br />
                {message}
            </form>
        )
    }
}