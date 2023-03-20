import * as React from 'react';

interface DocumentStore {
  store: Record<string, string>;
  modifyDocument: (dataId: string, value: string) => void;
}

export const DocumentStoreContext = React.createContext<DocumentStore>({
  store: {},
  modifyDocument: (_dataId, _value) => {}
});

/**
 * Провайдер для внедрения DocumentStore.
 */
export const DocumentStoreProvider = React.memo<
  React.PropsWithChildren<{ documentStore: DocumentStore }>
>((props) => (
  <DocumentStoreContext.Provider value={props.documentStore}>
    {props.children}
  </DocumentStoreContext.Provider>
));

DocumentStoreProvider.displayName = nameof(DocumentStoreProvider);

/**
 * Хук для получения DocumentStore.
 */
export const useDocumentStore = (): DocumentStore =>
  React.useContext(DocumentStoreContext);
