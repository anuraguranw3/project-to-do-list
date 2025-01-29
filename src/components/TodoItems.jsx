
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div onClick={() => { toggle(id) }} className="w-full flex items-center justify-between gap-1 my-3 bg-red-500">
      <div className="flex items-center gap-1">
        <img src={isComplete ? tick : not_tick} alt="icon" className="w-6" />
        <p className={`text-white/80 ml-3 text-[1.1rem] break-all ${isComplete ? "line-through" : ""}`}>{text}</p>
      </div>
      <img onClick={() => { deleteTodo(id) }} src={delete_icon} alt="icon" className="w-5 cursor-pointer" />
    </div>
  );
};

export default TodoItems;