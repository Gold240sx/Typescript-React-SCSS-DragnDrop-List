// React Stuff
import React, { useState } from 'react';

//Components
import InputField from './TS/Components/InputField'
import { Todo } from './TS/model';
import TodoList from './TS/Components/TodoList';

//Styles and Images
import './Styles/SCSS/App.scss';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    setTodos([...todos, { id: Date.now(), todo,isDone:false}])
    setTodo('');

    console.log(todos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </header>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
