import { Routes, Route } from "react-router-dom"
import Home from "./Routes/Home"
import Lab from "./Routes/lab"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lab" element={<Lab/>}/>
    </Routes>
  )
}

export default App
