import React, { useEffect, useState } from 'react';
import '../css/todosLogic.css';
import TodosList from './TodosList';
import InputTodo from './InputTodo';

function TodosLogic() {
  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  const [todoList, setTodoList] = useState(getInitialTodos());

  const setUpdate = (updatedTitle, id) => {
    // update state
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };
  const setDelete = (id) => {
    // update state
    const newList = todoList.filter((todo) => todo.id !== id);
    newList.forEach((item, index) => {
      item.id = index;
    });
    setTodoList(
      newList,
    );
  };
  const setCheck = (id) => {
    // update state

    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id && todo.done === false) {
          todo.done = true;
        } else {
          todo.done = false;
        }
        return todo;
      }),
    );
  };

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todoList);
    localStorage.setItem('todos', temp);
  }, [todoList]);

  return (
    <div className="todosLogic">
      <InputTodo addItem={setTodoList} list={todoList} id={todoList.length} />
      <TodosList
        list={todoList}
        setUpdate={setUpdate}
        setDelete={setDelete}
        setCheck={setCheck}
      />
    </div>
  );
}

export default TodosLogic;
