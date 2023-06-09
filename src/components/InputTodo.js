import React, { useRef } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

import '../css/inputTodo.css';

function InputTodo({ addItem, list, id }) {
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = [
      {
        id,
        title: ref.current.value,
        done: false,
      },
    ];
    const add = list.concat(newList);
    addItem(add);

    ref.current.value = '';
  };

  return (
    <div className="input">
      <form onSubmit={handleSubmit}>
        <input type="text" ref={ref} />
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
