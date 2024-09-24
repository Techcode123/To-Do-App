import { useEffect, useState } from 'react'
import { Todos } from './components/Todos.jsx'
import { Navbar } from './components/Navbar.jsx';

function App() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("no error")
  const [todos, setTodos] = useState([]);
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
          loading ? <div className='w-full min-h-[90vh] flex justify-center items-center bg-slate-200'>
            <div class="spinner-border text-primary size-14" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>

          </div> : error === "Failed to fetch" ? <div className="w-full flex flex-col justify-center items-center min-h-[90vh] bg-slate-200 ">
            <i class="fa-solid fa-wifi fa-8x" style={{ color: "#92949b" }}></i>
            <div style={{ fontFamily: "cursive", color: "#92949b" }} className="text-2xl">Check Your Connection</div></div> : <Todos todos={todos} />
        }

      </div>
    </>
  )
}

export default App

