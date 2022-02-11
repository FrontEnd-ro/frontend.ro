import React, { useState, useEffect, useRef } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from '~/components/Form';
import Button from '~/components/Button';
import { formatDate } from '~/services/Utils';

import styles from './TodoExample.module.scss';

interface ConfigProps {
  htmlEnabled: boolean;
  cssEnabled: boolean;
  jsEnabled: boolean;
}

interface Todo {
  text: string;
  done: boolean;
}

// "Dummy" component used to showcase
// the relationship between HTML, CSS and JavaScript.
// It can be configured to "disable" one of these 3 languages.
// This is useful because students will be able to see
// for themselves how a component looks with/without CSS or JS.
const TodoExample = React.forwardRef(({
  htmlEnabled = true,
  cssEnabled = true,
  jsEnabled = true,
  className = '',
}: ConfigProps & { className?: string }, forwardRef: React.RefObject<HTMLFormElement>) => {
  const listRef = useRef<HTMLOListElement>(null);
  const [showWarningToast, setShowWarningToast] = useState(false);

  // Keep the styles on the component state. This way,
  // by changing the state we can easily turn on/off all occurences of these styles.
  const [componentStyles, setComponentStyles] = useState(cssEnabled ? styles : {});
  const [todos, setTodos] = useState<Todo[]>([
    { text: 'Prepară cafeaua', done: true },
  ]);

  const today = formatDate(new Date());
  const remainingTodos = todos.filter((todo) => !todo.done);

  useEffect(() => {
    if (cssEnabled) {
      setComponentStyles(styles);
    } else {
      setComponentStyles({});
    }
  }, [cssEnabled]);

  useEffect(() => {
    if (jsEnabled === true) {
      setShowWarningToast(false);
    }
  }, [jsEnabled]);

  const addTodo = ({ text }: { text: string }) => {
    if (!jsEnabled) {
      setShowWarningToast(true);
      return Promise.resolve(false);
    }

    setTodos([
      ...todos,
      {
        text,
        done: false,
      },
    ]);
    setTimeout(scrollToListBottom, 0);

    // Reset form
    return Promise.resolve(true);
  };

  const toggleInput = (index: number, newDone: boolean) => {
    if (!jsEnabled) {
      return;
    }

    setTodos([
      ...todos.slice(0, index),
      {
        ...todos[index],
        done: newDone,
      },
      ...todos.slice(index + 1),
    ]);
  };

  const scrollToListBottom = () => {
    if (!listRef.current) {
      return;
    }

    listRef.current.scrollTo(0, listRef.current.scrollHeight);
  };

  if (!htmlEnabled) {
    return null;
  }

  return (
    <section className={`
        ${styles['TodoExample-base']}
        ${componentStyles.TodoExample}
        ${className}
        "bg-white"
      `}
    >
      <header>
        <time>
          {today}
        </time>
        <p className={componentStyles.count}>
          {remainingTodos.length}
          {' '}
          {`Task${remainingTodos.length > 1 || remainingTodos.length === 0 ? '-uri' : ''}`}
          {' '}
          {`rămas${remainingTodos.length > 1 || remainingTodos.length === 0 ? 'e' : ''}`}
        </p>
        <Form withStyles={false} ref={forwardRef} onSubmit={addTodo}>
          <input placeholder="Adaugă un nou task" type="text" name="text" required />
          <button className={cssEnabled ? 'btn btn--blue' : ''} type="submit">
            Adaugă
          </button>
        </Form>
      </header>
      <ol ref={listRef} className={componentStyles.list}>
        {todos.map((todo, index) => (
          <TodoElement
            todo={todo}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            componentStyles={componentStyles}
            onChange={(newDone) => toggleInput(index, newDone)}
          />
        ))}
      </ol>
      {showWarningToast && (
        <WarningToast
          text="Nu poți adăuga Task-uri fără JavaScript!"
          onClose={() => setShowWarningToast(false)}
        />
      )}

    </section>
  );
});

const TodoElement = ({
  todo,
  onChange,
  componentStyles,
}: {
  todo: Todo,
  onChange: (newDone: boolean) => void,
  // Passing the component styles as props
  // This way, by changing the state on the parent,
  // it will reflect on the children as well.
  componentStyles: Record<string, string>,
}) => {
  return (
    <li className={`${componentStyles.TodoElement} ${todo.done ? componentStyles.done : ''}`}>
      <label>
        <input onChange={() => onChange(!todo.done)} type="checkbox" defaultChecked={todo.done} />
        {todo.done === true ? (
          <s>
            <p>
              {todo.text}
            </p>
          </s>
        ) : (
          <p>
            {todo.text}
          </p>
        )}
      </label>
    </li>
  );
};

const WarningToast = ({ text, onClose }: { text: string, onClose: () => void }) => {
  const AUTO_CLOSE_DELAY = 3; // seconds
  useEffect(() => {
    const timeoutId = setTimeout(onClose, AUTO_CLOSE_DELAY * 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`absolute ${styles.WarningToast}`}>
      <p className="m-0">
        {text}
      </p>
      <Button className="text-white" variant="transparent" onClick={onClose}>
        <FontAwesomeIcon width={16} icon={faTimes} />
      </Button>
    </div>
  );
};

export default TodoExample;
