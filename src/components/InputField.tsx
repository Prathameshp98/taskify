import React from 'react'
import './styles.css'

const InputField: React.FC = () => {
  return (
    <form className='input'>
        <input type='text' className='input__box' placeholder='Enter a task' />
        <button type='submit' className='input__submit'>GO</button>
    </form>
  )
}

export default InputField
