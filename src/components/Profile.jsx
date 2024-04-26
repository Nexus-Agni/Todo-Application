import React, {useEffect, useState} from 'react';
import { account } from '../appwrite/appwriteConfig.js';
import { useNavigate, Link } from 'react-router-dom';
import TodoForm from './TodoForm.jsx';
import Todos from './Todos.jsx';

function Profile() {
  const [userDetails, setUserDetails] = useState(null)
  const navigate = useNavigate();
  useEffect(() => {
    const userData = account.get();
    userData.then(function (response) {
      console.log(response); //success
      setUserDetails(response)
    },
    function (error) {
      console.log(error); //faliure
    })
  }, [])
  
  const handleLogOut = async () => {
    try {
      await account.deleteSession("current")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
  return (
      <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello {userDetails.name}</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <TodoForm />
          {/* TODOS BOX */}
          <Todos />
        </>
      ) : (
        <p className="mt-4">
          Please Login To see Profile{" "}
          <Link to="/">
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md">
              Login
            </span>
          </Link>
        </p>
      )}
    </>


  )
}

export default Profile