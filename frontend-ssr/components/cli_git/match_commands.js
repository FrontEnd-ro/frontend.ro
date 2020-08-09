import React from 'react';

class MatchWords extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const inputValue = document.querySelector('[name="input_text"]').value;
        const {defaultValue} = this.props;

        if (Array.isArray(defaultValue)) {
            var result = defaultValue.some(
                currentValue => currentValue.toLowerCase() === inputValue.trim().toLowerCase()
            );
        }

        if (typeof defaultValue === 'string') {
           var wordToMatch = inputValue.trim().toLowerCase() === defaultValue.toLowerCase();
        }

        if (result || wordToMatch) {
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
                    name="input_text"
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

export default MatchWords;