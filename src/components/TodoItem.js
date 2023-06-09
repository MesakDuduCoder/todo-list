import React, { useState } from 'react';
import '../css/todoItem.css';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import PropTypes from 'prop-types';

function TodoItem({
  item, setUpdate, setDelete, setCheck,
}) {
  const [editing, setEditing] = useState(false);
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const checkMode = {};
  if (item.done) {
    checkMode.textDecoration = 'line-through';
  } else {
    checkMode.textDecoration = 'none';
  }

  const handleEditing = () => {
    setEditing(true);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setDelete(id);
  };

  const handleCheck = (e, id) => {
    e.preventDefault();

    setCheck(id);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  return (
    <li className="todoItem" style={checkMode}>
      <input
        type="checkbox"
        name=""
        id=""
        onClick={(e) => handleCheck(e, item.id)}
      />
      <p style={viewMode}>{item.title}</p>

      <input
        className="editbox"
        style={editMode}
        type="text"
        value={item.title}
        onChange={(e) => setUpdate(e.target.value, item.id)}
        onKeyDown={handleUpdatedDone}
      />
      <button type="button" onClick={handleEditing}>
        <AiFillEdit />
      </button>
      <button
        type="button"
        onClick={(e) => handleDelete(e, item.id)}
      >
        <FaTrash />
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.number, PropTypes.string, PropTypes.bool)
    .isRequired,
  setUpdate: PropTypes.func.isRequired,
  setDelete: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
};
export default TodoItem;
