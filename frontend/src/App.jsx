import { useEffect, useState } from 'react'
import { Todos } from './components/Todos.jsx'
import { Navbar } from './components/Navbar.jsx';

function App() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("no error")
  const [todos, setTodos] = useState([]);

  // fetching data of todo from database
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
        setloading(false);
        console.log(todos);
      }).catch((err) => {
        console.log(err.message);
        setError(err.message)
        setloading(false);
      })
  }, [])




  return (
    <>
      <div>
        <Navbar />
        {
          loading ?
            // if loading is true then below code will display
            // it takes some time to load data from database till then we will display below code from sometime untill data will not come from databse
            <div className='w-full min-h-[90vh] flex justify-center items-center bg-slate-200'>
              <div class="spinner-border text-primary size-14" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>

            </div>
            :
            // if loading is false below code will display
            // suppose data did not come from database due to internet connection then catch function will catch the error and we will check the error, we will check if user internet is off or on
            error === "Failed to fetch" ?
              //if there is error due to internet connection then below code will run
              <div className="w-full flex flex-col justify-center items-center min-h-[90vh] bg-slate-200 ">
                <i class="fa-solid fa-wifi fa-8x" style={{ color: "#92949b" }}></i>
                <div style={{ fontFamily: "cursive", color: "#92949b" }} className="text-2xl">Check Your Connection</div></div>
              :
              // if there is no error due to internet connection then below code will run
              <Todos todos={todos} />
        }

      </div>
    </>
  )
}

export default App

