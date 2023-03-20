export interface DocumentMarkupItem {
  id: string;
  type: ComponentType;
  label: string;
  defaultValue?: string;
  required?: boolean;
}

export type ComponentType = 'inputText' | 'inputEmail' | 'inputPassword';

export type ComponentName = 'Input';

/**
 * Тип репозитория компонентов.
 * (для возможности добавить новый компонент, например: CheckBox)
 */
export type EditorComponentsRepository = {
  [componentName: string]: React.ComponentType<DocumentMarkupItem>;
};

export const componentsNames: Record<ComponentType, ComponentName> = {
  inputText: 'Input',
  inputEmail: 'Input',
  inputPassword: 'Input'
};
