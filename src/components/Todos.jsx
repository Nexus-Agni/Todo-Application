import React, { useEffect, useState } from 'react'
import { database } from '../appwrite/appwriteConfig'

function Todos() {
  const [todos, setTodos] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(()=>{
    const fetchTodos = async () => {
      setLoader(true)
      try {
        const response = await database.listDocuments(
          process.env.DATABASE_ID,
          process.env.TODO_DOCUMENT_ID,
        )
        setTodos(response.documents)
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false)
      }
    }
    fetchTodos()
  },[])

  const deleteTodo = async (id) => {
    try {
      const response = await database.deleteDocument('662a06dd62d4dab2e0c8', '662a06e4bc4ec04c790a', id)
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <p className="text-xl font-bold mb-2">Todo List</p>
      {loader ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {todos.map((item)=>(
            <div key={item.$id} >
              <div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
                <div>
                  <p>{item.todo}</p>
                </div>
                <div>
                  <span
                    className="text-red-400 cursor-pointer"
                    onClick={()=>{
                      deleteTodo(item.$id)
                    }}
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Todos