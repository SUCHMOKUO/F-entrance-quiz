import React from 'react';

import './item.scss';
// TODO GTB-工程实践: - 组件的命名没有反映业务逻辑，Item是一个过于宽泛的词
export default function Item(props) {
  const { text } = props;

  return <div className="list-item">{text}</div>;
}
