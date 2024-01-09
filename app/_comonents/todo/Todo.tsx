import React from 'react'
import TodoForm from './TodoForm'
import { todoItem } from './Todos';
import DoneTodo from './DoneTodo';
import DeleteTodo from './DeleteTodo';


interface todoProps {

    todo: todoItem;
   
}
  

const Todo = ({todo}: todoProps ) => {

    

  return (

    <li className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <p className={`text-sm font-semibold leading-6 text-gray-900
                 ${todo.isDone && 'line-through'}`}>{todo.title}</p>
            </div>
            
            <div className="flex">
                <span className="isolate inline-flex rounded-md shadow-sm px-2">
                    <DoneTodo todo={todo}  />
                   
                </span>
                <span className="isolate inline-flex rounded-md shadow-sm px-2">
                  
                    <DeleteTodo todoId={todo._id} />
                </span>
            </div>
        </li>
  )
}

export default Todo