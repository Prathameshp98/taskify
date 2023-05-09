import React from 'react'
import './styles.css'

interface Props {
    todo: string | number;
    setTodo: React.Dispatch<React.SetStateAction<string | number>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <form className='input'>
        <input 
            type='text' 
            className='input__box' 
            placeholder='Enter a task'
            value={todo}
            onChange={
                (e) => {
                    setTodo(e.target.value)
                }
            } 
        />
        <button 
            type='submit' 
            className='input__submit'>GO</button>
    </form>
  )
}

export default InputField
