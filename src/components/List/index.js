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

export default function List(props) {
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
