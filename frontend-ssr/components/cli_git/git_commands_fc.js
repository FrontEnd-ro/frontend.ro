import React, { useState } from 'react';

export default function MatchCommandFunctionalComponent(props) {
    let [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const git_command = event.target[name="git_command"].value;
        const { defaultValue } = props;

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
            setMessage(message = 'you guess it!')
        } else {
            setMessage(message = 'try again!')
        }
    }
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
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
