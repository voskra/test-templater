import * as React from 'react';
import { Form } from 'react-bootstrap';
import type { DocumentMarkupItem } from '../../core/interface';
import { useDocumentStore } from '../../core/DocumentStoreContext';
import css from './Input.module.css';

export const Input = React.memo<DocumentMarkupItem>(
  ({ id, type, label, required = false }) => {
    const { modifyDocument, store } = useDocumentStore();

    const controlType = React.useMemo(() => {
      switch (type) {
        case 'inputEmail':
          return 'email';
        case 'inputPassword':
          return 'password';
        default:
          return 'text';
      }
    }, [type]);

    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;
        modifyDocument(id, value);
      },
      [id, modifyDocument]
    );

    return (
      <Form.Group className="mb-3" controlId={id}>
        <Form.Control
          className={css.input}
          placeholder={label}
          required={required}
          type={controlType}
          value={store[id]}
          onChange={onChangeHandler}
        />
      </Form.Group>
    );
  }
);

Input.displayName = nameof(Input);
