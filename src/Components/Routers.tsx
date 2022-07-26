import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import ReactPage from './Domains/React/ReactPage'
import JavaPage from './Domains/Java/JavaPage'
import PythonPage from './Domains/Python/PythonPage'
import AngularPage from './Domains/Angular/AngularPage'
import ReactQuestions from './Domains/React/ReactQuestions'
import AngularQuestions from './Domains/Angular/AngularQuestions'
import JavaQuestions from './Domains/Java/JavaQuestions'
import PythonQuestions from './Domains/Python/PythonQuestions'

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/react' element={<ReactPage />}></Route>
        <Route path='/java' element={<JavaPage />} ></Route>
        <Route path='/python' element={<PythonPage />}></Route>
        <Route path='/angular' element={<AngularPage />}></Route>
        <Route path='/reactQuestion' element={<ReactQuestions />}></Route>
        <Route path='/javaQuestion' element={<JavaQuestions />} ></Route>
        <Route path='/pythonQuestion' element={<PythonQuestions />}></Route>
        <Route path='/angularQuestion' element={<AngularQuestions />}></Route>
      </Routes>
    </>
  )
}
