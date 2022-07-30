import React from 'react';
import classNames from 'classnames';

function Task({id, done, text, taskList, setTaskList}) {

    const deleteTask = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = e.target.getAttribute('id');
        setTaskList(taskList.filter(item => item.id !== id)); // сравниваем итем, полученный из исходлного массива с именем, полученным при нажатии на кнопку из нее (аттрибут)
    };

    const changeDone = (e) => {
    const id = e.target.getAttribute('id');
    const newTaskList = taskList.map((item) => {
        if (item.id === id) {
        item.done = !item.done;
        }
        return item;
    });    
    setTaskList(newTaskList);
    };

    const editTask = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = e.target.getAttribute('id');
        const newTaskList = taskList.map((item) => {
            if (item.id === id) {
            item.isEditing = !item.isEditing;
            }      
            return item;
        });    
        setTaskList(newTaskList);
    };
  

    return (
        <div 
            key={id} 
            className='d-flex align-items-center justify-content-around'
        >
            <input 
                id={id} 
                type='checkbox' 
                checked={done} 
                onChange={changeDone}
                className='col-sm-1 form-check-input mt-0'
            />
            <li 
                className={
                    classNames(
                        'col-sm-5 ', 
                        {'text-decoration-line-through': done
                    })}  
            >
                {text}
            </li>
            <button
                id={id} 
                className='btn btn-outline-danger btn-sm col-sm-1' 
                onClick={deleteTask}
            >
                <i class="bi bi-trash"></i>
            </button>
            <button
                id={id} 
                className='btn btn-outline-danger btn-sm col-sm-1' 
                onClick={editTask}
            >
                <i className="bi bi-pencil-fill"></i>
            </button>
      </div>
    
    );
}

export default Task;