import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import { fetchWeatherThunk } from "../features/tasks/weatherSlice";
import { logout } from "../features/user/userSlice";

const Todo = () => {

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.tasks.tasks);
  const [priority, setPriority] = useState('Medium');
  const [errorMessage, setErrorMessage] = useState('');
  const inputRef = useRef();

  const [city, setCity] = useState("");
  const weather = useSelector((state) => state.weather.data);
  const weatherLoading = useSelector((state) => state.weather.loading);
  const weatherError = useSelector((state) => state.weather.error);


  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleCitySubmit = () => {
    if (city.trim() !== "") {
      dispatch(fetchWeatherThunk(city));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      setErrorMessage('Type something!');
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
      priority,
    };
    dispatch(addTask(newTodo));
    inputRef.current.value = "";
    setErrorMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      add();
    }
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const sortedTasks = [...todoList].sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  useEffect(() => {
    dispatch(fetchWeatherThunk("Sakti"));
  }, [dispatch]);

  return (
    <>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-700 text-white rounded-lg"
      >
        Logout
      </button>
      {/* weather information */}
      <div className="my-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={handleCityChange}
            className="text-black p-2 rounded-lg border border-gray-300 flex-1"
          />
          <button
            onClick={handleCitySubmit}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Search
          </button>
        </div>
        {weatherLoading && <p>Loading weather...</p>}
        {weatherError && <p className="text-red-500">Error: {weatherError}</p>}
        {weather && (
          <div className="my-4 p-4 bg-gray-800 text-white rounded-lg">
            <h2 className="text-xl font-bold">Weather in {weather.location.name}</h2>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Condition: {weather.current.condition.text}</p>
          </div>
        )}
      </div>

      <div className="w-[95%] min-h-[80vh] bg-black/50 backdrop:blur-lg flex flex-col p-7 rounded-xl md:w-[650px] border-x-4 border-white">

        <div className="flex items-center mt-7 gap-2">
          <img src={todo_icon} alt="image" className="w-8 bg-white rounded-sm" />
          <h1 className="text-3xl font-semibold">To Do List</h1>
        </div>

        <div className="flex items-center my-7 bg-gray-800 rounded-xl">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add your task"
            className="w-[50%] bg-transparent text-white border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-100"
            onKeyDown={handleKeyPress}
          />
          <button
            onClick={add}
            type="button"
            className="border-none rounded-lg bg-green-500 text-white font-bold mr-2 w-24 h-8 cursor-pointer"
          >Add +
          </button>
        </div>
        <select
          value={priority}
          onChange={handlePriorityChange}
          className="bg-gray-700 text-white border-none rounded-lg px-2 py-1 w-32"
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 pl-6">{errorMessage}</p> // Show error message
        )}
        <div className="w-full flex flex-col">
          {
            sortedTasks.length === 0 ? <div className="text-lg m-auto">No tasks available</div>
              : sortedTasks.map((item, index) => (
                <TodoItems
                  key={index}
                  text={item.text}
                  id={item.id}
                  isComplete={item.isComplete}
                  priority={item.priority}
                />)).reverse()
          }
        </div>

      </div>
    </>
  );
};

export default Todo;