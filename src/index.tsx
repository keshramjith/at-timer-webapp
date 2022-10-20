import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import Dashboard from './components/Pages/Dashboard'
import CreateTimer from './components/Pages/CreateTimer'
import EditTimer from './components/Pages/EditTimer'
import Login from './components/Login'
import Register from './components/Register'
import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    path: '/user/:id'
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/create',
    element: <CreateTimer />
  },
  {
    path: '/edit',
    element: <EditTimer />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ChakraProvider>
    <RouterProvider router={router} />
  </ChakraProvider>
)
