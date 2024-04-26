import React, { useState } from 'react'
import { database } from '../appwrite/appwriteConfig';
import {v4 as uuid4} from 'uuid';

function TodoForm() {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const promise = database.createDocument(
      '662a06dd62d4dab2e0c8',
      '662a06e4bc4ec04c790a',
      uuid4(),
      {todo}
  );
    promise.then(
      function (response) {
        console.log(response);
      },
      function (error) {
        console.log(error);
      }
    )
    setTodo("")
    // window.location.reload()
  }
  return (
    <div className="max-w-7xl mx-auto mt-10">
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex justify-center mb-10"
    >
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter Todo"
        value={todo}
        className="border p-2 w-2/3 rounded-md"
        onChange={(e)=> {
          setTodo(e.target.value)
        }}
      />
      <button
        className="bg-purple-500 p-2 text-white ml-2 rounded-md"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  </div>
  )
}

export default TodoForm