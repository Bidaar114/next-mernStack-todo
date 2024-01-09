"use client";

import { API_URL } from '@/lib/config';
import { useRouter } from 'next/navigation';
import React from 'react'
import { todoItem } from './Todos';


interface todoProps {

    todo: todoItem;
   
}
  

const DoneTodo = ({todo}: todoProps ) => {

    const {_id, title, isDone} = todo
    const router = useRouter();

    const handleDone = async () => {
        try {
            const newStatus = !isDone;

            const res = await fetch(`${API_URL}/api/todo/` + _id, {
                method: 'PUT',
                body: JSON.stringify(newStatus)
            });
            await res.json();

            router.refresh();

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <button
                onClick={handleDone}
                type="button"
                className={`relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10`}
            >
                {isDone ? "UnDone" : "Done"}
            </button>
        </div>
    )
}
 
export default DoneTodo;