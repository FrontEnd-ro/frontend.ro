import React from 'react';
import { noop } from 'lodash';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from './Checkbox/Checkbox';
import Form from './Form';
import InputWithIcon from './InputWithIcon/InputWithIcon';
import PasswordReveal from './PasswordReveal/PasswordReveal';

export default {
  title: 'Form',
};

export const Components = () => (
  <Form withStyles onSubmit={noop}>
    <section>
      <h4> Checkbox </h4>
      <Checkbox>
        Are you sure?
      </Checkbox>
    </section>
    <section>
      <h4> Input with icon </h4>
      <InputWithIcon type="text">
        <FontAwesomeIcon icon={faCheck} />
      </InputWithIcon>
    </section>
    <section>
      <h4> Password reveal </h4>
      <PasswordReveal />
    </section>
  </Form>
);
