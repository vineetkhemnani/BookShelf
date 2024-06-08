import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BookShelf from './BookShelf.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/shelf',
    element: <BookShelf />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
