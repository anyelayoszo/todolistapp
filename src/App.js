import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import AddTodoList from './Components/AddTodoList';

function App() {

  const [todos, setTodos] = useState("")
  const [todosList, setTodosList] = useState([])
  const [edittedTodo, setEdittedTodo] = useState('')

  const addTodos = () => {
    if (todos.length > 0) {
      setTodosList(todosList => [...todosList, {
        id: uuidv4(),
        todos: todos,
        isChecked: false,
        isCompleted: false
      }])
    }
    setTodos("");
  }

  const checkTodos = (id) => {
    setTodosList(todosList => todosList.map(todosItem => todosItem.id === id ?
      ({ ...todosItem, isChecked: !todosItem.isChecked }) : todosItem));
  }
  const deleteTodos = (id) => {
    setTodosList(todosList => todosList.filter(todosItem => todosItem.id !== id));
  }
  const editTodos = (id) => {
    setTodosList(todosList => todosList.map(todosItem => todosItem.id === id ?
      ({ ...todosItem, isEditable: true }) : todosItem));
  }
  const saveTodos = (id) => {
    setTodosList(todosList => todosList.map(todosItem => todosItem.id === id ?
      ({ ...todosItem, todos: edittedTodo, isEditable: false }) : todosItem));
  }

  return (
    <div>
      <Header title="TodoAPP" />
      <AddTodoList todovalue={todos} settodovalue={setTodos} addtodo={addTodos} />
      <TodoList
        list={todosList}
        setlist={setTodosList}
        editted={edittedTodo}
        seteditted={setEdittedTodo}
        check={checkTodos}
        delete={deleteTodos}
        edit={editTodos}
        save={saveTodos} />
    </div>
  );
}

export default App;
