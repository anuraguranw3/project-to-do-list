import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id)
    });
  };

  const toggle = (id) => {
    setTodoList((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">

      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="image" className="w-8" />
        <h1 className="text-3xl font-semibold">To Do List</h1>
      </div>

      <div className="flex items-center my-7 bg-gray-800 rounded-xl">
        <input ref={inputRef} type="text" placeholder="Add your task" className="bg-transparent text-white border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-100" />
        <button onClick={add} type="button" className="border-none rounded-lg bg-green-500 text-white font-bold mr-2 w-24 h-8 cursor-pointer">Add +</button>
      </div>

      <div>
        {
          todoList.map((item, index) => {
            return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
          })
        }
      </div>

    </div>
  );
};

export default Todo;