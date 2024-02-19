import React,{useState} from 'react'
import './App.css'
import TodoList from './TodoList'

const App = () => {
  const [task,setTask]=useState("")
  const [todos,setTodos]=useState([])

  const changeHandler=e=>{
    setTask(e.target.value)
  }

  const submitHandler=e=>{
  e.preventDefault()
       if (!todos.includes(task)) {
        setTodos([...todos,task]);
        setTask("");
      } else {
        alert('Task already exists!');
      }
    }

  const deleteHandler=(indexvalue)=>{
    const newTodos = todos.filter((todo,index)=>index!==indexvalue)
    setTodos(newTodos)
  } 

  return (
    <div>
      <center>
        <h1>Todo Application</h1>
        <form onSubmit={submitHandler}>
        <input type="text" name="task" value={task} onChange={changeHandler} />&nbsp;&nbsp;
        <input type="submit" name="submit" value="Add" className="btn btn-primary" /> <br/>
        </form>
       <TodoList todolist={todos} deleteHandler={deleteHandler} />
      </center>
    </div>
  )
}

export default App