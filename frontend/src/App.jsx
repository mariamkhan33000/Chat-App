import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";
import Left from "./Home/LeftPart/Left";
import Right from "./Home/RightPart/Right";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Left />
              <Right />
            </div>
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
    </Routes>
  );
};

export default App;
