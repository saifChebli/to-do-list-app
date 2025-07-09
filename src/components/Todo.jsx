import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const Todo = () => {
    const { addTask } = useTasks()
    
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
    </div>
  );
};

export default Todo;
