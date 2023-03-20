import * as React from 'react';
import type {
  DocumentMarkupItem,
  EditorComponentsRepository
} from './interface';
import { componentsNames } from './interface';
import { BuilderErrorBoundary } from './BuilderErrorBoundary';

interface BuilderProps {
  /**
   * Набор компонентов для создания отображения.
   */
  components: EditorComponentsRepository;

  /**
   * Разметка для отрисовки.
   */
  markup?: DocumentMarkupItem | DocumentMarkupItem[];
}

const renderSingleComponent = (
  components: EditorComponentsRepository,
  singleMarkupItem: DocumentMarkupItem,
  index: number
): JSX.Element | null => {
  const { type, id } = singleMarkupItem;

  const componentName = componentsNames[type];

  const Component = components[componentName] || components['Empty'];

  if (!Component) {
    console.error(`Invalid component "${componentName}"`);

    return null;
  }

  return (
    <BuilderErrorBoundary key={`${id}.${index}`} componentName={componentName}>
      <Component {...singleMarkupItem} />
    </BuilderErrorBoundary>
  );
};

/**
 * Компонент, формирующий дерево React-компонентов
 * в соответствии со схемой.
 */
export const Builder = React.memo<BuilderProps>((props) => {
  const { markup, components } = props;

  if (!markup) {
    return <div>Ошибка в данных</div>;
  }

  if (Array.isArray(markup)) {
    return (
      <>
        {markup.map((item, index) => {
          return renderSingleComponent(components, item, index);
        })}
      </>
    );
  } else {
    return renderSingleComponent(components, markup, 0);
  }
});

Builder.displayName = nameof(Builder);
