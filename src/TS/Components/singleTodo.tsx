import React, { useState, useEffect, useRef } from 'react';

import { Todo } from '../model'
import { AiFillEdit } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

//Stylesheet
import '../../Styles/SCSS/singleTodo.scss'

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

const SingleTodo = ({todo, todos, setTodos}:Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo)
  
  const handleDone = (id: number) => {
    // let checks: HTMLElement[] = document.querySelectorAll('.check') as HTMLElement;
    // // checks.forEach((check) => {check.ELEMENT_NODE.child[0].id===id ? check.style.opacity = "0" : ()}
    
    // checks.forEach(( check, index) => {
    //   //console.log(check.childNodes[0]) //provides check svg
    //   check.childNodes[0].style.opacity="0";

    // })

    setTodos(
      todos.map((todo) => 
        todo.id === id ? {...todo, isDone: !todo.isDone } : todo
      )
    );
  }

  const handleDelete = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo) => (todo.id===id ? {...todo, todo:editTodo}: todo)))
    
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? 
        (<input 
            ref={inputRef}
            value={editTodo} 
            onChange={(e) => setEditTodo(e.target.value)} 
            className="todos__single--text" 
        />)
        : todo.isDone ? 
          (<s className="todos__single--text">{todo.todo}</s>) : 
          (<span className='todos__single--text'>{todo.todo}</span>)
      }

        <div>
            <span className="icon" onClick={() => setEdit(!edit)}>
                <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
            <span className="icon check" onClick={() => {
                    if(edit && !todo.isDone) {setEdit(!edit)}
                    else {handleDone(todo.id)}
                  }}>
                <MdDone />
            </span>
        </div>
    </form>
  );
}

export default SingleTodo;
