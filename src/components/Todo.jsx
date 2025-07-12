import React, { useState  } from "react";
import { useTasks } from "../context/TaskContext";

const Todo = () => {

    const { addTask , tasks , toggleComplete, deleteTask } = useTasks()
    
  const [inputValue, setInputValue] = useState("");


    const handleAddTask = () => {
        addTask(inputValue)
        setInputValue('')
    }

  return (
    <div className="bg-white m-4 rounded-2xl shadow-lg p-6 w-full max-w-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-indigo-600"> 📝 To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
        className="border border-gray-300 focus:border-gray-400 outline-0 rounded p-2 flex-grow"
          type="text"
          placeholder="Add a Task ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button  className= "bg-indigo-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-indigo-600" onClick={handleAddTask}>Add</button>
      </div>
      <ul className="space-y-2">
      {
        tasks.map(task => (
            <li key={task.id} className="flex justify-between items-center p-2 border rounded">
              <span className={`cursor-pointer ${task.completed ?  ' bg-green-100 line-through'  : ''}`} onClick={() => toggleComplete(task.id)} >{task.text}</span>
              <button className="cursor-pointer" onClick={()=>deleteTask(task.id)}>❌</button>
            </li>
        ))
      }
      </ul>
     
    </div>
  );
};

export default Todo;
