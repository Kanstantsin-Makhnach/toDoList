import React, { useEffect, useState } from 'react';
import './App.css';
import Task from './Task';
import Input from './Input';
import Edittask from './Edittask';
import Login from './Login';

function App() {
  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [loged, setLoged] = useState(false);
 
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(taskList))
  }, [taskList])   

  const addNewTask = (value) =>  {
    setTaskList(taskList.concat(value));
    // setTaskList((prevValue) => {
    //   const newTaskList = prevValue.concat(value)
    //   localStorage.setItem('tasklist', JSON.stringify(newTaskList))
    //   return newTaskList;
    //   })
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

  function loginCheck() {
    setLoged(!loged)    
  }
  
  function renderList(){
    if(taskList.length === 0) {
      return <h1>Вы должны добавить новые задачи</h1>
    }
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
  if (loged === false){
    return (
    <Login 
      loginCheck={loginCheck}
      loged={loged}
      setLoged={setLoged}
    />
  )} 
    return (
      <div 
        className="App container-sm"
      >
        <Input                     
          addNewTask={addNewTask}
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
