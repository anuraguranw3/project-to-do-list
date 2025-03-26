
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import { useDispatch } from "react-redux";
import { removeTask, toggleTaskCompletion } from "../features/tasks/tasksSlice";

const TodoItems = ({ text, id, isComplete, priority }) => {

  const dispatch = useDispatch();


  return (
    <div
      onClick={() => {
        dispatch(toggleTaskCompletion(id));
      }}
      className={`w-full flex items-center justify-between gap-2 my-2 p-2 border-x-2 rounded-xl ${priority === "High"
          ? "border-red-500"
          : priority === "Medium"
            ? "border-yellow-500"
            : priority === "Low"
              ? "border-green-500"
              : "border-gray-500"
        } cursor-pointer`}
    >
      <div className="flex items-center gap-1">
        <img src={isComplete ? tick : not_tick} alt="icon" className="w-6" />
        <p
          className={`text-white/80 ml-3 text-[1.1rem] text-wrap break-all ${isComplete ? "line-through" : ""}`}
          style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
          {text}
        </p>
      </div>
      <img onClick={(e) => {
        e.stopPropagation();
        dispatch(removeTask(id));
      }}
        src={delete_icon}
        alt="icon"
        className="w-5 cursor-pointer" />
    </div>
  );
};

export default TodoItems;