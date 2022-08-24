// React Stuff
import React, { useState } from 'react';
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

//Components
import InputField from './TS/Components/InputField'
import { Todo } from './TS/model';
import TodoList from './TS/Components/TodoList';

//Styles and Images
import './Styles/SCSS/App.scss';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!todo.length) return
    
    setTodos([...todos, { id: Date.now(), todo, isDone:false}])
    setTodo('');
  }

  const onDragEnd = (result:DropResult) => {
    const { source, destination } = result;

    // console.log(result)

    if (!destination) return;
    if (destination.droppableId === source.droppableId && 
      destination.index === source.index
    ) return;

    let add, 
        active = todos, 
        complete = completedTodos;

    if(source.droppableId === 'TodosList') {
      add=active[source.index];
      active.splice(source.index, 1);
    } else {
      add=complete[source.index];
      complete.splice(source.index, 1);
    }

    if(destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete)
    setTodos(active)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <button className="back-button">Back</button>
        <header className="App-header">
          <span className="heading">Taskify</span>
          <h2 className="txt-left grey subheader">A Drag and Drop CRUD App Excercise...</h2>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </header>
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
