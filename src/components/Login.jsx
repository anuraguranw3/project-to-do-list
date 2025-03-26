import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const mockUser = { id: 1, name: "John Doe" };
    dispatch(login(mockUser));
  };

  return (
    <div className="flex items-center justify-center p-5 bg-gray-800 rounded-lg">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;