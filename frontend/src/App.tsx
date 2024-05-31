import { Toaster } from "react-hot-toast"
import Login from "./pages/login/Login"

function App() {
  return (
    <div className='p-4 h-screen flex justify-center items-center'>
      <Login />
      <Toaster/>
    </div>
  )
}

export default App
