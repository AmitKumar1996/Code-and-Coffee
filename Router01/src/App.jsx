import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import User from './components/User'

function App()
{
  const router = createBrowserRouter( [
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/login", // ✅ Corrected path
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/about", // ✅ Corrected path
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <Navbar />
          <User />
        </>
      ),
    },
  ] )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
