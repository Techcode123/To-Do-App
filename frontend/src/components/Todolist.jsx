
export const Todolist = ({ todo, index }) => {

    const handleComplete = () => {
        console.log(todo, index)
        fetch("http://localhost:3000/completed", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: todo._id,
                bool: todo.completed
            }),
        }).then(() => {
            window.location.reload('/')
        }).catch(() => {
            window.location.reload('/')
        });
    }

    const handleDelete = () => {
        fetch(`http://localhost:3000/delete/${todo._id}`, {
            method: 'DELETE',
        }).then(() => {
            window.location.reload('/')
        }).catch(() => {
            window.location.reload('/')
        });;
    }
    return (
        <>
            <div key={index} style={todo.completed ? { backgroundColor: "lime", fontFamily: "cursive", color: "white" } : { backgroundColor: "white", boxShadow: "5px 5px 40px 2px lightgrey", fontFamily: "cursive" }} className="w-[98%] mx-auto  mt-4 p-4 rounded-md flex justify-between  sm:text-xl ">
                <h1 className="mr-2">{index + 1}.&nbsp;{todo.title}</h1>
                {/* <h2>{todo.description}</h2> */}
                <div className="flex items-center">

                    {/* {todo.completed ? "Completed" : "Mark as Complete"} */}
                    {todo.completed ? <input type="checkbox" onChange={handleComplete} className="w-5 h-5 cursor-pointer mr-3" checked style={{ accentColor: "blue" }} /> : <input type="checkbox" onChange={handleComplete} className="w-5 h-5 cursor-pointer mr-3" style={{ accentColor: "blue" }} />}

                    <button onClick={handleDelete} className="cursor-pointer">
                        <i class="fa-solid fa-delete-left fa-1x" style={{ color: "#c61906" }}></i>
                    </button>

                </div>

            </div>
        </>
    );
}