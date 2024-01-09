import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Todo from './Todo';
import { API_URL } from '@/lib/config';

export interface todoItem {
    _id: string;
    title: string;
    isDone: Boolean;
}
  

const Todos = async () => {



   type todoList= todoItem[];

    
    const res = await fetch(`${API_URL}/api/todo`,{
        cache: 'no-cache',
        // method: 'GET',       
      });

     const todos: todoList = await res.json();

  return (
    <div className='w-full my-10'>
<Card>
  <CardHeader>
    <CardTitle>Todo's</CardTitle>
    <CardDescription>Become Productive</CardDescription>
  </CardHeader>
  <CardContent>
    <ul role='list' className='divide-y divide-grey-100'>
        {
            todos.map((todo) =>(

                <Todo todo={todo}/>

            ))
        }
    </ul>
  </CardContent>
 
</Card>

        
</div>
  )
}

export default Todos