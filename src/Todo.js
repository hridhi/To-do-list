import React , {useState} from 'react';
import './Todo.css';
import { ListItem , List, ListItemText,ListItemAvatar,Button,Modal} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function Todo(props) {
    const classes = useStyles();
    const [open,setopen]=useState(false);
    const[input,setInput]=useState();      
    const handleopen=()=>{
        setopen(true);
    };
    const updateTodo=() =>{
        setopen(false);
        db.collection('todos').doc(props.todo.id).set({
          todo: input  
        },{merge: true})
    }
    return (
        <>
        <Modal
            open={open}
            onClose={e => setopen(false)}
            >
                <div className={classes.paper}>
                    <h1>You can edit here</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}></input>
                    <Button onClick={updateTodo}>update todo</Button>
                </div>
        </Modal>
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary='deadline 🕗'></ListItemText>
            </ListItem> 
            <button onClick={e => setopen(true)}>edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
        </List>
        </>
    )
}
 
export default Todo
