import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Features from './pages/Features';
import ClientManagement from './pages/ClientManagement';
import FormDetails from './pages/FormDetails';
import ProductManagement from './pages/ProductManagement';
import SubscribedEmail from './pages/SubscribedEmail';

const router = createBrowserRouter([
    {
        path: '/', element: <LandingPage />
    },
    {
        path: '/signup', element: <Signup />
    },
    {
        path: '/login', element: <Login />
    },
    {
        path: '/features', element: <Features />
    },
    {
        path: '/client-management', element: <ClientManagement />
    },
    {
        path: '/form-details', element: <FormDetails />
    },
    {
        path: '/product-management', element: <ProductManagement />
    },
    {
        path: '/subscribed-email', element: <SubscribedEmail />
    }
    
])

const App = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App