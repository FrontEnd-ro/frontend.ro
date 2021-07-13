import React from 'react';
import { uuid } from '../../services/Utils';
import Button from '~/components/Button';

import styles from './GitCli.module.scss';

interface Props {
  commands: Commands[];
}

interface State {
  currentIndex: number;
  messages: Message[];
  btnMessage: string;
}

interface Commands {
  command: RegExp | string;
  message: string;
}

interface Message {
  text: string;
  type: MessageType;
  time: number;
  id: string;
}

enum MessageType {
  COMMAND = 'command',
  ERROR = 'error',
  SUCCESS = 'success',
}

class MatchCommandMessageClassComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      messages: [],
      btnMessage: props.commands.length === 1 ? 'Done' : 'Next',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const formEl = event.target;
    const gitCommand = event.target.gitCommand.value;
    const { commands } = this.props;
    const { currentIndex } = this.state;

    let isMatch = false;

    if (commands[currentIndex].command instanceof RegExp) {
      isMatch = (commands[currentIndex].command as RegExp).test(gitCommand);
    } else {
      isMatch = commands[currentIndex].command === gitCommand.trim().toLowerCase();
    }

    const commandMessage: Message = {
      text: gitCommand,
      type: MessageType.COMMAND,
      time: Date.now(),
      id: uuid(),
    };

    let matchCommandMessage: Message;

    if (!isMatch) {
      matchCommandMessage = {
        text: 'This is not a valid command',
        type: MessageType.ERROR,
        time: Date.now(),
        id: uuid(),
      };
    } else {
      matchCommandMessage = {
        text: commands[currentIndex].message,
        type: MessageType.SUCCESS,
        time: Date.now(),
        id: uuid(),
      };
    }

    this.setState(({ messages }) => ({
      messages: [...messages, commandMessage, matchCommandMessage],
      currentIndex: isMatch ? currentIndex + 1 : currentIndex,
    }));

    if (isMatch && currentIndex + 2 === commands.length) {
      this.setState({
        btnMessage: 'Done',
      });
    }
    formEl.reset();
  };

  render() {
    const { messages, btnMessage, currentIndex } = this.state;
    const { commands } = this.props;

    return (
      <>
        <div className={styles.commands}>
          <div className={styles.commands__cli}>
            {messages.map((message) => (
              <p key={message.id} className={styles[message.type]}>
                <span>{message.text}</span>
                <span>{new Date(message.time).toLocaleString()}</span>
              </p>
            ))}
          </div>
          <form className={styles.form} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="gitCommand"
              spellCheck="false"
              required
              readOnly={currentIndex === commands.length}
            />
            <span className={styles.blinking__cursor} />
            <Button
              variant="blue"
              type="submit"
              loading={currentIndex === commands.length}
            >
              {btnMessage}
            </Button>
          </form>
        </div>
      </>
    );
  }
}
export default MatchCommandMessageClassComponent;
