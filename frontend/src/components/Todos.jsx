import { Todolist } from "./Todolist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Todos({ todos, loading }) {


    return (
        <div className="w-full  min-h-[90vh] bg-slate-200 pt-2 pb-2 ">

            {todos.length !== 0 ?
                // if length of todo array is not 0 that then below code will display
                // it means user has created it one todo
                todos.map((todo, index) => (
                    <Todolist todo={todo} index={index} />
                ))
                :
                // if length of todo is 0 then below code will display
                // it means user has not created todo so we will show todo empty
                <div className="w-full flex flex-col justify-center items-center min-h-[90vh] bg-slate-200 ">
                    {/* below code is taken from font awesome icon to display icon */}
                    <i class="fa-solid fa-triangle-exclamation fa-8x" style={{ color: "#92949b" }}></i>


                    <div style={{ fontFamily: "cursive", color: "#92949b" }} className="text-2xl">Empty</div>
                </div>
            }

        </div>
    );
}

