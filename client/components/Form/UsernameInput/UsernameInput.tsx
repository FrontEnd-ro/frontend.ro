import { debounce, DebouncedFunc } from 'lodash';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faSpinner, faTimes } from '@fortawesome/free-solid-svg-icons';
import UserService from '~/services/User.service';
import InputWithIcon from '../InputWithIcon/InputWithIcon';

function UsernameInput({ name, id }: { name: string; id?: string; }) {
  const ref = useRef<HTMLInputElement>(null);
  const checkFn = useRef<DebouncedFunc<(value: string) => void>>(debounce(checkUsername, 250));

  const [username, setUsername] = useState(null);
  const [usernameExists, setUsernameExists] = useState(undefined);

  const onUsernameChange = (e) => {
    let value: string = e.target.value ?? '';
    value = value.trim();

    setUsername(value);
    setUsernameExists(undefined);

    if (!value) {
      return;
    }

    checkFn.current.cancel();
    checkFn.current(value);
  };

  function checkUsername(value: string) {
    return UserService.checkUsername(value)
      .then(() => {
        setUsernameExists(true);
        ref.current.setCustomValidity('Acest username există deja');
      })
      .catch(() => {
        ref.current.setCustomValidity('');
        setUsernameExists(false);
      });
  }

  return (
    <InputWithIcon
      required
      type="text"
      name={name}
      ref={ref}
      id={id}
      onChange={onUsernameChange}
    >
      {usernameExists && <FontAwesomeIcon width="1em" className="text-red" icon={faTimes} />}
      {usernameExists === false && <FontAwesomeIcon width="1em" className="text-green" icon={faCheck} />}
      {usernameExists === undefined && username && <FontAwesomeIcon width="1em" className="rotate" icon={faSpinner} />}
    </InputWithIcon>
  );
}

export default UsernameInput;
