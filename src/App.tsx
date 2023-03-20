import * as React from 'react';
import { Button, Form } from 'react-bootstrap';
import * as CoreComponents from './components';
import { Builder } from './core/Builder';
import { authMarkup } from './markup';
import { DocumentStoreProvider } from './core/DocumentStoreContext';
import type { DocumentMarkupItem } from './core/interface';

import css from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialData = authMarkup.reduce(
  (
    result: Record<string, string>,
    item: DocumentMarkupItem
  ): Record<string, string> => {
    result[item.id] = item.defaultValue || '';

    return result;
  },
  {}
);

/**
 * Основной компонент - страница авторизации для
 * примера использования компонента Builder
 */
export const App = React.memo(() => {
  const [store, setStore] = React.useState(initialData);

  const modifyDocument = React.useCallback((dataId: string, value: string) => {
    setStore((current) => ({ ...current, [dataId]: value }));
  }, []);

  const documentStore = React.useMemo(
    () => ({ store, modifyDocument }),
    [modifyDocument, store]
  );

  const [validated, setValidated] = React.useState(false);

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();
      const form = event.currentTarget;
      if (form.checkValidity()) {
        const div = document.getElementById('result');
        const block = document.createElement('div');
        for (const [key, value] of Object.entries(store)) {
          const row = document.createElement('div');
          row.innerHTML = `${key}: ${value}`;
          block.appendChild(row);
        }

        if (div) {
          div.appendChild(block);
        }
      }

      setValidated(true);
    },
    [store]
  );

  const isDisabled = React.useMemo(() => {
    return authMarkup.some((item) => {
      if (item.required) {
        return !store[item.id].trim();
      }

      return false;
    });
  }, [store]);

  return (
    <DocumentStoreProvider documentStore={documentStore}>
      <div className={css.container}>
        <div className={css.card}>
          <div className={css.logo}>💁🏻‍♀️</div>
          <h5>Авторизация</h5>
          <p>
            Для доступа к личному кабинету вашей компании авторизуйтесь на сайте
          </p>
          <Form noValidate={true} validated={validated} onSubmit={handleSubmit}>
            <Builder components={CoreComponents} markup={authMarkup} />
            <Button
              className={css.submitButton}
              disabled={isDisabled}
              type="submit"
              variant="primary"
            >
              Войти
            </Button>
          </Form>
        </div>
        <div className={css.result}>
          <div id="result" />
        </div>
      </div>
    </DocumentStoreProvider>
  );
});

App.displayName = nameof(App);
