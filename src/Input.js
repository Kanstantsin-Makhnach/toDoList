import React, {useState}  from 'react';
import classNames from 'classnames';


function Input({addNewTask}) {

    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!inputValue.trim()) return;
            const value = {
            id: 'id' + (new Date()).getTime(),
            text: inputValue,
            done: false,
            isEditing: false
        } 
        addNewTask(value);
        setInputValue('');     
    };
    
    return (
        <div 
            className='d-flex align-items-center'
        >
            <input 
                type='text' 
                placeholder='Введите новую задачу' 
                className='col-sm form-control' 
                value={inputValue} 
                onChange={handleChange}
            />
            <button 
                className='btn btn-sm btn-outline-success' 
                value='Добавить задачу'  
                onClick={handleAddTask}
            >
                <i className="bi bi-plus-square"></i>
            </button>
        
        </div>
    );
}

export default Input;