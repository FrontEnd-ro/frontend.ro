import React from 'react';

class MatchWords extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            message: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleMatch = this.handleMatch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    handleInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleMatch() {
        let inputValue = this.state.value;
        let defaultValue = this.props.defaultText;
        let defaultValues = this.props.defaultArray;

        let result = defaultValues.some(currentValue => currentValue.toLowerCase() === inputValue.toLowerCase());
        
        if(inputValue.trim().toLowerCase() === defaultValue.toLowerCase() || result) {
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
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    required />
                    <br />
                <button type="submit"
                    onClick={this.handleMatch}>
                    See the result
                </button>
                <br />
                {this.state.message}
            </form>
        )
    }
}

export default MatchWords;