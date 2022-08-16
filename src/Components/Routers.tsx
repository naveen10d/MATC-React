import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import Header from './Header'

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </>
  )
}
