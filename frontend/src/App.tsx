import { Toaster } from "react-hot-toast"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"

function App() {
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Signup />
      <Toaster/>
    </div>
  )
}

export default App
