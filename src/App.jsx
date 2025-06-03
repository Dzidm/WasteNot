import React from 'react'
import './App.css'
import About from './pages/OtherPages/About';
import Contact from './pages/OtherPages/Contact';
import Resources from './pages/OtherPages/Resources';
import Home from '.';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootsLayout from './layouts/RootsLayout';
import SignUp from './pages/forms/SignUp';
import UserDashboard from './pages/OtherPages/UserDashboard';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/Dashboard/Overview';
import Challenges from './pages/Dashboard/Challenges';
import Settings from './pages/Dashboard/Settings';
import PostWaste from './pages/Dashboard/PostWaste';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootsLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'resources', element: <Resources /> },
      { path: 'userDashboard', element: <UserDashboard /> },
      { path: 'signUp', element: <SignUp/> },
    
    ],
  },

  {path: '/dashboard', 
       element: <DashboardLayout/>,
       children: [{index: true, element:<Overview/>},
      { path: 'settings', element: <Settings/> },
      { path: 'challenges', element: <Challenges/> },
      { path: 'postWaste', element: <PostWaste/> },

       ]
      },
]);



function App() {

 return (
      <RouterProvider router={router} />
  );
}

export default App
