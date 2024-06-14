import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
    return (
        <div onClick={() => { toggle(id) }} className="flex items-center my-3 gap-2">
            <div className="flex flex-1 items-center cursor-pointer">
                <img src={isComplete ? tick : not_tick} alt="icon" className="w-6" />
                <p className={`text-slate-700 ml-3 text-[1.1rem] ${isComplete ? "line-through" : ""}`}>{text}</p>
            </div>
            <img onClick={() => { deleteTodo(id) }} src={delete_icon} alt="icon" className="w-5 cursor-pointer" />
        </div>
    );
};

export default TodoItems;