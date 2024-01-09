import Image from 'next/image'
import TodoForm from './_comonents/todo/TodoForm'
import Todos from './_comonents/todo/Todos'

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col max-w-lg mx-auto mt-32 ">
      <h1>Home page</h1>

      <TodoForm/>
      <Todos/>
      
    </main>
  )
}
