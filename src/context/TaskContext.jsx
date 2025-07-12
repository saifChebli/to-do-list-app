import React , { useState , createContext , useContext } from 'react'


// createContext : used to create a new context

const TaskContext = createContext()

// useContext : lets us consume this context in any component


// TaskProvider is a component that wraps our app , provides the shared state (tasks)
export const  TaskProvider = ({children}) => {

    const [tasks , setTasks] = useState([])

    const addTask = (text) => {
        setTasks([...tasks , { id : Date.now() , text , completed : false }])
    }

    const toggleComplete = (id) => {
        setTasks(
            tasks.map(task => task.id === id ? {...task , completed : !task.completed}   : task)
        )
    }

    const deleteTask = (id) => {
        setTasks(
            tasks.filter(task => task.id !== id)
        )
    }

    return (
        <TaskContext.Provider value={{addTask ,tasks , toggleComplete, deleteTask }} >
            {children}
        </TaskContext.Provider>
    )


}

// useContext(TaskContext) // consume the TaskContext 
// useTasks // Custom hook
export const useTasks = () => useContext(TaskContext)