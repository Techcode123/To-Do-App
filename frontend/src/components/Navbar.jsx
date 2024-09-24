import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navbar = () => {
    const [loading, setloading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = async () => {
        console.log(title, description)
        try {
            setloading(true);
            const response = await fetch("http://localhost:3000/todo", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: title,
                }),
            });

            const json = await response.json();
            setloading(false);
            window.location.reload('/')
        } catch (error) {
            toast.error("Error in Adding");
            console.log('Error adding todo:', error.message);
            setloading(false);
        }
    };

    const handleModal = () => {
        document.getElementById('modal').style.display = "block"
        document.getElementById('form').style.display = "flex"
    }

    const cancelModal = () => {
        document.getElementById('modal').style.display = "none"
        document.getElementById('form').style.display = "none"

    }
    return (
        <>
            <header className="w-full shadow-lg" style={{ fontFamily: "cursive" }}>
                <nav className="w-full flex justify-between items-center ">
                    <div className="my-3 ml-4 text-xl sm:text-3xl"><i class="fa-duotone fa-solid fa-book"></i>&nbsp;Daily Tasks</div>
                    <button className="my-3 mr-4 p-2 bg-blue-600 text-white  sm:text-xl rounded-md hover:bg-blue-700" onClick={handleModal}><i class="fa-solid fa-plus" style={{ marginRight: "5px" }}></i>Create</button>
                </nav>
            </header>


            <div id="modal" className="h-full w-full fixed top-0 left-0 z-10 hidden" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={cancelModal}>
            </div>


            <div id="form" className="fixed z-50 top-0 bottom-0 max-h-[150px] my-auto mx-auto left-0 right-0 bg-white w-[250px] sm:w-[500px] rounded-md  shadow-md justify-center flex-col hidden ">
                <input
                    id="title"
                    className=' border border-gray-400 mx-4 mb-4 mt-6  rounded-md h-9 p-2 '
                    type="text"
                    style={{ fontFamily: "cursive" }}
                    placeholder="Enter task..."
                    onChange={(e) => setTitle(e.target.value)}
                />

                {/* <textarea
                    id="description"
                    className=' border border-gray-400 mx-4 mb-4 rounded-md h-32 p-2  overflow-y-scroll'
                    type="text"
                    placeholder="Enter description..."
                    onChange={(e) => setDescription(e.target.value)}
                /> <br /> */}

                {loading ? <button style={{ fontFamily: "cursive" }}
                    className=' border border-gray-400 mx-4 mb-6 rounded-md h-9 bg-blue-600 text-white hover:bg-blue-700'
                >
                    Loading...
                </button> : <button style={{ fontFamily: "cursive" }}
                    className=' border border-gray-400 mx-4 mb-6 rounded-md h-9 bg-blue-600 text-white hover:bg-blue-700'
                    onClick={handleSubmit}
                >
                    Add
                </button>}
            </div>
            <ToastContainer
                position='top-center'
            />

        </>
    );
}