import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin/layout'
import AdminDashboard from './pages/admin/dashboard'
import AdminOrders from './pages/admin/orders'
import AdminProducts from './pages/admin/products'
import AdminFeatures from './pages/admin/features'
import ShoppingLayout from './components/shopping/layout'
import NotFound from './pages/not-found'
import ShoppingAccount from './pages/shopping/account'
import ShoppingHome from './pages/shopping/home'
import ShoppingCheckout from './pages/shopping/checkout'
import ShoppingListing from './pages/shopping/listing'
import CheckAuth from './components/common/check-auth'
import UnAuthPage from './pages/un-auth'

const App = () => {

const isAuthenticated = false;
const user = {
  name: "John Doe",
  role: "admin"
}

  return (
   <div className="flex flex-col overflow-hidden bg-white">
    {/* common components  */}
    <Routes>
      <Route path="/auth" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AuthLayout/>
        </CheckAuth>
        
        } > 
        <Route path="login" element={<AuthLogin/>} />
        <Route path="register" element={<AuthRegister/>} />
      </Route>

      <Route path="/admin" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout/>
        </CheckAuth>
      } >
        <Route path="dashboard" element={<AdminDashboard/>} />
        <Route path="products" element={<AdminProducts/>} />
        <Route path="orders" element={<AdminOrders/>} />
        <Route path="features" element={<AdminFeatures/>} />
       
      </Route>

      <Route path="/shop" element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout/>
        </CheckAuth>
      } >
        <Route path="account" element={<ShoppingAccount/>} />
        <Route path="home" element={<ShoppingHome/>} />
        <Route path="checkout" element={<ShoppingCheckout/>} />
        <Route path="listing" element={<ShoppingListing/>} />
      
      </Route>

      <Route path="*" element={<NotFound/>} />
      <Route path="/unauth-page" element={<UnAuthPage/>} />
    </Routes>
   </div>
  )
}

export default App