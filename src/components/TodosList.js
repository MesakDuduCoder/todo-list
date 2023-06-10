import React from 'react';
import '../css/todosList.css';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList({
  list, setUpdate, setDelete, setCheck,
}) {
  return (
    <ul className="todosList">
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          setUpdate={setUpdate}
          setDelete={setDelete}
          setCheck={setCheck}
        />
      ))}
    </ul>
  );
}
TodosList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.number, PropTypes.string, PropTypes.bool),
  ).isRequired,
  setUpdate: PropTypes.func.isRequired,
  setDelete: PropTypes.func.isRequired,
  setCheck: PropTypes.func.isRequired,
};
export default TodosList;
