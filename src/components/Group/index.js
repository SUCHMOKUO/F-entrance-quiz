import React from 'react';

import './index.scss';

export default function Group(props) {
  const { name, children } = props;

  return (
    <div className="group">
      <h3>{name}</h3>
      {children}
    </div>
  );
}
