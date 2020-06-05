import React from 'react';

import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { useEditorToolbar } from './hooks.js';
import { actions } from '../../slices';

const itemsList = [
  {
    id: 1, name: 'Spaces:', size: 1, active: false,
  },
  {
    id: 2, name: 'Spaces:', size: 2, active: false,
  },
  {
    id: 3, name: 'Spaces:', size: 3, active: false,
  },
  {
    id: 4, name: 'Spaces:', size: 4, active: true,
  },
  {
    id: 5, name: 'Tabs:', size: 1, active: false,
  },
  {
    id: 6, name: 'Tabs:', size: 2, active: false,
  },
  {
    id: 7, name: 'Tabs:', size: 3, active: false,
  },
  {
    id: 8, name: 'Tabs:', size: 4, active: false,
  },
];
export const EditorToolbar = () => {
  // const {
  //   onSelect
  // } = useEditorToolbar();
  const dispatch = useDispatch();
  const onSelect = (size) => () => {
    console.log("onSelect -> size", size);
    dispatch(actions.setTabSize(size));
  };
  const renderDropdownItem = (item) => {
    const {
      id, name, size, active,
    } = item;
    const className = cn('dropdown-item btn-secondary btn-sm', { active });
    return <button key={id} type="button" onClick={onSelect(size)} className={className}>{`${name}${size}`}</button>;
  };

  return (
    <div className="btn-toolbar justify-content-between align-items-center" role="toolbar" aria-label="Toolbar with button groups">
      <div className="btn-group btn-group-sm" role="group" aria-label="Button group with nested dropdown">
        <button type="button" className="btn btn-secondary">1</button>
        <button type="button" className="btn btn-secondary">2</button>
      </div>
      <div className="btn-group btn-group-sm dropup" role="group">
        <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Spaces:
        </button>
        <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
          {itemsList.map(renderDropdownItem)}
        </div>
      </div>

    </div>
  );
};
