import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Css from './pages/Ex07'
import TodoList from './pages/Ex08'
import Eff from './pages/Ex09'
import Fetch from './pages/Ex10'
import Show from './pages/Ex11'
import Table from './pages/Ex12'
import Ball from './pages/Ex13'
import Axi from './pages/Ex14'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">Home</Link> | {" "}
      <Link to="/ex07">예제7</Link> | {" "}
      <Link to="/ex08">예제8</Link> | {" "}
      <Link to="/ex09">예제9</Link> | {" "}
      <Link to="/ex10">예제10</Link> | {" "}
      <Link to="/ex11">예제11</Link> | {" "}
      <Link to="/ex12">예제12</Link> | {" "}
      <Link to="/ex13">예제13</Link> | {" "}
      <Link to="/ex14">예제14</Link> | {" "}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ex07' element={<Css/>}/>
        <Route path='/ex08' element={<TodoList/>}/>
        <Route path='/ex09' element={<Eff/>}/>
        <Route path='/ex10' element={<Fetch/>}/>
        <Route path='/ex11' element={<Show/>}/>
        <Route path='/ex12' element={<Table/>}/>
        <Route path='/ex13' element={<Ball/>}/>
        <Route path='/ex14' element={<Axi/>}/>
      </Routes>
    </>
  )
}

export default App
