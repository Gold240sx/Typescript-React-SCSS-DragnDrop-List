import React from 'react';

// Components
import { Todo } from '../model';

//Stylesheets
import '../../Styles/SCSS/genStyles.scss';
import SingleTodo from './singleTodo';
import { Droppable } from '@hello-pangea/dnd';

interface Props{
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, completedTodos, setTodos, setCompletedTodos }) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div 
            className={`todos ${snapshot.isDraggingOver ? "dragActive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos___heading">
              Active Tasks
            </span>
            {todos.map((todo, index) => (
              <SingleTodo 
                todo={todo} 
                key={todo.id}
                index={index}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provided, snapshot) => (
          <div 
            className={`todos remove ${snapshot.isDraggingOver ? "dragComplete" : ""}`}
            ref={provided.innerRef} 
            {...provided.droppableProps}
          >
            <span className="todos___heading">
                Completed Tasks
            </span>
            {completedTodos.map((todo, index) => (
              <SingleTodo 
                todo={todo} 
                key={todo.id}
                index={index}
                todos={completedTodos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TodoList;
