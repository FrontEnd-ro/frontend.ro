import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import password from "./PasswordReveal.module.scss";
import fromStyle from "./Form.module.scss";

=======
import password from "~/styles/pages/login/PasswordReveal.module.scss";
import fromStyle from "~/styles/pages/login/Form.module.scss";
>>>>>>> 2f3a38f... Uncommited changes
=======

>>>>>>> 55eb138...  Change in front, look over the git review
=======
import password from "~/styles/pages/login/PasswordReveal.module.scss";
import fromStyle from "~/styles/pages/login/Form.module.scss";
>>>>>>> c8a07f9... Uncommited changes
const PasswordComponent = (props) => {
  const [visible, setVisible] = useState(false);
  const name = props.name || 'password';
  const autoComplete = props.autoComplete || 'on';

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className={password["password-reveal"]}>
<<<<<<< HEAD
      <input className="form__input" type={visible ? 'text' : 'password'}  name={name} autoComplete={autoComplete} value={props.value} onChange={props.onChange} />
=======
      <input className="form__input" type={visible ? 'text' : 'password'}  name={name} autoComplete={autoComplete} />
>>>>>>> 2f3a38f... Uncommited changes
      <button
        type="button"
        className={visible ? password['icon-eye'] : password['icon-eye-off']}
        onClick={() => setVisible(!visible)}
        title={visible ? 'Hide password' : 'Show password'}
      />
      {props.password_error ?  <span className={fromStyle["error"]}>🧙‍ You shall not pass without a password.</span>  :null}
=======
    <div className="password-reveal">
      <input className="form__input" type={visible ? 'text' : 'password'} required name={name} autoComplete={autoComplete} />
=======
    <div className={password["password-reveal"]}>
      <input className="form__input" type={visible ? 'text' : 'password'}  name={name} autoComplete={autoComplete} />
>>>>>>> c8a07f9... Uncommited changes
      <button
        type="button"
        className={visible ? password['icon-eye'] : password['icon-eye-off']}
        onClick={() => setVisible(!visible)}
        title={visible ? 'Hide password' : 'Show password'}
      />
<<<<<<< HEAD
      {console.log(props.children || props.reason )}
      {props.children || !props.reason ? props.children : <span className="error">🧙‍ You shall not pass without a password.</span>}
>>>>>>> 55eb138...  Change in front, look over the git review
=======
      {props.password_error ?  <span className={fromStyle["error"]}>🧙‍ You shall not pass without a password.</span>  :null}
>>>>>>> c8a07f9... Uncommited changes
    </div>
  );
};

export default PasswordComponent;
