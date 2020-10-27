import React, { useState } from 'react';

import './index.scss';
import Item from './item';

function Add(props) {
  const { text, onAdd } = props;
  const [inputting, setInputting] = useState(false);
  const [value, setValue] = useState('');

  const handleInput = (event) => {
    setValue(event.target.value, (latestValue) => {
      if (event.key === 'Enter') {
        onAdd(latestValue);
      }
    });
  };

  return (
    <div className="list-add-button">
      {inputting ? (
        <input value={value} onInput={handleInput} />
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
      {addable ?? <Add text={addButtonText} onAdd={onAdd} />}
    </div>
  );
}
