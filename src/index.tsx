import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import './index.css'
import App from './App'
import CreateTimer from './components/Pages/CreateTimer'
import EditTimer from './components/Pages/EditTimer'
import LoginRegister from './components/Pages/LoginRegister'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/user/:id'
  },
  {
    path: '/login',
    element: <LoginRegister />
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
