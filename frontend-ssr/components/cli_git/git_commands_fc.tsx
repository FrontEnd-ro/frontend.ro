import React, { useState } from 'react';

interface Props {
  commands: RegExp[] | string [];
}

export default function MatchCommandFunctionalComponent(props: Props) {
  let [message, setMessage] = useState('');
  let [buttonText, setButtonText] = useState('Next');
  let [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();

    const formEl = event.target;
    const gitCommand = event.target.gitCommand.value;
    const { commands } = props;

    let isMatch = false;
    if (commands[currentCommandIndex] instanceof RegExp) {
      isMatch = (commands[currentCommandIndex] as RegExp).test(gitCommand);
    } else {
      isMatch = commands[currentCommandIndex] === gitCommand.trim().toLowerCase();
    }

    if (!isMatch) {
      setMessage(message = 'Please try again!');
      setButtonText(buttonText = 'Next');
    } else if (currentCommandIndex === commands.length - 1) {
      setMessage(message = 'Congratulations!');
      setButtonText(buttonText = 'Done');
    } else {
      setCurrentCommandIndex(currentCommandIndex + 1);
    }
    formEl.reset();
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
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
