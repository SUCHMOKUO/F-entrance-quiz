import React from 'react';

import './item.scss';

export default function Item(props) {
  const { text } = props;

  return <div className="list-item">{text}</div>;
}
