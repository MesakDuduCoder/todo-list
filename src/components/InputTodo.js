import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import '../css/inputTodo.css';

function InputTodo({ addItem, list, id }) {
  const [todo, setTodo] = useState('');

  const handleTodo = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [
      {
        id,
        title: todo,
        done: false,
      },
    ];
    const add = list.concat(newList);
    addItem(add);

    setTodo('');
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleTodo} value={todo} />
        <button type="submit">
          <FaPlusCircle />
        </button>
      </form>
    </div>
  );
}

InputTodo.propTypes = {
  addItem: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.number, PropTypes.string, PropTypes.bool),
  ).isRequired,
  id: PropTypes.number.isRequired,
};

export default InputTodo;
