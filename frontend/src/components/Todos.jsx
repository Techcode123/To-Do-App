import { Todolist } from "./Todolist";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Todos({ todos, loading }) {


    return (
        <div className="w-full  min-h-[90vh] bg-slate-200 pt-2 pb-2 ">
            {todos.length !== 0 ? todos.map((todo, index) => (
                <Todolist todo={todo} index={index} />
            )) :
                <div className="w-full flex flex-col justify-center items-center min-h-[90vh] bg-slate-200 ">
                    <i class="fa-solid fa-triangle-exclamation fa-8x" style={{ color: "#92949b" }}></i>
                    <div style={{ fontFamily: "cursive", color: "#92949b" }} className="text-2xl">Empty</div>
                    {/* <i class="fa-solid fa-note-sticky fa-8x " style={{ color: "#92949b" }}></i> */}
                </div>
            }
        </div>
    );
}

