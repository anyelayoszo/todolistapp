import React from 'react';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App () {
  return (
    <div>
      <Header title="TodoAPP"/>
      <TodoList/>
    </div>
  );
}

export default App;
