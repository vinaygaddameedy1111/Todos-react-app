import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
  return (
    <div>
      {
        todolist.map((todo,index)=>
        <div>
<h4>{todo}&nbsp;&nbsp;<button onClick={()=>deleteHandler(index)} className="btn btn-danger">delete</button></h4>
        </div>
        )
      }
    </div>
  )
}

export default TodoList