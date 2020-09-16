import React, { useState } from 'react';
import List from './List';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import './App.css';

const App = () => {
  let [nextToDo, handleNextToDo] = useState('');
  let [DisplayToDos, handleArray] = useState([]);

  const NextToDoHandle = (event) => {
    handleNextToDo(event.target.value);
  };

  const AddToDo = (event) => {
    event.preventDefault();
    //DisplayToDos.push(nextToDo)
    if (nextToDo != '') {
      handleArray((prev) => {
        return [...prev, nextToDo];
      });
    }
    console.log(DisplayToDos);
    handleNextToDo('');
  };

  const deleteItem = (id) => {
    //One Approach
    // let arr = DisplayToDos;
    // arr.splice(event.target.id,1)
    // handleArray(() => {
    //     return [...arr]
    // })
    //#######Better Approach#######
    handleArray((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      });
    });
    console.log('the state is ' + DisplayToDos);
  };

  return (
    <div className='main'>
      <h1 className='appName'>
        <span className='topText'>TO DO APP</span>
      </h1>
      <div className='mainContent'>
        <form onSubmit={AddToDo}>
          {/* <input
            type='text'
            autoComplete='off'
            name='toDoText'
            value={nextToDo}
            placeholder='Enter the task'
            onChange={NextToDoHandle}
          /> */}
          <TextField
            id='standard-basic'
            value={nextToDo}
            autoComplete='off'
            onChange={NextToDoHandle}
            label='Add a New Task'
          />
          <Tooltip title='Add To Do'>
            <Fab
              onClick={AddToDo}
              style={{ backgroundColor: 'lightgreen' }}
              color='secondary'
            >
              <AddBoxOutlinedIcon />
            </Fab>
          </Tooltip>
        </form>
        <div className='list'>
          <ul>
            {DisplayToDos.map((item, count) => {
              return (
                <List
                  thing={item}
                  key={count}
                  id={count}
                  ct={count}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
