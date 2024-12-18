import Login from "./components/Login"
import Signup from "./components/Signup"
import { useAuth } from "./context/AuthProvider"
import Left from "./Home/LeftPart/Left"
import Right from "./Home/RightPart/Right"

const App = () => {
  const [authUser, setAuthUser] = useAuth()
  return (
    <div className="flex h-screen">
      <Left/>
      <Right/>
    </div>
    //  <Signup />
    //  <Login/>
  )
}

export default App