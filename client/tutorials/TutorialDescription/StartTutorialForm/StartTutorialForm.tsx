import React from 'react';
import Button from '~/components/Button';
import Form, { Checkbox } from '~/components/Form';

import styles from './StartTutorialForm.module.scss';

interface Props {
  className?: string;
  error?: string;
  onSubmit: () => void | Promise<boolean>;
}

const StartTutorialForm = ({ onSubmit, error = '', className = '' }: Props) => {
  return (
    <Form onSubmit={onSubmit} className={`${styles.StartTutorialForm} ${className}`}>
      <Checkbox
        required
        name="confirm"
        className="d-flex mb-4"
      >
        <span style={{ fontSize: '0.85em' }}>
          Am citit și sunt de acord să încep tutorialul
        </span>
      </Checkbox>
      <Button variant="success" type="submit">
        Începe tutorialul
      </Button>
      {error && (
        <p className="text-red text-bold">
          {error}
        </p>
      )}
    </Form>
  );
};

export default StartTutorialForm;
