import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import {Todo} from './models/TodoModel'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random.toString(), text: text}]) 
  }

  const todoDeleteHandler = (todoId: string) => {
    console.log(todoId)
    const newList = todos.filter((todo) => todo.id !== todoId);
    setTodos(newList)
    return todoId
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}  />
    </div>
  );
}
export default App;
