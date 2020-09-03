import React from 'react';

interface Props {
  commands: RegExp[] | string[]
}
interface State {
  currentCommandIndex: number,
  message: string,
  buttonText: string
}

export default class MatchCommandClassComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      currentCommandIndex: 0,
      message: '',
      buttonText: 'Next',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const formEl = event.target;
    const gitCommand = event.target.gitCommand.value;
    const { commands } = this.props;
    const { currentCommandIndex } = this.state;

    let isMatch = false;
    if (commands[currentCommandIndex] instanceof RegExp) {
      isMatch = (commands[currentCommandIndex] as RegExp).test(gitCommand);
    } else {
      isMatch = commands[currentCommandIndex] === gitCommand.trim().toLowerCase();
    }

    if (!isMatch) {
      this.setState({
        message: 'please try again',
        buttonText: 'Next',
      });
    } else if (currentCommandIndex === commands.length - 1) {
      this.setState({
        message: 'Congratulations!',
        buttonText: 'Done',
      });
    } else {
      this.setState((state) => ({
        currentCommandIndex: state.currentCommandIndex + 1,
      }));
    }
    formEl.reset();
  }

  render() {
    const { message, buttonText } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="gitCommand"
          required
        />
        <br />
        <button type="submit">
          {buttonText}
        </button>
        <br />
        {message}
      </form>
    );
  }
}
