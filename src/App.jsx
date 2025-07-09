import React from 'react'
import Todo from './components/Todo'
import { TaskProvider } from './context/TaskContext'

const App = () => {
  return (
    <TaskProvider>
      <div className='flex justify-center items-center'>
        <Todo />
      </div>

    </TaskProvider>
  )
}

export default App