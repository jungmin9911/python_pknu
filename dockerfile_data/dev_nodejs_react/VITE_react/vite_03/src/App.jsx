import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Test from './pages/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">화면 보기</Link>
      <Routes>
        <Route path='/' element={<Test/>}/>
      </Routes>
    </>
  )
}

export default App
