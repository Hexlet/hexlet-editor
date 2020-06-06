import React from 'react';

import cn from 'classnames';
import _ from 'lodash';
import { useEditorToolbar } from './hooks.js';

const itemsList = [
  { size: 1 },
  { size: 2 },
  { size: 3 },
  { size: 4 },
  { size: 5 },
  { size: 6 },
  { size: 7 },
  { size: 8 },
];
export const EditorToolbar = () => {
  const {
    onInsertSpaces,
    onSelectSize,
    textInsertSpaces,
    tabSize,
  } = useEditorToolbar();

  const renderDropDownMenu = (items) => (
    <div className="dropdown-menu">
      {items.map((item) => {
        const { size } = item;
        const className = cn('dropdown-item btn-secondary btn-sm', { active: tabSize === size });
        return <button key={_.uniqueId()} type="button" onClick={onSelectSize(size)} className={className}>{`${size}`}</button>;
      })}
    </div>
  );
  return (
    <div className="btn-toolbar justify-content-end align-items-center rounded-bottom border" role="toolbar">
      <div className="btn-group btn-group-sm dropup" role="group">
        <button type="button" onClick={onInsertSpaces} className="btn btn-secondary btn-sm">{textInsertSpaces}</button>
        <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        {renderDropDownMenu(itemsList)}
      </div>
    </div>

  );
};
