import React, { useState } from 'react';
import './App.css';
import classNames from 'classnames';
import Task from './Task';
import Input from './Input';
import Edittask from './Edittask';

function App() {
  const [taskList, setTaskList] = useState([
      {
        id: 'aasds',
        text: 'learn html',
        done: false,
        isEditing: false},
      {
        id: 'asdasdasd',
        text: 'learn css',
        done: false,
        isEditing: false},
      {
        id:'asdvxvxc',
        text: 'learn js',
        done: false,
        isEditing: false},
      {
        id:'asdvxvxca',
        text: 'learn react',
        done: false,
        isEditing: false}
      ]);
 
  const addNewTask = (value) =>  {
    setTaskList(taskList.concat(value));
  };
  
  const saveChanges = (value, id) => {
    setTaskList(taskList.map((item) => {
      if (id === item.id){
        item.text = value;
        item.isEditing = false;
      } 
      return item;
    }));
  };
  
  function renderList(){
    const list = taskList.map((item) => {
      if (item.isEditing === false){
        return (
          <Task 
            key={item.id}
            text={item.text}
            id={item.id} 
            done={item.done}           
            taskList={taskList}
            setTaskList={setTaskList}
          />);
      } return (
          <Edittask 
            id={item.id} 
            text={item.text}
            saveChanges={saveChanges}
          />);
    });
    return list;
  };

  console.log(taskList);

  return (
    <div 
      className="App container-sm"
    >
      <Input                     
        addNewTas={addNewTask}
        />
      <ul 
        className='container-xs'
      >
        {renderList()}
      </ul>
    </div>
  );

}

export default App;
