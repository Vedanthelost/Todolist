import { useState,useEffect } from 'react';
import Header from './components/header';
import Todohero from './components/todohero';
import Form from './components/form';
import TodoList from './components/TODOList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
    <Header/>
    <Todohero todos_completed={todos_completed} total_todos={total_todos} />
    <Form todos={todos} setTodos={setTodos} />
    <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    
    
  );
}

export default App;
