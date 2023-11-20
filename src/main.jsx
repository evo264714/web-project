import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Pages/Home/Home';
import Search from './components/Search/Search';
import AuthProvider from './components/providers/AuthProvider';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Prescription from './components/Prescription/Prescription';
import FAQ from './components/FAQ/FAQ';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/search',
        element: <Search></Search>, // Add a new route for the search page
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'prescription',
        element: <Prescription></Prescription>
      },
      {
        path: 'faq',
        element: <FAQ></FAQ>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
