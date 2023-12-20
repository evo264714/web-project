import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main.jsx';
import Home from './components/Pages/Home/Home';
import AuthProvider from './components/providers/AuthProvider';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import FAQ from './components/FAQ/FAQSection';
import HospitalPage from './components/HospitalPage/HopitalPage';
import AppointmentForm from './components/AppointmentForm/AppointmentForm';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import PrivateRoute from './components/Routes/PrivateRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './components/providers/userProvider';
import Prescriptions from './components/Prescriptions/Prescriptions';

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
        path: 'register',
        element: <Register></Register>
      },
      {
        path: '/hospitals',
        element: <HospitalPage></HospitalPage>
      },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'faq',
        element: <FAQ></FAQ>
      },
      {
        path: 'appointment',
        element: <PrivateRoute><AppointmentForm></AppointmentForm></PrivateRoute>
      },
      {
        path: 'dashboard',
        element: <PrivateRoute><UserProvider><AdminDashboard></AdminDashboard></UserProvider></PrivateRoute>
      },
      {
        path: 'prescriptions',
        element: <PrivateRoute><Prescriptions></Prescriptions></PrivateRoute>
      }
    ]
  },
]);

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
)
