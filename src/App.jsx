import Login from "./components/Login";
import Todo from "./components/Todo";
import { useSelector } from "react-redux";

const App = () => {

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <div className=" bg-black flex flex-col items-center justify-center p-4 min-h-screen">
      {isAuthenticated ? <Todo /> : <Login />}
    </div>
  );
};

export default App;