import React, { useState,useEffect } from 'react';
import './App.css';
import Todo from './Todo'
import { Button } from '@material-ui/core';
import { FormControl,Input,InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos,setTodos]=useState([]);//set up short term memory 
  const [input,setInput]=useState('');
 useEffect(() => {
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc =>({id: doc.id,todo: doc.data().todo})))
   })
 }, [])
  const addTodo=(event) =>{
    event.preventDefault();
    db.collection('todos').add({
      todo: input ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);//spread
    setInput('');
  } 
  return (
    <div className="App">
     <h1>hello todo-list 🔥🚀 </h1>

     <form >
     <FormControl>
       <InputLabel> ✔ write a Todo</InputLabel>
       <Input  value={input} onChange={event => setInput(event.target.value)}/>
     </FormControl>
     <Button disabled ={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
        addTodo
     </Button>
     </form>
     <ul>
       {
         todos.map(todo => (
           <Todo todo={todo}/>  
         ))
       }
     </ul>
    </div>
  );
}

export default App;
