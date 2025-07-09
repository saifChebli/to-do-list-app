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
    console.log(tasks)
    return (
        <TaskContext.Provider value={{addTask}}>
            {children}
        </TaskContext.Provider>
    )


}


export const useTasks = () => useContext(TaskContext)