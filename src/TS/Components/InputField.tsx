import React, {useRef} from 'react';

// import React from "react";
import '../../Styles/SCSS/genStyles.scss'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    // setTodo taken from hovering over setTodo in app.tsx useState declaration
    handleAdd: (e: React.FormEvent) => void;
}
// const InputField: React.FC<Props> = ({todo, setTodo}) => {
const InputField = ({todo, setTodo, handleAdd}:Props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className='input' onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur(); //shifts focus from input box
            }}>
            <input 
                ref={inputRef}
                type="input" 
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
                placeholder="Enter a task" 
                className="input__box" />
            <button className="input__submit" type="submit">Go</button>
        </form>
    );
}

export default InputField;