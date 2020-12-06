import React, { useState } from 'react';
import password from "./PasswordReveal.module.scss";
import fromStyle from "./Form.module.scss";

const PasswordComponent = (props) => {
  const [visible, setVisible] = useState(false);
  const name = props.name || 'password';
  const autoComplete = props.autoComplete || 'on';

  return (
    <div className={password["password-reveal"]}>
      <input className="form__input" type={visible ? 'text' : 'password'}  name={name} autoComplete={autoComplete} value={props.value} onChange={props.onChange} />
      <button
        type="button"
        className={visible ? password['icon-eye'] : password['icon-eye-off']}
        onClick={() => setVisible(!visible)}
        title={visible ? 'Hide password' : 'Show password'}
      />
      {props.password_error ?  <span className={fromStyle["error"]}>🧙‍ You shall not pass without a password.</span>  :null}
    </div>
  );
};

export default PasswordComponent;
