import * as React from 'react';
import type { DocumentMarkupItem } from '../../core/interface';
import css from './Empty.module.css';

/**
 * Резервный компонент, используемый в случае, если
 * указанный в UI-схеме компонент не был найден в
 * репозитории компонентов.
 */
export const Empty = React.memo<DocumentMarkupItem>(({ type }) => (
  <div className={css.styledEmpty}>
    Нет отображения для компонента типа «{type}»
  </div>
));

Empty.displayName = nameof(Empty);
