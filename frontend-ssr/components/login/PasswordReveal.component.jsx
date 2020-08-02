import React, { useState } from 'react';

const PasswordComponent = (props) => {
  const [visible, setVisible] = useState(false);
  const name = props.name || 'password';
  const autoComplete = props.autoComplete || 'on';

  return (
    <div className="password-reveal">
      <input className="form__input" type={visible ? 'text' : 'password'} required name={name} autoComplete={autoComplete} />
      <button
        type="button"
        className={visible ? 'icon-eye' : 'icon-eye-off'}
        onClick={() => setVisible(!visible)}
        title={visible ? 'Hide password' : 'Show password'}
      />
      {props.children ? props.children : <span className="error">🧙‍ You shall not pass without a password.</span>}
    </div>
  );
};

export default PasswordComponent;
