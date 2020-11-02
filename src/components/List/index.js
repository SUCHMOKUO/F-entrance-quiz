import React, { useState } from 'react';

import './index.scss';
import Item from './item';


function Add(props) {
  const { text, onAdd } = props;
  const [inputting, setInputting] = useState(false);
  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter' && value) {
      onAdd(value);
      setInputting(false);
    }
  };

  return (
    <div className="list-add-button">
      {inputting ? (
        <input
          value={value}
          onChange={handleInput}
          onKeyUp={handleKeyUp}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          onBlur={() => setInputting(false)}
        />
      ) : (
        <button type="button" onClick={() => setInputting(true)}>
          {text}
        </button>
      )}
    </div>
  );
}
// TODO GTB-工程实践: - 组件的名字没有反映业务逻辑，List是一个过于宽泛的词，建议叫Students或者StudentList
export default function List(props) {
  // TODO GTB-知识点: - 因为你把未分组学员列表放到了Group组件里面，导致了这个组件和Group组件有太多的数据交互，这样就增加整个代码的复杂度
  // TODO GTB-知识点: - 未分组学员列表所用到的所有数据，都应该由这个组件自己管理，而不是从父组件传下来。如果你是从公用性的角度的话，这里就有点过度设计了。
  const { data, renderText, addable, onAdd, addButtonText } = props;

  return (
    <div className="list">
      {data.map((item) => (
        <Item key={item.id} text={renderText(item)} />
      ))}
      {addable ? <Add key={Math.random()} text={addButtonText} onAdd={onAdd} /> : null}
    </div>
  );
}
