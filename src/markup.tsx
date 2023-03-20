import type { DocumentMarkupItem } from './core/interface';

/**
 * UI-схема для отрисовки React-компонентов
 * (пока что только компонента Input).
 */
export const authMarkup: DocumentMarkupItem[] = [
  {
    id: 'first_name',
    type: 'inputText',
    label: 'First Name',
    defaultValue: 'Some first name'
  },
  {
    id: 'last_name',
    type: 'inputText',
    label: 'Last Name'
  },
  {
    id: 'email',
    type: 'inputEmail',
    label: 'Email',
    required: true
  },
  {
    id: 'password',
    type: 'inputPassword',
    label: 'Password',
    required: true
  }
];
