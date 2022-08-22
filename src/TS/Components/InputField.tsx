// import React from "react";
import '../../Styles/SCSS/genStyles.scss'

const InputField = () => {
    return (
        <form className='input'>
            <input type="input" placeholder="Enter a task" className="input__box" />
            <button className="input__submit" type="submit">Go</button>
        </form>
    );
}

export default InputField;