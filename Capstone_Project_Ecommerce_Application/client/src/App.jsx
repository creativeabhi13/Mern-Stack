import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'

const App = () => {
  return (
   <div className="flex flex-col overflow-hidden bg-white">
    {/* common components  */}
    <h1>Header Routes</h1>
    <Routes>
      <Route path="/auth" element={<AuthLayout />} > 
        <Route path="login" element={<AuthLogin/>} />
        <Route path="register" element={<AuthRegister/>} />
      </Route>
    </Routes>
   </div>
  )
}

export default App